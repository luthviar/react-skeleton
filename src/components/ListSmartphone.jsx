var React = require('react');
var ListSmartphone = React.createClass({
  render: function(){
    return (
      <li>
        <h4>{this.props.smartphone}</h4>
      </li>
    );
  }
});

module.exports = ListSmartphone;
