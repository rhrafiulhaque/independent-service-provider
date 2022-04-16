import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright By DoctorMoshai <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />{year} </small></p>
        </footer>
    );
};

export default Footer;