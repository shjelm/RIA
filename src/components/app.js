/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
    Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    QForm = require('./qform.js'),
    Start = require('./start.js'),
    Show_question = require('./show_question.js'),
    Add_question = require('./add_question.js'),
    Container = require('./container.js');
    
var App = (
	    <Route name="app" path="/" handler={Container}>
	      <Route name="add_question" handler={Add_question} />
	      <Route name="show_question" path="./show_question.js" handler={Show_question} />
	      <DefaultRoute handler={Start}/>
	    </Route>
);

module.exports = App;
