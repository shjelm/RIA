/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Footer = require('./footer');

var Header = React.createClass({
	render: function(){
		return (
		<div id="questionbox">
          <div id="question">
            <h3>Question:</h3>
            <p>{this.props.data.question}</p>
          </div>
        </div>
        );
   }
});

module.exports = Header;