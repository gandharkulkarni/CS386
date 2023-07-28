const connectDB = require('./modules/db.js');//Load mongoose module
connectDB(true); //Create connection

const modelUser = require('./models/CreateUserSchema.js');//Load users model
//Creating data in database
modelUser.find() //Mongoose find method
.then( function(users) { //Callback then
	if(users.length) {//Object already exists
		console.log('Object already exists!');
		connectDB(false);
	} else { //Object does not exist --> add data
		console.log('Seed Data'); //Output seed message
		new modelUser({//Creating new user record based on model
		id: 1,
		name: "John Doe",
		email: "jdoe@gmail.com"
		}).save(); //Save the new user
		new modelUser({//Creating new user record based on model
		id: 2,
		name: "Mary Smith",
		email: "msmith@gmail.com"
		}).save(); //Save the new user
		new modelUser({ //Creating new user record based on model
		id: 3,
		name: "Mary Golden",
		email: "mgolden@gmail.com"
		}).save() //Save the new user
		.then( function(){ //Callback when save operation is done
			console.log('Done creating data');//Output completion message
			connectDB(false); //Close only when save operation is done
		});//Ending callback function curly brace, method save parenthesis
	} //Ending if block
});//Ending callback function curly brace, method find parenthesis




