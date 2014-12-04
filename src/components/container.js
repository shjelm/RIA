/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Start = require('./start'),
    RouteHandler = require('react-router').RouteHandler;

var Container = React.createClass({
	render: function(){
		return (
		<div class="container" id="container">
			<h2> Quiz </h2>
			<RouteHandler />
			<Footer />
        </div>
        );
   }
});

module.exports = Container;