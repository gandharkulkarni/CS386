const connectDB = require('./modules/db.js'); //Load mongoose module
connectDB(true); //Create connection
const cscourses = require('./models/CreateCSCourses.js')
cscourses.find().then(
    function(courses){
        if(courses.length){
            // console.log('Object already exists!');
            for(let course of courses){
                //Print the courses
                console.log(`Course: ${course.courseId} - ${course.name} (Prerequisites: ${course.preReqs.length > 0 ? course.preReqs : 'None' })`);
            }
            connectDB(false); //Close connection
        } else {
            console.log('Inserting data');
            //Insert if not exist
            cscourses.insertMany([
                {
                    courseId:'CS110',
                    name:'Introduction to Computer Science I',
                    preReqs: ['CS107', 'Math109'],
                    active: true,
                },
                {
                    courseId:'Math 109',
                    name:'Calculus I',
                    preReqs: ['None'],
                    active: true,
                },
                {
                    courseId:'CS 107',
                    name:'Computing, Mobile apps, & web',
                    preReqs: ['None'],
                    active: true,
                }
            ]).then(function(){
                console.log('Data inserted in database');
                connectDB(false); //Close connection
            });
        }
    }
)