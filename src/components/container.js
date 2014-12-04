/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Start = require('./start'),
    RouteHandler = require('react-router').RouteHandler,
	Footer = require('./footer');

var Container = React.createClass({
	render: function(){
		return (
		<div className="container" id="container">
			<h2> Quiz </h2>
			<Footer />
			<RouteHandler />
        </div>
        );
   }
});

module.exports = Container;