/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link;

var Start = React.createClass({
	render: function(){
		return (
		<div id="start">
          <div id="showQuestion">
          	<Link to='play_game'><img src="../images/play.png" alt="Play Game"/></Link>
          </div>
          <div id="showQuestions">
          	<Link to='show_all_questions'><img src="../images/all.png" alt="Show All Questions"/></Link>
          </div>
          <div id="addQuestion">
          	<Link to='add_question'><img src="../images/add.png" alt="Add Question"/></Link>
          </div>
      	</div>
        );
   }
});

module.exports = Start;