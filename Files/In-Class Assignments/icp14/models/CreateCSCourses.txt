const mongoose = require('mongoose'); //Load mongoose
let CSCourseSchema = mongoose.Schema({ //Define schema
	courseId: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true,
		default: 'unknown'
	},
	preReqs: {
		type: [String],
		required: true,
		default: 'unknown'
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	}
})
module.exports = mongoose.model('CSCourse', CSCourseSchema);//Create and export model


