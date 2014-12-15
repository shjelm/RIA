/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link;
	
var QuestionBox = React.createClass({
	 handleQuestionSubmit: function(question) {
 	 	this.questionsRef = new Firebase("https://ria2014.firebaseio.com/");
 	 	var qRef = this.questionsRef.child('questions').push(question);
 	 	qRef.update({id:qRef.key()});
    },
	 render: function() {
          return (
            <div className="questionBox">
              <QuestionForm onQuestionSubmit={this.handleQuestionSubmit} />
            </div>
          );
   	}
});

var QuestionForm = React.createClass({
	isValid: function() {
    		var fields = ['question', 'correct', 'answer2', 'answer3', 'answer4'];
    		if (this.props.question) fields.push('question');
    		if (this.props.correct) fields.push('correct');
    		if (this.props.answer2) fields.push('answer2');
    		if (this.props.answer3) fields.push('answer3');
    		if (this.props.answer4) fields.push('answer4');

    		var errors = {};
    		fields.forEach(function(field) {
	      		var value = this.refs[field].getDOMNode().value.trim();
	      		if (!value) {
	        		errors[field] = 'This field is required';
	      		}
    		}.bind(this));
    		this.setState({errors: errors});

		    var isValid = true;
		    for (var error in errors) {
		      isValid = false;
		      break;
		    }
		    return isValid;
	  	},
        handleSubmit: function() {
          	var question = this.refs.question.getDOMNode().value.trim(),
          		correct = this.refs.correct.getDOMNode().value.trim(),
      			answer2 = this.refs.answer2.getDOMNode().value.trim(),
      			answer3 = this.refs.answer3.getDOMNode().value.trim(),
      			answer4 = this.refs.answer4.getDOMNode().value.trim();
      			
  			if (this.isValid()) {
	          	this.props.onQuestionSubmit({question: question, correct: correct, answer2: answer2, answer3: answer3, answer4: answer4});
	          	this.refs.question.getDOMNode().value = "";
	          	this.refs.correct.getDOMNode().value = "";
	          	this.refs.answer2.getDOMNode().value = "";
	          	this.refs.answer3.getDOMNode().value = "";
	          	this.refs.answer4.getDOMNode().value = "";       
	          	this.refs.errors.getDOMNode().innerHTML = '';
	          	}
	          	else{
	        		this.refs.errors.getDOMNode().innerHTML = "<p>All fields are required.</p>";
	          	}
	          	
          		e.preventDefault();
        },
		render: function(){
		return (    
          <div id="questionForm" >
			<form onSubmit={this.handleSubmit} ref = "questionForm" className="form-horizontal">
			<div id="errors" ref="errors"></div>
			<div id="question">
		          <label>Question:</label>
		          	<p><input type="text" placeholder="Say something..." ref="question" className="form-control" /></p>
	          </div>
	          <div id="answers">
		          <label>Provide correct answer: </label>
		          <p><input type="text" placeholder="Say something..." ref="correct" className="form-control"/></p>
		          <label>Provide some other answers: </label>
		          <p><input type="text" placeholder="Say something..." ref="answer2" className="form-control"/></p>
		          <p><input type="text" placeholder="Say something..." ref="answer3" className="form-control"/></p>
		          <p><input type="text" placeholder="Say something..." ref="answer4" className="form-control"/></p>
	          </div>
	          <input type="submit" value="Add question" className="btn btn-success"/>
          </form>
          </div>
        );
       }
     });

module.exports = QuestionBox;