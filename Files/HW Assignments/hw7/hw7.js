const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('./Modules/db');

// Constants for host and port
const HOST = 'localhost';
const PORT = 3000;

//Express app
const app = express();

//Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Handlebars as the view engine
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'basic_layout', layoutsDir: path.join(__dirname, 'views','layouts')}));
app.set('view engine', 'hbs');

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
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
    res.render('get_request');
});

app.post('/addname', (req, res) => {
  // const formData = new User({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     DateTime: new Date().toLocaleString()
  // }); // Instantiate a new User with request body

  connectDB(true);

  const formData = new User(req.body);

  formData.DateTime = new Date().toLocaleString();
  // Save the formData
  formData.save()
    .then(savedUser => {
      // Create a context object with user data
      const context = {
        first: savedUser.firstName,
        last: savedUser.lastName,
        datetime: savedUser.DateTime
      };
      // Render the post_request view with merged data
      res.render('post_request', context);
      
    })
    .catch(error => {
      console.error('Error saving user:', error);
      res.send('An error occurred while saving user data.');
    });
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
