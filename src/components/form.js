/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	_ = require('lodash');

var FormToFill = React.createClass({
	getInitialState: function(){
		this.setState({isadded: false});
		return {};
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
	  	getStatus: function(){
	  		console.log(_.isEmpty(this.props.data));
	  		if(_.isEmpty(this.props.data)){
	          	return true;
	          }
			return false;
	  	},
        handleSubmit: function(e) {
          	var question = this.refs.question.getDOMNode().value.trim(),
          		correct = this.refs.correct.getDOMNode().value.trim(),
      			answer2 = this.refs.answer2.getDOMNode().value.trim(),
      			answer3 = this.refs.answer3.getDOMNode().value.trim(),
      			answer4 = this.refs.answer4.getDOMNode().value.trim();
      			
  			if (this.isValid()) {
		          	this.props.onQuestionSubmit({question: question, correct: correct, answer2: answer2, answer3: answer3, answer4: answer4});
		          	if(this.getStatus()){
			          	this.refs.question.getDOMNode().value = "";
			          	this.refs.correct.getDOMNode().value = "";
			          	this.refs.answer2.getDOMNode().value = "";
			          	this.refs.answer3.getDOMNode().value = "";
			          	this.refs.answer4.getDOMNode().value = "";       
			          	this.refs.msg.getDOMNode().innerHTML = '';
		          	}
		          	if(this.props.editing){
	          			this.props.editing(); 
	          		}
	          	}
	          	else{
	        		this.refs.msg.getDOMNode().innerHTML = "<p>All fields are required.</p>";
	          	}
	          	if(this.getStatus()){
	          		this.refs.msg.getDOMNode().innerHTML = "<p>The question has been added.</p>";
	          	}
	          	
          		e.preventDefault();
        },
	render: function(){
		var _q, _c, _a2, _a3, _a4 = '';
		var button = 'Add question';
		if(!_.isEmpty(this.props.data)){
			_q = this.props.data.question;
			_c = this.props.data.correct;
			_a2 = this.props.data.answer2;
			_a3 = this.props.data.answer3;
			_a4 = this.props.data.answer4;
			button = 'Update question';
		}
		return (
		<div id="questionForm" >
			<form onSubmit={this.handleSubmit} ref = "questionForm" className="form-horizontal">
			<div id="msg" ref="msg"></div>
			<div id="question">
		          <label>Question:</label>
		          	<p><input type="text" ref="question" defaultValue={_q} className="form-control" /></p>
	          </div>
	          <div id="answers">
		          <label>Provide correct answer: </label>
		          <p><input type="text" ref="correct" defaultValue={_c} className="form-control"/></p>
		          <label>Provide some other answers: </label>
		          <p><input type="text" ref="answer2" defaultValue={_a2}  className="form-control"/></p>
		          <p><input type="text" ref="answer3" defaultValue={_a3}  className="form-control"/></p>
		          <p><input type="text" ref="answer4" defaultValue={_a4}  className="form-control"/></p>
	          </div>
	          <input type="submit" value={button} className="btn btn-success"/>
          </form>
          </div>
        );
   }
});

module.exports = FormToFill;