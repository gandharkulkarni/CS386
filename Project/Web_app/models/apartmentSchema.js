const { Decimal128, Int32 } = require('mongodb');
const mongoose = require('mongoose'); //Load mongoose
let apartmentSchema = mongoose.Schema({ //Define schema
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
        type: Decimal128,
        required: true,
    },
	deposit:{
		type: Decimal128,
        required: true,
	},
	area:{
		type: Decimal128,
        required: true,
	},
	bedroom:{
		type: Number,
        required: true,
	},
	bathroom:{
		type: Number,
        required: true,
	},

})
module.exports = mongoose.model('Apartment', apartmentSchema);//Create and export model


