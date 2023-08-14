// routes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const connectDB = require('../db/db');

const secretKey = 'r3ntQu3stCS386'; 
let User = require('../models/userSchema');
let Apartment = require('../models/apartmentSchema')
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
        const token = jwt.sign({ id: userExist.id, email: userExist.email, isAdmin: userExist.isAdmin }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
        // res.status(200).send(true);
      } else{
        res.status(200).send(false); 
      }
    });
  } else{
    res.status(200).send(false);
  }
});

router.get('/profile', async (req, res)=> {
  // Connect to the database
  await connectDB(true);
  
  const user = await User.findOne({ email: req.query.email});
  if (user) {
    res.status(200).json(user);
  } else{
    res.status(200).send('User not found');
  }
  await connectDB(false);
});

router.get('/apt', async(req, res) =>{
  // Connect to the database
  await connectDB(true);
  let aptDocs = await Apartment.find();
  res.status(200).send(aptDocs);
  await connectDB(false);
})

router.delete('/apt/:id', async(req, res) =>{
  // Connect to the database
  await connectDB(true);
  const documentId = req.params.id;
  
  const result = await Apartment.deleteOne({ _id: documentId });
  if(result.deletedCount>0){
    res.status(200).send(true);
  } else{
    res.status(200).send(false);
  }
  await connectDB(false);

});

router.get('/apt/:id', async(req, res) => {
  // Connect to the database
  await connectDB(true);
  const documentId = req.params.id;
  
  const apt = await Apartment.findOne({ _id: documentId });
  if(apt){
    res.status(200).send(apt);
  } else{
    res.status(200).send(false);
  }
  await connectDB(false);
});

router.put('/apt/:id', async (req, res) => {
  // Connect to the database
  await connectDB(true);
  const documentId = req.params.id;
  
  const apt = await Apartment.findOne({ _id: documentId });
  if(apt){
    const updatedApt = {
      address: req.body.addr,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      rent: req.body.rent,
      deposit: req.body.deposit,
      area: req.body.area,
      bedroom: req.body.bed,
      bathroom: req.body.bath,
      contactNumber: req.body.contact,
    };
    const result = await Apartment.updateOne({_id: documentId}, updatedApt)
    if(result.modifiedCount>0){
      res.status(200).send(true);
    } else{
      res.status(200).send(false);
    }
  } else{
    res.status(200).send(false);
  }
  
  // Disconnect the database
  await connectDB(false);
});

router.post('/admin/apt', async(req, res) => {

  // Connect to the database
  await connectDB(true);
  const regApt = {
    address: req.body.addr,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    rent: req.body.rent,
    deposit: req.body.deposit,
    area: req.body.area,
    bedroom: req.body.bed,
    bathroom: req.body.bath,
    contactNumber: req.body.contact,
  };
  const newApt = new Apartment(regApt);

  newApt.save()
  .then(savedApt =>{
      console.log('Data has been successfully saved:');
      res.status(200).send('Apt saved successfully');
  })
  .catch(error => {
    console.log('Error saving Apt' + error);
    res.status(200).send('Error: Saving Apt.');
  });
  // Disconnect DB
  await connectDB(false);
});


module.exports = router;
