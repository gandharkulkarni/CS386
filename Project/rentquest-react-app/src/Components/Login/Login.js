import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useHistory
  const imagePath = require('../../rq-icon.png');
  const handleLogin = async () =>{
    
    let alertBox = document.getElementById('statusMsg');
    alertBox.className = '';
    alertBox.innerHTML = '';
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
    const response = await axios.post('http://localhost:7000/login', { email, password });
    if(response.data){
      const { token } = response.data;
      setToken(token);
      let decodedJWT = jwtDecode(token);
      console.log('Login success');
      if(decodedJWT.isAdmin){
        navigate('/admin/home');
      } else{
        navigate('/user/home'); 
      }
    }else{
        alertBox.className = 'alert alert-danger';
        alertBox.innerHTML = '<Strong>Username Password combination is incorrect</Strong>';
        return;
    }
  };
  return (
    <div className="container">
        <div className='row'>
        <div className='col offset-md-5'>
          <img src={imagePath} alt="RentQuest" height="100" width="150"></img>
        </div></div><br/><br/>
        <div className="row">
          <div className="col-md-6 offset-md-3">
              <div className="" id="statusMsg">
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Welcome to RentQuest</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email"><i className="fas fa-envelope"></i> Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}><i className="fas fa-sign-in-alt"></i> Login</button>
            </form>
            <p className="text-center mt-3">Don't have an account? <a href="/register">Sign up</a></p>
          </div>
        </div>
      </div>
  );
}
export default Login;
