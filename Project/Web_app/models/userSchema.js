const mongoose = require('mongoose'); //Load mongoose
let userSchema = mongoose.Schema({ //Define schema
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
    password: {
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false,
    }
})
module.exports = mongoose.model('User', userSchema);//Create and export model


