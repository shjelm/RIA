/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
    Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    QForm = require('./qform.js'),
    Start = require('./start.js'),
    Show_question = require('./show_question.js'),
    Show_all_questions = require('./show_all_questions.js'),
    Add_question = require('./add_question.js'),
    Play_game = require('./play_game.js'),
    Container = require('./container.js');
    NotFound = require('./not_found.js');
    
var App = (
	    <Route name="app" path="/" handler={Container}>
	  	  <Route name="start" handler={Start} />
	      <Route name="add_question" handler={Add_question} />
	      <Route name="show_question" handler={Show_question} />
	      <Route name="play_game" handler={Play_game} />
	      <Route name="show_all_questions" handler={Show_all_questions} />
	      <DefaultRoute handler={Start}/>
	      <NotFoundRoute handler={NotFound}/>
	    </Route>
);

module.exports = App;
