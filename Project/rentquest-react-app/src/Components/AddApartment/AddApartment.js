import axios from 'axios';
import React, { useState } from 'react';

function AddApartment() {
    const [addr, setAddr] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [rent, setRent] = useState('');
    const [deposit, setDeposit] = useState('');
    const [area, setArea] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [contact, setContact] = useState('');

    const handleAddApartment = async () => {
        let alertBox = document.getElementById('statusMsg');
        alertBox.className = '';
        alertBox.innerHTML = '';
        if (addr.length < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Address can not be empty</Strong>';
        } else if (city.length < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>City can not be empty</Strong>';
        } else if (state.length < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>State can not be empty</Strong>';
        } else if (country.length < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Country can not be empty</Strong>';
        } else if (rent < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Rent can not be empty</Strong>';
        } else if (deposit < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Deposit can not be empty</Strong>';
        } else if (area < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Sq Ft Area can not be empty</Strong>';
        } else if (bed.length < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Bed can not be empty</Strong>';
        } else if (bath.length < 1) {
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Bath can not be empty</Strong>';
        } else if (contact.length!==10){
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Invalid contact number</Strong>';
        } else {
            let response = await axios.post('http://localhost:7000/admin/apt', { addr, city, state, country, rent, deposit, area, bed, bath, contact })
            console.log(response);
            if(response.status===200 && response.data==='Apt saved successfully'){
                alertBox.className = 'alert alert-success';
                alertBox.innerHTML = '<Strong>Apartment Added</Strong>';
                let form = document.getElementById('addAptForm');
                form.reset();
            }else{
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<Strong>Some error occured. Please try again later</Strong>';   
            }
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="" id="statusMsg">
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-3 mb-5">
                    <h1>Add Apartment</h1>
                    <form id='addAptForm'>
                        <div className="form-group">
                            <label htmlFor="addr"><i className="fas fa-address-card"></i> Address</label>
                            <input type='text' id="addr" className="form-control" onChange={(e) => setAddr(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city"><i className="fas fa-thumb-tack"></i> City</label>
                            <input type='text' id="city" className="form-control" onChange={(e) => setCity(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state"><i className="fas fa-map-marker"></i> State</label>
                            <input type='text' id="state" className="form-control" onChange={(e) => setState(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country"><i className="fas fa-globe"></i> Country</label>
                            <input type='text' id="country" className="form-control" onChange={(e) => setCountry(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rent"><i className="fas fa-money"></i> Rent</label>
                            <input type='number' id="rent" className="form-control" onChange={(e) => setRent(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="deposit"><i className="fas fa-money"></i> Deposit</label>
                            <input type='number' id="deposit" className="form-control" onChange={(e) => setDeposit(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="area"><i className="fas fa-pencil-square"></i> Sq.Ft Area</label>
                            <input type='number' id="area" className="form-control" onChange={(e) => setArea(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bedroom"><i className="fas fa-bed"></i> Bedrooms</label>
                            <select id="bedroom" className="form-control" defaultValue={bed} onChange={(e) => setBed(e.target.value)} required>
                                <option value={''}>---Select an option---</option>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bathroom"><i className="fas fa-bath"></i> Bathroom</label>
                            <select id="bathroom" className="form-control" defaultValue={bath} onChange={(e) => setBath(e.target.value)} required>
                                <option value={''}>---Select an option---</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="contactNo"><i className="fas fa-phone"></i> Contact Number</label>
                        <input type='number' className='form-control' id='contactNo' min={10} max={10} onChange={(e) => setContact(e.target.value)} required></input>
                        </div> 
                        <div className="form-group">
                            <input type='button' value={'Add'} className='btn btn-primary btn-block' onClick={handleAddApartment} />
                        </div>
                        <br /><br />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddApartment;
