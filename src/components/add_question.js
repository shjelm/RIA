/** @jsx React.DOM */

var React = require('react');

var QuestionBox = React.createClass({
	 handleQuestionSubmit: function(question) {
 	 	this.questionsRef = new Firebase("https://ria2014.firebaseio.com/");
 	 	this.questionsRef.child('questions').push(question);
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
    		var fields = ['question', 'answer1', 'answer2', 'answer3', 'answer4'];
    		if (this.props.question) 
    			fields.push('question');
    		if (this.props.answer1) fields.push('answer1');
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
          		answer1 = this.refs.answer1.getDOMNode().value.trim(),
      			answer2 = this.refs.answer2.getDOMNode().value.trim(),
      			answer3 = this.refs.answer3.getDOMNode().value.trim(),
      			answer4 = this.refs.answer4.getDOMNode().value.trim();
      			
  			if (this.isValid()) {
	          	this.props.onQuestionSubmit({question: question, answer1: answer1, answer2: answer2, answer3: answer3, answer4: answer4});
	          	this.refs.question.getDOMNode().value = "";
	          	this.refs.answer1.getDOMNode().value = "";
	          	this.refs.answer2.getDOMNode().value = "";
	          	this.refs.answer3.getDOMNode().value = "";
	          	this.refs.answer4.getDOMNode().value = "";
	          	return true;
          }
        },
		render: function(){
		return (    
          <div id="questionForm" >
			<form onSubmit={this.handleSubmit} ref = "questionForm">
			<div id="question">
		          <h2>Question:</h2>
		          <p>What's the question?: </p>
		          	<p><input type="text" placeholder="Add question" ref="question" /></p>
	          </div>
	          <div id="answers">
		          <h2>Answers: </h2>
		          <p>Provide some answers: </p>
		          <p><input type="text" placeholder="Say something..." ref="answer1" /></p>
		          <p><input type="text" placeholder="Say something..." ref="answer2" /></p>
		          <p><input type="text" placeholder="Say something..." ref="answer3" /></p>
		          <p><input type="text" placeholder="Say something..." ref="answer4" /></p>
	          </div>
	          <input type="submit" value="Post" />
          </form>
          </div>
        );
       }
     });

module.exports = QuestionBox;