import React from 'react';

const AdminNavbar = ({handleLogout}) => {
    const iconPath = require('../../rq-icon.png');
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/user/home"><img src={iconPath} alt="RQ" height="50" width="50"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className='nav-item'>
                    <a className="nav-link" href="/admin/addApt"><i className="fas fa-hotel"></i>Add Apartment</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i>Logout</a>
                </li>
            </ul>
        </div>
    </nav>
     );
}

export default AdminNavbar;