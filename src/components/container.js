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
			<div id="header">
			<img src="../images/quiz.png" alt="Quiz" />
			<Footer />
			</div>
			<RouteHandler />
        </div>
        );
   }
});

module.exports = Container;