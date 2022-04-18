import React from 'react';
import myphoto from '../../images/myphoto.jpg'

const About = () => {
    return (
        <div className='container w-75 mx-auto text-center my-5'>
            <img className='' style={{width:'190px'}} src={myphoto} alt="" />
            <h1>RH Rafiul Haque</h1>
            <h4 style={{fontSize:'15px'}}>Studing at Daffodil University</h4>
            <p className='my-3'>It is important that I am as a software engineer have goals for each year to help with my professional development. Such improvement will help to enhance the engineers ability to perform their engineering duties and advance in their career.Software engineering is constantly changing and evolving. As such, software engineers are in a position where they are in constant need to learn new technologies. I am working hard to be a best software Engineer </p>
        </div>
    );
};

export default About;