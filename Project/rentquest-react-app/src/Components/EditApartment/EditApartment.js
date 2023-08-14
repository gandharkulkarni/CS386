import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function EditApartment() {
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
    const {id} = useParams();

    const getApartmentDetails = async () => {
        const response = await axios.get(`http://localhost:7000/apt/${id}`);
        console.log(response);
        if(response.data){
            setAddr(response.data.address);
            setCity(response.data.city);
            setState(response.data.state);
            setCountry(response.data.country);
            setRent(response.data.rent.$numberDecimal);
            setDeposit(response.data.deposit.$numberDecimal);
            setBed(response.data.bedroom);
            setBath(response.data.bathroom);
            setArea(response.data.area.$numberDecimal);
            setContact(response.data.contactNumber);
        }
    }
    useEffect (() =>{
        getApartmentDetails();
    },[]);
    const handleEditApartment =async () => {
        let alertBox = document.getElementById('statusMsg');
        alertBox.className = '';
        alertBox.innerHTML = '';
        const response = await axios.put(`http://localhost:7000/apt/${id}`, {addr, city, state, country, rent, deposit, bed, bath, area, contact});
        if(response.data){
            alertBox.className = 'alert alert-success';
            alertBox.innerHTML = '<Strong>Apartment Updated</Strong>';
        } else{
            alertBox.className = 'alert alert-danger';
            alertBox.innerHTML = '<Strong>Some error occured. Please try again later</Strong>';
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
                            <input type='text' id="addr" className="form-control" value={addr} onChange={(e) => setAddr(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city"><i className="fas fa-thumb-tack"></i> City</label>
                            <input type='text' id="city" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state"><i className="fas fa-map-marker"></i> State</label>
                            <input type='text' id="state" className="form-control" value={state} onChange={(e) => setState(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country"><i className="fas fa-globe"></i> Country</label>
                            <input type='text' id="country" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rent"><i className="fas fa-money"></i> Rent</label>
                            <input type='number' id="rent" className="form-control" value={rent} onChange={(e) => setRent(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="deposit"><i className="fas fa-money"></i> Deposit</label>
                            <input type='number' id="deposit" className="form-control" value={deposit} onChange={(e) => setDeposit(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="area"><i className="fas fa-pencil-square"></i> Sq.Ft Area</label>
                            <input type='number' id="area" className="form-control" value={area} onChange={(e) => setArea(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bedroom"><i className="fas fa-bed"></i> Bedrooms</label>
                            <select id="bedroom" className="form-control" value={bed} onChange={(e) => setBed(e.target.value)} required>
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
                            <select id="bathroom" className="form-control" value={bath} onChange={(e) => setBath(e.target.value)} required>
                                <option value={''}>---Select an option---</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="contactNo"><i className="fas fa-phone"></i> Contact Number</label>
                        <input type='number' className='form-control' id='contactNo' value={contact} min={10} max={10} onChange={(e) => setContact(e.target.value)} required></input>
                        </div> 
                        <div className="form-group">
                            <input type='button' value={'Edit Apartment'} className='btn btn-primary btn-block' onClick={handleEditApartment} />
                        </div>
                        <br /><br />
                    </form>
                </div>
            </div>
        </div>
     );
}

export default EditApartment;