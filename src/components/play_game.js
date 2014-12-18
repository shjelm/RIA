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
		this.setState({isplaying:false, answeredQ:0, correctAnswer:0, isguessing:true, isanswered: false});
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
    guessing: function(){
    	this.setState({isguessing:false, isanswered: true});
    },
    countQuestions: function(){
    	this.setState({answeredQ:this.state.answeredQ+1});    	
    	this.setState({isguessing:true, isanswered: false});
		this.refs.errors.getDOMNode().innerHTML = "";	
    },
	errorAll: function(){
		if(this.state.answeredQ !== 10){
			this.refs.errors.getDOMNode().innerHTML = "<p>You really should answer all questions.</p>";
			return false;
		}
		else{
			return true;
		}
	},
    stopGame: function(){
		this.setState({isplaying:false, isended:true});
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
    game: function(){
		if(this.state.answeredQ < 9){
			if(this.state.isanswered){
				this.countQuestions();
			}
			else{
				this.refs.errors.getDOMNode().innerHTML = "<p>You really should answer the question.</p>";				
			}
		}
		else{
			this.stopGame();
		}
   },
    getName: function(){
		if(this.state.answeredQ < 9){
			return "Next question";
		}
		else{
			return "End quiz";
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
				<GuessQuestion data={this.state.questions[this.state.answeredQ]} fun={this.addCorrect} guessing={this.state.isguessing} 
				getGuessing ={this.guessing} count = {this.state.answeredQ}/>
		        	<div id="errors" ref="errors"></div>
					<button onClick={this.game} className="btn btn-primary">{this.getName()}</button>
				</div>
			);
		}
	}
});
	
module.exports = Play;