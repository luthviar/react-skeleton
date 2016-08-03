var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');
var List2 = require('./components/List2.jsx');
var List3 = require('./components/List3.jsx');

ReactDOM.render(<List />, document.getElementById('ingredients'));
ReactDOM.render(<List2 />, document.getElementById('cars'));
ReactDOM.render(<List3 />, document.getElementById('smartphones'));
