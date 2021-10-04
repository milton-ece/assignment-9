import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Center from '../Center/Center';
import './Services.css'

const Services = () => {
    const [centers, setCenters] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCenters(data))
    }, [])

    return (
        <div className="service">
            {/* <h1> This is services: {centers.length}</h1> */}
            {
                // centers.map(center => console.log(center))
                centers.map(center => <Center
                    key={center.id}
                    center={center}
                ></Center>)
            }
        </div>
    );
};

export default Services;