/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Question = require('./show_question'),
	GuessQuestion = require('./guess_question'),
	_ = require('lodash');

var Play = React.createClass({
	getInitialState: function(){
		return {questions:{}};
	},
	getButton: function(){
		if(_.isEmpty(this.state.questions)){
			return "Load game";
		}
		else{
			return "Start game";
		}		
	},
	runGame: function(){
		console.log("hej");
		_.map(this.state.questions,function(q){
	          		return <GuessQuestion data={q}/>;
		        });
	},
	handleClick: function() {
 	 	if(_.isEmpty(this.state.questions)){
			this.loadQuestions();
		}
		else{
			this.runGame();	
		}
   	},
	loadQuestions: function() {
		var me = this;
		this.ref = new Firebase("https://ria2014.firebaseio.com/");
		this.ref.child('questions').limitToLast(10).once("value", function(data) {
			me.setState({'questions':data.val()});
		});
    },
	render: function() {
		 return(
			<div id = "game">
			<h2>Let's play! </h2>
				<button ref="button" value={this.getButton()} onClick={this.handleClick}>{this.getButton()}</button>
				{_.map(this.state.questions,function(q){
	          		return <GuessQuestion data={q}/>;
		        })}
			</div>
		);
	}
	});
	
module.exports = Play;