import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Slider.css';

import One from '../../assets/images/1.jpg';
import Two from '../../assets/images/2.jpg';
import Three from '../../assets/images/3.jpg';

export const Slider = () => {
    return (
        <Carousel
            showIndicators={false}
            infiniteLoop={true}
        >
            <div>
                <img src={One} alt="First Slide" />
            </div>
            <div>
                <img src={Two} alt="Second Slide" />
            </div>
            <div>
                <img src={Three} alt="Third Slide" />
            </div>
        </Carousel>
    );
}