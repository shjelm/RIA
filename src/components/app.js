/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
    Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    QForm = require('./qform.js'),
    Start = require('./start.js'),
    Container = require('./container.js');
    
var App = (
	    <Route name="app" path="/" handler={Container}>
	      <Route name="qform" handler={QForm} />
	      <DefaultRoute handler={Start}/>
	    </Route>
);

module.exports = App;
