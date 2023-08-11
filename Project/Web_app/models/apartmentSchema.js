const mongoose = require('mongoose'); //Load mongoose
let apartmentSchema = mongoose.Schema({ //Define schema
	apartmentId: {
		type: String,
		required: true,
		unique: true
	},
	address: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
    country: {
        type: String,
        required: true,
    },
    rent:{
        type: Double,
        required: true,
    },
	deposit:{
		type: Double,
        required: true,
	},
	area:{
		type: Double,
        required: true,
	},
	bedrooms:{
		type: Integer,
        required: true,
	},
	bathrooms:{
		type: Integer,
        required: true,
	},
	imagePath:{
		type: String,
        required: true,
	},

})
module.exports = mongoose.model('Apartment', apartmentSchema);//Create and export model


