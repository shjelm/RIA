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
	runGame: function(){
		this.setState({isplaying:true});
	},
	loadQuestions: function() {
		var me = this;
		this.ref = new Firebase("https://ria2014.firebaseio.com/");
		this.ref.child('questions').limitToLast(10).once("value", function(data) {
			me.setState({'questions':data.val()});
		});
    },
    stopGame: function(){
    	this.setState({isplaying:false});
    },
	render: function() {
		var button;
		if (_.isEmpty(this.state.questions)){
			return (
				<div id = "game">
					<button onClick={this.loadQuestions}>load questions</button>
				</div>
			);
		} else if (!this.state.isplaying){
			return (
				<div id = "game">
					<button onClick={this.runGame}>start game</button>
				</div>
			);
		} else {
			return (
				<div id = "game">
					<button onClick={this.stopGame}>stop game</button>
					{_.map(this.state.questions,function(q){
	          			return <GuessQuestion data={q}/>;
		        	})}
				</div>
			);
		}
	}
});
	
module.exports = Play;