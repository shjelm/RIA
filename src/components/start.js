/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link;

var Start = React.createClass({
	render: function(){
		return (
		<div id="start">
          <div id="showQuestion">
          	<Link to='show_question'>Play game</Link>
          </div>
          <div id="showQuestions">
          	<Link to='show_all_questions'>Show all questions</Link>
          </div>
          <div id="addQuestion">
          	<Link to='add_question'>Add question</Link>
          </div>
      	</div>
        );
   }
});

module.exports = Start;