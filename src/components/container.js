/** @jsx React.DOM */

var React = require('react'),
	Link = require('react-router').Link,	
    Show_question = require('./show_question.js'),
    Add_question = require('./add_question.js');

var Container = React.createClass({
	render: function(){
		return (
		<div id="container">
          <div id="showQuestion">
          	<h2>Play game</h2>
          	<Link to='show_question'>Play!</Link>
          </div>
          <div id="addQuestion">
          	<h2>Add question</h2>
          	<Link to='add_question'>Here</Link>
          </div>
        </div>
        );
   }
});

module.exports = Container;