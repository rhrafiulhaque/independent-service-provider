import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block img-fluid w-100 slide-img"
                    src={banner1}
                    alt="First slide"
                    
                />
                <Carousel.Caption>
                    <h3 className='color-dark'>Mediacal And Health Care Solution</h3>
                    <p className='color-dark'>We Have 25 Years of Experience in Medical Services</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  img-fluid w-100"
                    src={banner2}
                    alt="Second slide"
                    style={{height: '100vh'}}
                />

                <Carousel.Caption>
                    <h3 className='color-dark'>Medical And Health Check Up </h3>
                    <p className='color-dark'>We Have the Best Doctor to Check Up for You</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid  w-100"
                    src={banner3}
                    alt="Third slide"
                    style={{height: '100vh'}}
                />

                <Carousel.Caption>
                    <h3 className='color-dark'>Meet our Specialist and Enjoy a healty life</h3>
                    <p className='color-dark'>
                        We have the best Specialist For You
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;