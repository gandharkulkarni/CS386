import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Welcome to RentQuest</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email"><i className="fas fa-envelope"></i> Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary btn-block"><i className="fas fa-sign-in-alt"></i> Login</button>
            </form>
            <p className="text-center mt-3">Don't have an account? <a href="/register">Sign up</a></p>
          </div>
        </div>
      </div>
  );
}
export default Login;
