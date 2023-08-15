import React from 'react';

const Navbar = ({handleLogout}) => {
    const iconPath = require('../../rq-icon.png');
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/user/home"><img src={iconPath} alt="RQ" height="50" width="50"></img></a>
        <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/user/profile"><i className="fas fa-user-circle"></i>Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/user/apt"><i className="fas fa-hotel"></i>Find Apartments</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i>Logout</a>
            </li>
            </ul>
        </div>
    </nav>
     );
}

export default Navbar;