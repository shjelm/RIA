/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),	
	F = require('./form');
	
var QuestionBox = React.createClass({
	 handleQuestionSubmit: function(question) {
 	 	this.questionsRef = new Firebase("https://ria2014.firebaseio.com/");
 	 	var qRef = this.questionsRef.child('questions').push(question);
 	 	qRef.update({id:qRef.key()});
    },
	 render: function() {
          return (
            <div className="questionBox">
              <F onQuestionSubmit={this.handleQuestionSubmit} />
            </div>
          );
   	}
});

module.exports = QuestionBox;