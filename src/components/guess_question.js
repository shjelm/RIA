/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router');

var Guess = React.createClass({
	render: function(){
		return (		
      	<div id="guessForm" >
			<form onSubmit={this.handleSubmit} ref = "guessForm" className="form-horizontal">
			<div id="question">
				<h3>Question</h3>
		          <p>{this.props.data.question}</p>
	          </div>
	          <div id="answers">
		          <p><input type="radio" name="answer" value={this.props.data.correct}> {this.props.data.correct} </input></p>
		          <p><input type="radio" name="answer" value={this.props.data.answer2}> {this.props.data.answer2}</input></p>
		          <p><input type="radio" name="answer" value={this.props.data.answer3}> {this.props.data.answer3}</input></p>
		          <p><input type="radio" name="answer" value={this.props.data.answer4}> {this.props.data.answer4}</input></p>
	          </div>
      		</form>
      	</div>
        );
   }
});

module.exports = Guess;