var React = require('react');
var ReactDOM = require('react-dom');

const ZoneWidget = require('./zone-widget');

var ZoneList = React.createClass({
  render: function () {
    return <div>{
      this.props.zones.map(function (zone) {
        return <ZoneWidget zone={zone} key={zone.uuid}/>;
      })
    }</div>;
  }
})

module.exports = ZoneList;
