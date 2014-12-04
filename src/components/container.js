/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Start = require('./start'),
    RouteHandler = require('react-router').RouteHandler,
	Link = Router.Link;

var Container = React.createClass({
	render: function(){
		return (
		<div class="container" id="container"><h2> Quiz </h2>
			<Link to='start'>Homepage</Link>
			<RouteHandler />
        </div>
        );
   }
});

module.exports = Container;