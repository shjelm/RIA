/** @jsx React.DOM */

var React = require('react');

var NewQuestion = React.createClass({
	render: function(){
		return (
		<div id="questionbox">
          <div id="question">
          <h2>Question:</h2>
          <p>What's the question?: </p>
          </div>
          <div id="answers">
          <h2>Answers: </h2>
          <p>Provide some answers: </p>
          </div>
        </div>
        );
   }
});

module.exports = NewQuestion;