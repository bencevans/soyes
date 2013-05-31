
/**
 * Dependencies
 */

var express = require('express'),
    app = express(),
    sonos = require('sonos'),
    request = require('request'),
    _ = require('underscore');

/**
 * Express Config
 */

app.use(express.static(__dirname + '/public'));

var devices = {};

sonos.search(function(device) {
  device.deviceDescription(function(err, desc) {
    devices[desc.UDN] = device;
    devices[desc.UDN].description = desc;
    device.currentTrack(function(err, track) {
      devices[desc.UDN].track = track;
    });
  });
});

app.get('/devices.json', function(req, res) {
  res.send(devices);
});

app.get('/topology.json', function(req, res, next) {
  var s = new sonos.Sonos('192.168.2.23');
  s.getTopology(function(err, top) {
    res.send(top);
  });
});

app.get('/device/:UDN/image.png', function(req, res, next) {
  if(!devices[req.params.UDN]) return next();
  request('http://' + devices[req.params.UDN].host + ':' + devices[req.params.UDN].port + devices[req.params.UDN].description.iconList.icon[0].url).pipe(res);
});

app.get('/device/:UDN/proxy/*', function(req, res, next) {
  var device = devices[req.params.UDN];
  if(!device) return next();
  request('http://' + device.host + ':' + device.port + '/' + req.params[0] + '?' + require('querystring').stringify(req.query)).pipe(res);
});



app.get('/zone/:UDN', function(req, res, next) {
  res.render('index', {
    zone: {
      devices: [devices[req.params.UDN]],
      currentTrack: devices[req.params.UDN].track,
      playState: 'playing'
    },
    devices: devices,
    zones: _.map(devices, function(device) {
      return {
        devices: [ device ],
        currentTrack: device.track,
        playState: 'playing'
      };
    })
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Soyes listening on port ' + (process.env.PORT || 3000));
  console.log('Open http://localhost:' + (process.env.PORT || 3000) + ' in your browser');
});