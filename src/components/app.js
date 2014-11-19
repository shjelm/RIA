var quiz = {
	questions: [],
	
	init: function(){
		var quizbox;
		quizbox = document.getElementById("quizbox");
		
		var fullForm = createForm();
		
		quizbox.appendChild(fullform);
		
	},
	
	createForm: function(){
		var form = document.createElement("form");
		var fieldset = document.createElement("fieldset");
		var label = document.createElement("label");
		var input = document.createElement("input");
		
		label.appendChild(input);
		fieldset.appendChild(label);
		form.appendChild(fieldset);
		
		return form;
	}
	
};

window.onload = quiz.init;

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

