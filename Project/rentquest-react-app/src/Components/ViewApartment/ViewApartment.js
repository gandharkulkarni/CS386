import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ViewApartment() {
    const [apartment, setApartment] = useState(null);
    const [filteredApartment, setFilteredApartment] = useState(null);
    let getAptData = async () =>{
        let response = await axios.get('http://localhost:7000/apt');
        if(response.data!==null){
            // apartment.current = response.data;
            setApartment(response.data);
            setFilteredApartment(response.data);
        }
    };
    useEffect(() => {
        getAptData();
    },[]);
    const handleFilter = ()=>{
       let bedroom = document.getElementById('bedroom');
       let selectedBedroom = bedroom.selectedIndex;
       let bathroom = document.getElementById('bathroom');
       let selectedBathroom = bathroom.selectedIndex;
       let updatedFilteredApartment = apartment;

        if(bedroom.options[selectedBedroom].value!==''){
            updatedFilteredApartment = apartment.filter(apt=> String(apt.bedroom)===bedroom.options[selectedBedroom].value);
        } 
        if(bathroom.options[selectedBathroom].value!==''){
            updatedFilteredApartment = updatedFilteredApartment.filter(apt=> String(apt.bathroom)===bathroom.options[selectedBathroom].value);
        }
        if(bedroom.options[selectedBedroom].value==='' && bathroom.options[selectedBathroom].value===''){
            updatedFilteredApartment = apartment;
        }
        setFilteredApartment(updatedFilteredApartment);
    };
    return ( 
        <div className="container">
        <div className='row'>
            <div className='col-md-6 offset-3 mb-5'>
                <h1>Find a property for rent</h1><br />
            </div>
        </div>
        <div className='row'>
            <div className='col-md-3'>
                <h2>Filters: </h2>
            </div>
            <div className='col-md-3 mb-5'>
                <h3>Bedrooms: </h3>
                <select id="bedroom" className="form-control"  onChange={handleFilter} required>
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
            <div className='col-md-3 mb-5'>
                <h3>Bathrooms: </h3>
                <select id="bathroom" className="form-control" onChange={handleFilter} required>
                    <option value={''}>---Select an option---</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </div>
        </div>
            <div className="row">
                <div  className="col-md-6 offset-3 mb-5">
                    
                    {
                        filteredApartment!==null && filteredApartment.map((apt, index)=>{
                            return (
                            <div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{apt.address}</h5>
                                        <p className="card-text">Bedrooms:{apt.bedroom} Bathroom:{apt.bathroom} Sq.Ft:{apt.area.$numberDecimal} </p>
                                        <p className='card-text'>Rent:{apt.rent.$numberDecimal} Deposit:{apt.deposit.$numberDecimal}</p>
                                        <p className='card-text'>Contact No: {apt.contactNumber}</p>
                                    </div>
                                </div>
                                <br />
                            </div>                              
                            );
                        })
                    }
                </div>
            </div>
        </div>
     );
}

export default ViewApartment;