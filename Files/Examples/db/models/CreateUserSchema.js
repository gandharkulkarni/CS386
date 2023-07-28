const mongoose = require('mongoose'); //Load mongoose
let schemaUser = mongoose.Schema({ //Define schema
	id: {
		type: Number,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true,
		default: 'unknown'
	},
	email: {
		type: String,
		required: true,
		default: 'unknown'
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	}
})
module.exports = mongoose.model('User', schemaUser);//Create and export model


