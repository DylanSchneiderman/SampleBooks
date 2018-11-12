	
let registerUser = function(email, password) {
	let fbAuth = firebase.auth();
	let ansFromCreate = 
		fbAuth.createUserWithEmailAndPassword(email, password);
		//fbAuth.createUserWithEmailAndPassword("shaqedelarea@gmail.com", "123456");
	let errorFunction = function(err) {
		alert("Couldn't create the user: " + err.message);
		console.log(err);
	};

	let successFunction = function(err) {
		alert("User successfully created");
		console.log(obj);
	};


	ansFromCreate.then(successFunction, errorFunction);
};

let signInUser = function(email, password) {
	firebase.auth().signInWithEmailAndPassword(email, password).then(function(successObject) {
		alert("Logged in Successfully, Welcome Back " + firebase.auth().currentUser.email);
	}, function(failObject) {
		alert("Couldn't log in: " + failObject.message);
	})
};

let signOut = function() {
	firebase.auth().signOut();
};


let amISignedIn = function() {
	return (firebase.auth().currentUser !== null);
};