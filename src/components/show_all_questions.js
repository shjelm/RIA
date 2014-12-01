/** @jsx React.DOM */

var React = require('react');

var Question = React.createClass({
	render: function(){
		return (
		<div id="questionbox">
          <div id="question">
          <h2>Questions:</h2>
          </div>
        </div>
        );
   }
});

module.exports = Question;