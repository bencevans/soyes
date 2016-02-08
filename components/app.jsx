'strict mode';

var React = require('react');
var ReactDOM = require('react-dom');

const ZoneList = require('./zone-list')

var mountNode = document.getElementById('container');

module.exports = function (zones) {
  ReactDOM.render(<ZoneList zones={zones} />, mountNode);
}
