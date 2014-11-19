var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);

// var Firebase = require("firebase");
// var myFirebaseRef = new Firebase("https://ria2014.firebaseio.com/");
// 
// myFirebaseRef.set({
  // title: "Hello World!",
  // author: "Firebase",
  // location: {
    // city: "San Francisco",
    // state: "California",
    // zip: 94103
  // }
// });
// 
// myFirebaseRef.child("location/city").on("value", function(snapshot) {
	// var node = document.getElementById('node-id');
	// var string = '<p>'+snapshot.val()+'</p>';
	// node.innerHTML = string;
// });

