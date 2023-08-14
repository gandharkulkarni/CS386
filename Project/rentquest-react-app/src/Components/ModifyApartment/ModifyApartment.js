import React,{useState, useEffect} from 'react';
import axios from 'axios';
function ModifyApartment() {
    const [apartment, setApartment] = useState(null);
    const getAptData = async () =>{
        let response = await axios.get('http://localhost:7000/apt');
        if(response.data){
            setApartment(response.data);
        }
    };
    useEffect(() => {
        getAptData();
    },[]);
    const handleDelete = async (id) => {
        let response = await axios.delete(`http://localhost:7000/apt/${id}` );
        if(response.data){
            console.log('Apartment deleted successfully');
            getAptData();
        }else{
            console.log('Unable to delete the record');
        }
    };
    return ( 
        <div className="container">
            <div className="row">
                <div  className="col-md-6 offset-3 mb-5">
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
                                        <a href= {'/admin/editApt/'+apt._id} ><i className='fas fa-pencil'></i></a>
                                        <a href='#' onClick={() => handleDelete(apt._id)}><i className='fas fa-trash'></i></a>
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

export default ModifyApartment;