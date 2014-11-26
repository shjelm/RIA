/** @jsx React.DOM */

var React = require('react');

var Container = React.createClass({
	render: function(){
		return (
		<div id="container">
          <div id="showQuestion">
          </div>
          <div id="addQuestion">
          </div>
        </div>
        );
   }
});

module.exports = Container;