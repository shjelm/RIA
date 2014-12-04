/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Footer = require('./footer');

var Question = React.createClass({
	render: function(){
		return (
		<div id="questionbox">
          <div id="question">
            <h2>Question:</h2>
            <p>{this.props.data.question}</p>
          </div>
          <div id="answers">
          </div>
        </div>
        );
   }
});

module.exports = Question;