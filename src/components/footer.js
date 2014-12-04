/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link;

var Footer = React.createClass({
		render: function() {
			 return(
			<div id = "footer">
				<Link to='start'>Back to homepage</Link>
			</div>
			);
		}
	});
	
module.exports = Footer;
