var React = require('react');
var ReactDOM = require('react-dom');

var ZoneWidget = React.createClass({
  render: function() {
    var zone = this.props.zone;
    return <div className="row" style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>

      {/* Device List */}
      <div className=".col-xs-3" style={{ cursor: 'pointer'}}>
        {
          zone.devices.map(function (device) {
            return <div className=".col-xs-3 zoneDevices" key={device.description.UDN}>
              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=150&h=150" style={{ width: '58px', height: '48px' }}/>
              {device.description.roomName}
            </div>
          })
        }
      </div>

      {/* Grouping Actions */}
      <div className=".col-md-1">
        <a href="#" role="button" className="btn btn-primary" style={{ position: 'relative', top: '10px', right: '10px' }}>Group</a>
      </div>

      {/* Play Information */}
      <div className="row" style={{ backgroundColor: '#eee', marginBottom: '10px' }}>
        <div className=".col-xs-4">
          <p className="muted">
            <i className="icon-play"/>
            <i className="icon-pause"/>
            Angels - The XX
          </p>
        </div>
      </div>

    </div>;
    // <div class="row" style="background-color:#eee; margin-bottom:10px;">
    //   <div class="span4">
    //     <p class="muted" style="text-align:right;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;margin-right:10px;margin:2px 10px;">
    //
    //       <i class="icon-{{playIcon}}"></i>
    //       <i class="icon-play"></i>
    //       <i class="icon-pause"></i>
    //       {{zone.devices[0].track.title}} - {{zone.devices[0].track.artist}}
    //     </p>
    //   </div>;
  }
});

module.exports = ZoneWidget;
