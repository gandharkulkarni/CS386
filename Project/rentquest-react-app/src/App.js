import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import jwtDecode from 'jwt-decode';
import Profile from './Components/Profile/Profile';
import AdminNavbar from './Components/Navbar/AdminNavbar';
import AdminHome from './Components/Home/AdminHome';
import AddApartment from './Components/AddApartment/AddApartment';
import ViewApartment from './Components/ViewApartment/ViewApartment';
function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const decodeJWT = (token) => {
    return jwtDecode(token); // Decode the token
  };

  const checkAdmin = (token) => {
    return jwtDecode(token).isAdmin;
  };
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      let decodedJWT = decodeJWT(token);
      localStorage.setItem('email', decodedJWT.email);
    }
  }, [token]);

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
  };

  return (
    <Router>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      {token && !checkAdmin(token) && <Navbar handleLogout={handleLogout} />}
      {token && checkAdmin(token) && <AdminNavbar handleLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={token ? (checkAdmin(token) ? <Navigate to='/admin/home' /> : <Navigate to='/user/home' />) : <Login setToken={setToken} />} />
        <Route path="/login" element={
          token ? (
            !checkAdmin(token) ? (<Home />) : (<Navigate to='/admin/home' />)
          ) : (<Login setToken={setToken} />)
        } />
        <Route path="/register" element={<Register />} />
        <Route path='/user/home' element={
          token ? ( // Check if token is set
            !checkAdmin(token) ? ( // Check if adminFlag is true or false
              <Home /> // Render AdminHome if adminFlag is true
            ) : (
              <Navigate to='/admin/home' /> // Redirect to user home if adminFlag is false
            )
          ) : (
            <Navigate to='/login' /> // Redirect to login if token is not set
          )
        }
        />
        <Route path='/admin/home' element={
          token ? ( // Check if token is set
            checkAdmin(token) ? ( // Check if adminFlag is true or false
              <AdminHome /> // Render AdminHome if adminFlag is true
            ) : (
              <Navigate to='/user/home' /> // Redirect to user home if adminFlag is false
            )
          ) : (
            <Navigate to='/login' /> // Redirect to login if token is not set
          )
        } />
        <Route path='/admin/addApt' element={
          token ? ( // Check if token is set
            checkAdmin(token) ? ( // Check if adminFlag is true or false
              <AddApartment /> // Render AdminHome if adminFlag is true
            ) : (
              <Navigate to='/user/home' /> // Redirect to user home if adminFlag is false
            )
          ) : (
            <Navigate to='/login' /> // Redirect to login if token is not set
          )
        } />


        <Route path='/user/profile' element={
          token ? ( // Check if token is set
            checkAdmin(token) ? ( // Check if adminFlag is true or false
              <Navigate to='/admin/home' /> // Redirect to admin home if adminFlag is true
            ) : (
              <Profile /> // Render Profile if adminFlag is false
            )
          ) : (
            <Navigate to='/login' /> // Redirect to login if token is not set
          )

        } />
        <Route path="/user/apt" element={
          token ? ( // Check if token is set
            checkAdmin(token) ? ( // Check if adminFlag is true or false
              <Navigate to='/admin/home' /> // Redirect to admin home if adminFlag is true
            ) : (
              <ViewApartment /> // Render ViewApartment if adminFlag is false
            )
          ) : (
            <Navigate to='/login' /> // Redirect to login if token is not set
          )
        } />
        {/* <Route component={NotFound} /> */}
      </Routes>
      <br /><br /><br />
      <Footer />
    </Router>
  );
}

export default App;
