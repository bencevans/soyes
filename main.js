'use strict';
require("babel-register");

const sonos = require('sonos');
const $ = require('jquery');

const $loading = $('#loading');
const $container = $('#container');

const app = require('./components/app');

var devices = {};

let search = sonos.search()
search.once('DeviceAvailable', function (dev) {
  dev.getTopology(function (err, topology) {

    dev.deviceDescription(function (err, description) {
      devices[description.UDN] = dev;
      devices[description.UDN].description = description;

      $loading.fadeOut();
      $container.fadeIn();
      window.dev = dev;

      let zones = topology.zones.map(function (zone) {
        zone.devices = [];
        console.log(devices['uuid:' + zone.uuid])
        console.log(zone.uuid)
        console.log(devices)
        if (devices['uuid:' + zone.uuid]) {
          console.log('found')
          zone.devices.push(devices['uuid:' + zone.uuid])
        }
        console.log(zone);

        return zone;
      })
      app(zones)

    })




  })
})


findNetwork({ timeout: 10 *1000})
.then(listZones).then(showZones).then(hideLoader).catch(showError);
