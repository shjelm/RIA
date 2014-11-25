/** @jsx React.DOM */

var React = require('react');

var NotFound = React.createClass({
	render: function(){
		return (
		<div id="notFound">
          <h2>Not found</h2>
          <p>bla bla bla</p>
        </div>
        );
   }
});

module.exports = NotFound;