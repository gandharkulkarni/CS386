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
function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [admin, setAdmin] = useState(localStorage.getItem('admin') || false);
  const decodeJWT = (token) =>{
    return jwtDecode(token); // Decode the token
  };
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      let decodedJWT = decodeJWT(token);
      setAdmin(decodedJWT.isAdmin);
      localStorage.setItem('admin', decodedJWT.isAdmin);
      localStorage.setItem('email', decodedJWT.email);
    }
  }, [token, admin]);

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
  <Router>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    {token && !admin && <Navbar handleLogout={handleLogout} />} 
    {token && admin && <AdminNavbar handleLogout={handleLogout} />}
    <Routes>
      <Route path="/" element={token? <Navigate to='/user/home'/> : <Login setToken={setToken}/>} exact /> 
      <Route path="/login" element={ 
        token ? (
          !admin ? ( <Home /> ) : (<Navigate to='/admin/home' />)
          ) : (<Login setToken={setToken}/> )
        } />
      <Route path="/register" element={<Register />} />
      <Route path='/user/home' element={
        token ? ( // Check if token is set
          !admin ? ( // Check if adminFlag is true or false
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
          admin ? ( // Check if adminFlag is true or false
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
          admin ? ( // Check if adminFlag is true or false
            <AddApartment /> // Render AdminHome if adminFlag is true
          ) : (
            <Navigate to='/user/home' /> // Redirect to user home if adminFlag is false
          )
          ) : (
            <Navigate to='/login' /> // Redirect to login if token is not set
          )
        } />
        

      <Route path='/user/profile' element={token? <Profile /> : <Navigate to='/login'/>} />
      {/* <Route component={NotFound} /> */}
    </Routes>
    <Footer />
  </Router> 
  );
}

export default App;
