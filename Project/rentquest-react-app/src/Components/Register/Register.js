import React, { useState } from 'react';
import axios from 'axios';
// const bcrypt = require('bcrypt');
function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (event) =>{
        try {
            let alertBox = document.getElementById('statusMsg');

            if(firstname.length<1){
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<Strong>First Name can not be empty</Strong>';
                return;
            }
            if(lastname.length<1){
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<Strong>Last Name can not be empty</Strong>';
                return;
            }
            if(email.length<1){
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<Strong>Email can not be empty</Strong>';
                return;
            }
            if(password.length<1){
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<Strong>Password can not be empty</Strong>';
                return;
            }


            const response = await axios.post('http://localhost:7000/register', { firstname, lastname, email, password });
            console.log(response);
            if (response.data === 'User saved successfully' && response.status===200) {
                alertBox.className = 'alert alert-success';
                alertBox.innerHTML = '<Strong>Registration successful!</Strong>';              
            } 
            else if(response.data === 'User already exists' && response.status===200) {
                alertBox.className = 'alert alert-warning';
                alertBox.innerHTML = '<Strong>User already exists!</Strong>';
            }
            else {
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<Strong>Something went wrong please try again later</Strong>';
            }
          } catch (error) {
            console.error('Error during login:', error);
          }
    };
    return(
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="" id="statusMsg">
                </div>
            </div>
        </div>
        <div className="row">
        <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Create Your RentQuest Account</h2>
            <form>
            <div className="form-group">
                <label htmlFor="fName"><i className="fas fa-user"></i> First Name</label>
                <input type="text" className="form-control" id="fName" placeholder="Enter your first name" onChange={(e)=> setFirstname(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="lName"><i className="fas fa-user"></i> Last Name</label>
                <input type="text" className="form-control" id="lName" placeholder="Enter your last name" onChange={(e)=> setLastname(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="email"><i className="fas fa-envelope"></i> Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            
            <button type="button" className="btn btn-primary btn-block" onClick={handleSignUp}><i className="fas fa-user-plus"></i> Sign Up</button>
            </form>
            <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
        </div>
        </div>
    </div>
    );
}
export default Register;
