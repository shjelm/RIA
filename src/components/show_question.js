/** @jsx React.DOM */

var React = require('react');

var Question = React.createClass({
	render: function(){
		return (
		<div id="questionbox">
          <div id="question">
          <h2>Question:</h2>
          </div>
          <div id="answers">
          </div>
        </div>
        );
   }
});

module.exports = Question;