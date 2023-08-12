import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
  <Router>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    {token && <Navbar handleLogout={handleLogout} />} 
    <Routes>
      <Route path="/" element={token? <Navigate to='/user/home'/> : <Login setToken={setToken}/>} exact /> 
      <Route path="/login" element={ token? <Home /> : <Login setToken={setToken}/>} />
      <Route path="/register" element={<Register />} />
      <Route path='/user/home' element={token? <Home /> : <Navigate to='/login'/>} />
      {/* <Route component={NotFound} /> */}
    </Routes>
    <Footer />
  </Router> 
  );
}

export default App;
