import React from 'react';
import './Home.css'
import ModifyApartment from '../ModifyApartment/ModifyApartment';
function AdminHome() {
    const imagePath = require('../../rentquest-icon.png');
    return ( 
        <div className="container mt-4">
            <div className="row">

                <div className="col-4 offset-4 maincontent">
                    <h1>Welcome to</h1><br /><img src={imagePath} alt="RentQuest" height="100" width="350"></img>
                    <h1>Admin Dashboard</h1>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <ModifyApartment />
                </div>
            </div>
        </div>
     );
}

export default AdminHome;