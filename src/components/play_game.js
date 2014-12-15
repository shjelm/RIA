/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Question = require('./show_question'),
	GuessQuestion = require('./guess_question'),
	_ = require('lodash');

var Play = React.createClass({
	getInitialState: function(){
		return {questions:{},correctAnswer:0,answeredQ:0};
	},
	runGame: function(){
		this.setState({isplaying:true});
	},
	loadQuestions: function() {
		var me = this;
		this.ref = new Firebase("https://ria2014.firebaseio.com/");
	this.ref.child('questions').once("value", function(data) {
		var d = data.val();
		var value = _.shuffle(_.keys(d));
		var first = (_.first(value,10));
		
		var q = [];
		for (var i =0; i< first.length; i++){
			q.push(data.child(first[i]).val());
		}
		me.setState({'questions':q});
		});
		
		this.setState({isended:false});
    },
    countQuestions: function(){
    	this.setState({answeredQ:this.state.answeredQ+1});
    },
	errorAll: function(){
		if(this.state.answeredQ !== 10){
			console.log(this.refs.errors.getDOMNode());
			this.refs.errors.getDOMNode().innerHTML = "<p>You really should answer all questions.</p>";
			return false;
		}
		else{
			return true;
		}
	},
    stopGame: function(){
    	if(this.errorAll()){
    		this.setState({isplaying:false, isended:true});
    	}
    },
    addCorrect: function(){
    	this.setState({correctAnswer:this.state.correctAnswer+1});
    },
    printResult: function(){
    	if(this.state.correctAnswer === 0){
    		return "Well, that was bad. You got "+this.state.correctAnswer+" out of 10 questions right.";
    	}
    	else if(this.state.correctAnswer > 0 && this.state.correctAnswer < 6){
    		return "Pretty good. You got "+this.state.correctAnswer+" out of 10 questions right.";
    	}
    	else if(this.state.correctAnswer > 5 && this.state.correctAnswer < 10){
    		return "Great. You got "+this.state.correctAnswer+" out of 10 questions right.";
    	}
    	else{
    	 	return "Congratulations, you're awesome. You got all " +this.state.correctAnswer+" out of 10 questions right.";
    	}
    },
	render: function() {
		var button;
		if (_.isEmpty(this.state.questions)){
			return (
				<div id = "game">
					<button onClick={this.loadQuestions} className="btn btn-primary">Load questions</button>
				</div>
			);
		} else if (!this.state.isplaying && !this.state.isended){
			return (
				<div id = "game">
					<button onClick={this.runGame} className="btn btn-primary">Start quiz</button>
					<p>The questions has been loaded. Let's play!</p>
				</div>
			);
		}else if(this.state.isended){
			return (
				<div>
	        	<h2>{this.printResult()}</h2>
	        	<button onClick={this.loadQuestions} className="btn btn-primary">Play again</button>
	        	</div>
	       );
		}
		 else {
			return (
				<div id = "game">
					{_.map(this.state.questions,function(q){
	          			return <GuessQuestion data={q} fun={this.addCorrect} count={this.countQuestions}/>;
		        	},this)}
		        	<div id="errors" ref="errors"></div>
					<button onClick={this.stopGame} className="btn btn-primary">End quiz</button>
				</div>
			);
		}
	}
});
	
module.exports = Play;