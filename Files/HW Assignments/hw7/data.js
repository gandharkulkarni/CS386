const mongoose = require('mongoose'); //Load mongoose
const connectDB = require('./Modules/db');

// Connect to the database
connectDB(true);
let userSchema = mongoose.Schema({ //Define schema
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	DateTime: {
		type: String,
		required: true
	}
})

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Test data
const regUser = {
    firstName: 'John',
    lastName: 'Doe',
    DateTime: new Date().toLocaleString()
};

// Create a new User instance using the model
const newUser = new User(regUser);

// Save the user
newUser.save()
  .then(savedUser => {
    console.log('Data has been successfully saved:');
    // Disconnect from the database
    connectDB(false);
  })
  .catch(error => {
    console.log('Error saving user' + error);
    // Disconnect from the database
    connectDB(false);
});