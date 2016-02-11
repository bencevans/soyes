'use strict';

const sonos = require('sonos');

function getTopology (options) {
  options = options || {};
  return new Promise((accept, reject) => {
    let search = sonos.search();
    search.once('DeviceAvailable', (device) => {
      device.getTopology((err, topology) => {
        if (err) {
          return reject(err);
        }
        accept(topology.zones);
      });
    });
    console.log(search)
  });
};

function gatherDescriptions (zones) {

}

function listZones (topology) {
  console.log(arguments)
}

module.exports = { getTopology };


getTopology().then(gatherDescriptions).then(function () {

})
