/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Routes = require('react-router').Routes,
    Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    QForm = require('./qform.js'),
    Start = require('./start.js'),
    Wrapper = require('./wrapper.js');
    
var App = (
	<Routes location="hash">
	    <Route name="app" path="/" handler={Wrapper}>
	      <Route name="qform" handler={QForm} />
	      <DefaultRoute handler={Start}/>
	    </Route>
    </Routes>
);

module.exports = App;
