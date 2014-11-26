/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

var Container = React.createClass({
	render: function(){
		return (
		<div id="container">
          <div id="showQuestion">
          	<h2>Play game</h2>
          	<Link to='Show_question'>Play!</Link>
          </div>
          <div id="addQuestion">
          	<h2>Add question</h2>
          	<Link to='Add_question'>Here</Link>
          </div>
        </div>
        );
   }
});

module.exports = Container;