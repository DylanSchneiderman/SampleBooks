	
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