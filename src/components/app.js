var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://ria2014.firebaseio.com/");

/*myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});*/

myFirebaseRef.child("location/city").on("value", function(snapshot) {
  console.log(snapshot.val());
});