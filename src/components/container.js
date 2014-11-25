/** @jsx React.DOM */

var React = require('react');

var Container = React.createClass({
	render: function(){
		return (
		<div id="test">
          <h2>Test</h2>
          <p>bla bla bla</p>
        </div>
        );
   }
});

module.exports = Container;