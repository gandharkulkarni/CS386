// routes.js
const express = require('express');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const connectDB = require('../db/db');

let User = require('../models/userSchema');
// const jwt = require('jsonwebtoken');

// Register user
router.post('/register', async (req, res) => {
  // Handle user registration
  const regUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10)
  };
  
  // Connect to the database
  await connectDB(true);

  const userExist = await User.findOne({ email: regUser.email });
  if (userExist) {
    //User already exists
    res.status(200).send('User already exists');
  }
  else {
    // Create a new User instance using the model
    const newUser = new User(regUser);

    // Save the user
    newUser.save()
      .then(savedUser => {
        console.log('Data has been successfully saved:');
        res.status(200).send('User saved successfully');
      })
      .catch(error => {
        console.log('Error saving user' + error);
        res.status(500).send('Error: Saving user.')
      });
  }
  // Disconnect from the database
  await connectDB(false);
});


// Login user
router.post('/login', async (req, res) => {
  // Handle user login
  
  // Connect to the database
  await connectDB(true);
  
  const userExist = await User.findOne({ email: req.body.email});
  if (userExist) {
    bcrypt.compare(req.body.password, userExist.password, (err,isMatch) =>{
      if(isMatch){
        res.status(200).send(true);
      } else{
        res.status(200).send(false); 
      }
    });
  } else{
    res.status(200).send(false);
  }
});


module.exports = router;
