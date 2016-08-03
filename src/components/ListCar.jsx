var React = require('react');
var ListCar = React.createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.car}</h4>
      </li>
    );
  }
});

module.exports = ListCar;
