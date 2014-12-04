/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Question = require('./show_question'),
	_ = require('lodash');

var Play = React.createClass({
	getInitialState: function(){
		return {questions:{}};
	},
	componentWillMount: function() {
		var me = this;
		this.ref = new Firebase("https://ria2014.firebaseio.com/");
		this.ref.child('questions').on("value", function(data) {
			me.setState({'questions':data.val()});
		});
    },
		render: function() {
			 return(
			<div id = "game">
			<h2>Let's play! </h2>
				{_.map(this.state.questions,function(q){
		          	return <Question data={q}/>;
		          })}
			</div>
			);
		}
	});
	
module.exports = Play;