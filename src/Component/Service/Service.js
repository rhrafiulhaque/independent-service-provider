import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/services/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-4'>
            <div className='service'>
                <img className='w-100 service-img' src={img} alt="" />
                <h2>{name}</h2>
                <p className='price'>Price: ${price}</p>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(id) } className='btn btn-primary'>Book For {name}</button>
            </div>
        </div>
    );
};

export default Service;