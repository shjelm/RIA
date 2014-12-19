/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router');

var shuffle = function (array) {
  for (var i = 0; i < array.length; i++) {
    var random = Math.floor(Math.random() * (i + 1));
    var tmp = array[random];

    array[random] = array[i];
    array[i] = tmp;
  }
  return array;
};

var Guess = React.createClass({
	getInitialState: function(){
		this.setState({iscorrect:false});
		return {count:{}, answer: ''};
	},
	handleChange: function(){
		if(event.target.value === this.props.data.correct){
			this.setState({iscorrect: true});
			this.props.fun();	
		}
		else{
			this.setState({iscorrect:false, answer: event.target.value});
		}
		this.props.showBtn();
		this.props.getGuessing();
	},
	getNumber: function(){
		return this.props.count+1;	
	},
	render: function(){	
		if(this.state.iscorrect && this.props.guessing === false){
			return (
				<div>
				<h2>Correct!</h2>
				<p>{this.props.data.correct} is the correct answer.</p>
				</div>
			);
		} else if(!this.state.iscorrect && this.props.guessing === false){
			return (
				<div>
				<h2>Incorrect!</h2>
				<p>You answered {this.state.answer}. {this.props.data.correct} is the correct answer. </p>
				</div>
			);
		}
		else{
			this.props.hideBtn();
		return (		
      	<div id="guessForm" >
			<form onChange={this.handleChange} ref = "guessForm" className="form-horizontal">
			<div id="question">
				<h3>Question {this.getNumber()}</h3>
		          <p>{this.props.data.question}</p>
	          </div>
	          <div id="answers">
              {shuffle(['correct', 'answer2', 'answer3', 'answer4']).map(function (value, i) {
                 return (
                     <p>
                       <input
                         type="radio"
                         name="A"
                         key={i}
                         value={this.props.data[value]}> {this.props.data[value]} </input>
                     </p>
                     );
              }, this)}
	          </div>
      		</form>
      	</div>
        );
       }
   }
});

module.exports = Guess;
