/** @jsx React.DOM */

var approutes = require('./components/app'),
    React = require('react'),
    Router = require('react-router');

Router.run(approutes, function(Handler) {
	React.render(<Handler />, document.getElementById('main'));
});