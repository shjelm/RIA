/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router');
	

var Question = React.createClass({
	getInitialState: function(){return {val:""};},
	handleQuestionSubmit: function(question) {
 	 	this.questionsRef = new Firebase("https://ria2014.firebaseio.com/questions/");
	 	this.questionsRef.child(this.props.data.id).update(question);
    },
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
	          	this.handleQuestionSubmit({question: question, correct: correct, answer2: answer2, answer3: answer3, answer4: answer4});	          	
    			this.setState({isediting:false});     
	          	}
	          	else{
	        		this.refs.errors.getDOMNode().innerHTML = "<p>All fields are required.</p>";
	          	}
          e.preventDefault();
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
          <div id="questionForm" >
			<form onSubmit={this.handleSubmit} ref = "questionForm" className="form-horizontal">
			<div id="errors" ref="errors"></div>
			<div id="question">
		          <label>Question:</label>
		          	<p><input type="text" ref="question" className="form-control" defaultValue={this.props.data.question} /></p>
	          </div>
	          <div id="answers">
		          <label>Provide correct answer: </label>
		          <p><input type="text" defaultValue={this.props.data.correct} ref="correct" className="form-control" /></p>
		          <label>Provide some other answers: </label>
		          <p><input type="text" defaultValue={this.props.data.answer2} ref="answer2" className="form-control"/></p>
		          <p><input type="text" defaultValue={this.props.data.answer3} ref="answer3" className="form-control"/></p>
		          <p><input type="text" defaultValue={this.props.data.answer4} ref="answer4" className="form-control"/></p>
	          </div>
	          <input type="submit" className="btn btn-success" value="Update question" />
          </form>
          </div>
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