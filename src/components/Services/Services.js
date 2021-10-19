import React, { useEffect, useState } from 'react';
// import Doctors from '../Booking/Doctors/Doctors';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services">
            {/* <h3>This is Services</h3> */}
            {/* <Doctors></Doctors> */}
            {
                services.slice(0, 6).map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;