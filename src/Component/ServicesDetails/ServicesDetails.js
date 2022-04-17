import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './ServicesDetails.css';
const ServicesDetails = () => {   
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const handleCheckout= event=>{
        event.preventDefault();
        toast('Your Apointment Time will be give you soon');
    }
     return (
        <div className='register-form'>
            <h2 className='text-center text-success mb-5 mt-5'>Please Give Your Information</h2>
            <form onSubmit={handleCheckout}>
                <input type="text" value={user?.displayName} name="name" id="" placeholder='Your Name' />

                <input type="email" value={user?.email} name="email" id="" placeholder='Email Address' required />

                <input type="text" name="address" id="" placeholder='Address' required />
                <input type="number" name="phone" id="" placeholder='Mobile Number ' required />
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Apointment" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default ServicesDetails;