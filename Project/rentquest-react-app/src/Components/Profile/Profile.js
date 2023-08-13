import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Profile() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    useEffect(()=>{
        const getProfileDetails = async () => {
            let alertBox = document.getElementById('statusMsg');
            alertBox.className = '';
            alertBox.innerHTML = '';
            let email = localStorage.getItem('email');
            let response = await axios.get('http://localhost:7000/profile', { params: { email: email } });
            console.log(response);
            if(response.data){
                setFirstname(response.data.firstname);
                setLastname(response.data.lastname);
                setEmail(response.data.email);
            }else{
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<Strong>Error loading profile. Please try again later</Strong>';
                return;
            }
        };
        getProfileDetails();
    });

    return ( 
        <div class="container">
            <div class="row">
                <div  class="col-md-6 offset-3">
                    <h1>User Profile</h1>
                    <form>
                    <div className="form-group">
                        <label htmlFor="fName"><i className="fas fa-user"></i> First Name</label>
                        <input type='text' id="fName" className="form-control" readOnly value={firstname}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lName"><i className="fas fa-user"></i> Last Name</label>
                        <input type='text' id="lName" className="form-control" readOnly value={lastname}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
                        <input type='text' id="email" className="form-control" readOnly value={email}></input>
                    </div>
                    </form>
                </div>
            </div>
            <div className="row">
          <div className="col-md-6 offset-md-3">
              <div className="" id="statusMsg">
              </div>
          </div>
        </div>
        </div>
     );
}

export default Profile;