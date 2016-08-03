var React = require('react');
var ListSmartphone = require('./ListSmartphone.jsx');

var smartphones = [{"id":1,"text":"samsung"},{"id":2,"text":"xiaomi"},{"id":3,"text":"iphone"}];

var List3 = React.createClass({
  render: function(){
    var listSmartphones = smartphones.map(function(phoneItem) {
      return <ListSmartphone key={phoneItem.id} smartphone={phoneItem.text} />
    });
    return(<ul>{listSmartphones}</ul>);
  }
});

module.exports = List3;
