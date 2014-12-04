/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Footer = require('./footer');

var Question = React.createClass({	
	printData: function(data){
			console.log("data");
			console.log(data);
	},
	loadData: function(){
		this.ref = new Firebase("https://ria2014.firebaseio.com/");
		this.ref.child('questions').on("value", function(data) {
			var idIndex = 0;
        	this.questions = [];
  			data.forEach(
	            function(data) {
	                var question = data.child('question');
	                var index = 0;
	                this.questions[idIndex] = []; 
	                this.questions[idIndex][index++] = question.val();
	                this.questions[idIndex][index++] = data.child('answer1').val();
	                this.questions[idIndex][index++] = data.child('answer2').val();
	                this.questions[idIndex][index++] = data.child('answer3').val();
	                this.questions[idIndex][index++] = data.child('answer4').val();           
	                idIndex++;
            	}
        	);
        	console.log(this.questions);
		});
	},
	componentWillMount: function() {
          this.loadData();
    },
	render: function(){
		return (
		<div id="questionbox">
          <div id="question">
          <h2>Questions:</h2>
          {this.loadData()}
          </div>
          <Footer />
        </div>
        );
   }
});

module.exports = Question;