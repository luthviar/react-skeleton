var React = require('react');
var ListCar = require('./ListCar.jsx');

var cars = [{"id":1,"text":"honda"},{"id":2,"text":"toyota"},{"id":3,"text":"alphard"}];

var List2 = React.createClass({
  render : function(){
    var listCars = cars.map(function(carItem){
      return <ListCar key={carItem.id} car={carItem.text} />;
    });
    return (<ul>{listCars}</ul>);
  }
});

module.exports = List2;
