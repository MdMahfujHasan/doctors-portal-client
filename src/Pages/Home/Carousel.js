import React from 'react';
import chef from '../../assets/images/chef2.jpg';
import toilet from '../../assets/images/toilet.jpg';
import car from '../../assets/images/car.jpg';

const Carousel = () => {
    return (
        <div className="mb-20">
            <div className='text-center mb-5'>
                <h3 className='text-primary text-xl font-bold uppercase'>Services</h3>
                <h2 className='text-4xl'>Our Service Providers</h2>
            </div>
            <div style={{ border: '5px solid pink' }} className="carousel w-full">
                <div id="chef" className="carousel-item relative w-full">
                    <img src={chef} className='w-screen' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#car" className="btn btn-circle">❮</a>
                        <a href="#toilet" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="toilet" className="carousel-item relative w-full">
                    <img src={toilet} className='w-screen' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#chef" className="btn btn-circle">❮</a>
                        <a href="#car" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="car" className="carousel-item relative w-full">
                    <img src={car} className='w-screen' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#toilet" className="btn btn-circle">❮</a>
                        <a href="#chef" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;