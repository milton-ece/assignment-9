import React from 'react';

const About = () => {
    return (
        <div className="bg-primary d-flex justify-content-evenly text-light">
            <div className="">
                <p>Chitra Agro is dedicated to teach farmers fish farming.</p>
                <h1>Fish farming with Milton</h1>
                <h2>We cover:</h2>
                <h4>fresh water shrimp</h4>
                <h4>Venami</h4>
                <h4>Black Tiger</h4>
                <h4>Carp fattening</h4>
                <h4>Tilapia</h4>
                <h4>Cat fish</h4>
                <p>Our intension is to make our country rich through fish farming. We can earn huge foreign remitance by exporting fishes abroad. </p>


            </div>
            <div>
                <img className="w-45" src="https://www.geosynthetica.com/wp-content/uploads/Solmax_PortSaid_FishFarm_700w.png" alt="" />
            </div>
        </div>

    );
};

export default About;