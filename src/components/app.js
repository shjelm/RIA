/** @jsx React.DOM */

var React = require('react');

var App = React.createClass({
	render: function(){
		return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
   }
});

module.exports = App;