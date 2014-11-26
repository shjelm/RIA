/** @jsx React.DOM */

var React = require('react');

var Container = React.createClass({
	render: function(){
		return (
		<div id="questionbox">
          <p>Questions and answers:</p>
          <div id="question">
          </div>
          <div id="answers">
          </div>
        </div>
        );
   }
});

module.exports = Container;