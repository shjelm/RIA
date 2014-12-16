/** @jsx React.DOM */

var React = require('react'),	
	F = require('./form'),
	Router = require('react-router');
	

var Question = React.createClass({
	getInitialState: function(){return {val:""};},
	handleQuestionSubmit: function(question) {
 	 	this.questionsRef = new Firebase("https://ria2014.firebaseio.com/questions/");
	 	this.questionsRef.child(this.props.data.id).update(question);
    },
    isEditing: function(){
    	this.setState({isediting:false});
    },
    editQuestion: function(){
    	this.setState({isediting:true});
    },
    deleteQuestion: function(){
    	var onComplete = function(error) {
		  if (error) {
		    console.log("Question couldn't be deleted");
		  } else {
		    console.log('Question deleted!');
		  }
		};
		var x = confirm("Are you sure you want to delete?");
		this.questionsRef = new Firebase("https://ria2014.firebaseio.com/questions/");
		if(x){
    		this.questionsRef.child(this.props.data.id).remove(onComplete);
    	}
    },
	render: function(){
		if(this.state.isediting){
			return (
          		<F data={this.props.data} onQuestionSubmit={this.handleQuestionSubmit} editing={this.isEditing} />
	        );
       }
       else{
       	
		return (
		<div id="questionbox">
          <div id="question">
            <h3>Question:</h3>
            <p>{this.props.data.question}</p>
          </div>
          <div id="answers">
            <h3>Answers:</h3>
            <p>Correct: </p>
            <ul>
            <li><p>{this.props.data.correct}</p></li>
            </ul>
            <p>Other: </p>
            <ul>
            <li><p>{this.props.data.answer2}</p></li>
            <li><p>{this.props.data.answer3}</p></li>
            <li><p>{this.props.data.answer4}</p></li>
            </ul>
          </div>
          <button onClick={this.editQuestion} className="btn btn-warning">Edit</button>
          <button onClick={this.deleteQuestion} className="btn btn-danger">Delete</button>
        </div>
        );
       }

       	   }
});

module.exports = Question;