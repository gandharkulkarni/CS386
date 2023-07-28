const connectDB = require('./modules/db.js');//Load mongoose module
connectDB(true); //Create connection

const modelUser = require('./models/CreateUserSchema.js');//Load users model
modelUser.find() //Mongoose find method
	.then( function(users) { //Callback then
		if(users.length) {//Object already exists
			modelUser.collection.drop() //Drop users collection
				.then( function(){ //Callback when drop operation is done
						console.log('Collection users dropped');//Notification
						connectDB(false); //Close only when drop operation is done
				});//Ending callback function curly brace, method drop parenthesis
		} else {
			console.log('Collection does not exist');
			connectDB(false); //Close connection
		}
	})





