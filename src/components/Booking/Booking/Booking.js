import React from 'react';
import { useParams } from 'react-router';
import Doctors from '../Doctors/Doctors';

const Booking = () => {
    // const { serviceId } = useParams();


    return (
        <div>
            {/* <h2>This is booking: {serviceId}</h2> */}

            <Doctors></Doctors>
        </div>
    );
};

export default Booking;