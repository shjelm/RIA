/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Footer = require('./footer');

var Question = React.createClass({
	render: function(){
		return (
		<div id="questionbox">
          <div id="question">
            <h3>Question:</h3>
            <p>{this.props.data.question}</p>
          </div>
          <div id="answers">
            <h3>Answers:</h3>
            <ul>
            <li><p>{this.props.data.answer1}</p></li>
            <li><p>{this.props.data.answer2}</p></li>
            <li><p>{this.props.data.answer3}</p></li>
            <li><p>{this.props.data.answer4}</p></li>
            </ul>
          </div>
        </div>
        );
   }
});

module.exports = Question;