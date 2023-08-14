import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ViewApartment() {
    const [apartment, setApartment] = useState(null);
    useEffect(() => {
        let getAptData = async () =>{
            let response = await axios.get('http://localhost:7000/apt');
            if(response.data){
                // apartment.current = response.data;
                setApartment(response.data);
            }
        };
        getAptData();
    },[]);
    return ( 
        <div className="container">
            <div className="row">
                <div  className="col-md-6 offset-3 mb-5">
                    <h1>Find a property for rent</h1><br />
                    {
                        apartment!==null && apartment.map((apt, index)=>{
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