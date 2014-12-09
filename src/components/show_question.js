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
          e.preventDefault();
    },
    editQuestion: function(){
    	this.setState({isediting:true});
    },
	render: function(){
		if(this.state.isediting){
			return (
          <div id="questionForm" >
			<form onSubmit={this.handleSubmit} ref = "questionForm" className="form-horizontal">
			<div id="question">
		          <label>Question:</label>
		          	<p><input type="text" ref="question" className="input-xlarge" defaultValue={this.props.data.question} /></p>
	          </div>
	          <div id="answers">
		          <label>Provide correct answer: </label>
		          <p><input type="text" placeholder="Say something..." defaultValue={this.props.data.correct} ref="correct" className="input-xlarge"></input></p>
		          <label>Provide some other answers: </label>
		          <p><input type="text" placeholder="Say something..." defaultValue={this.props.data.answer2} ref="answer2" className="input-xlarge"/></p>
		          <p><input type="text" placeholder="Say something..." defaultValue={this.props.data.answer3} ref="answer3" className="input-xlarge"/></p>
		          <p><input type="text" placeholder="Say something..." defaultValue={this.props.data.answer4} ref="answer4" className="input-xlarge"/></p>
	          </div>
	          <input type="submit" value="Update question" />
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
          <button onClick={this.editQuestion}>Edit</button>
        </div>
        );
       }

       	   }
});

module.exports = Question;