import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServicesDetails.css';
const ServicesDetails = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    const { id } = useParams();
   


    return (
        <div>
            <h2 className='text-center'>Checking Out For {id} </h2>
           
        </div>
    );
};

export default ServicesDetails;