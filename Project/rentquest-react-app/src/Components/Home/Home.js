import React from 'react';
import './Home.css'

function Home() {
    const imagePath = require('../../rentquest-icon.png');
    return (
        <div className="container mt-4">
            <div className="row">

                <div className="col-4 offset-4 maincontent">
                    <h1>Welcome to</h1><br /><img src={imagePath} alt="RentQuest" height="100" width="350"></img>
                </div>
            </div>
            <br />
            <div className="row">

                <div className="col-10 offset-1">
                    <p>Welcome to RentQuest, your one-stop destination for property renting! Whether you're searching for a cozy apartment in the heart of the city, a spacious house in the suburbs, or a serene vacation rental by the beach, RentQuest has got you covered. Our user-friendly platform allows you to explore a wide range of properties, filter search results to meet your specific requirements, and connect with landlords effortlessly. With detailed property listings, high-quality images, and transparent rental information, finding your dream home has never been easier. Join RentQuest today and embark on a seamless journey towards your perfect rental property. Happy house hunting!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
