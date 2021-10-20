import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    console.log(doctors)
    return (
        <div className="doctors">
            {
                doctors.slice(6, 21).map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)
            }
        </div>
    );
};

export default Doctors;