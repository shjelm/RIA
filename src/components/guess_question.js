/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router');

var Guess = React.createClass({
	getInitialState: function(){
		this.setState({iscorrect:false});
		return {count:{}};
	},
	handleChange: function(){
		if(event.target.value === this.props.data.correct){
			this.setState({iscorrect: true});	
		}
		else{
			this.setState({isfalse:true});
		}
	},
	render: function(){	
		if(this.state.iscorrect){
			return (
				<div>
				<h2>Correct!</h2>
				<p>{this.props.data.correct} is the correct answer.</p>
				</div>
			);
		} else if(this.state.isfalse){
			return (
				<div>
				<h2>Incorrect!</h2>
				<p>You answered {event.target.value}. {this.props.data.correct} is the correct answer. </p>
				</div>
			);
		}
		else{
		return (		
      	<div id="guessForm" >
			<form onChange={this.handleChange} ref = "guessForm" className="form-horizontal">
			<div id="question">
				<h3>Question</h3>
		          <p>{this.props.data.question}</p>
	          </div>
	          <div id="answers">
		          <p><input type="radio" name="A" value={this.props.data.correct}> {this.props.data.correct} </input></p>
		          <p><input type="radio" name="A" value={this.props.data.answer2}> {this.props.data.answer2}</input></p>
		          <p><input type="radio" name="A" value={this.props.data.answer3}> {this.props.data.answer3}</input></p>
		          <p><input type="radio" name="A" value={this.props.data.answer4}> {this.props.data.answer4}</input></p>
	          </div>
      		</form>
      	</div>
        );
       }
   }
});

module.exports = Guess;