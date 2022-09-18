import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            <InfoCard cardTitle="Opening Hours" CardInfo="Time is Specified in Each Service" bgClass="bg-gradient-to-r from-primary to-accent" img={clock}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nam?</p>
            </InfoCard>
            <InfoCard cardTitle="Our Location" CardInfo="58/GHA, West Rajabazar, Tejgaon, Dhaka-1215" bgClass="bg-[#9370DB]" img={marker}>

            </InfoCard>
            <InfoCard cardTitle="Contact Us" CardInfo="+8801818485069, +8801521329802" bgClass="bg-gradient-to-r from-primary to-accent" img={phone}>

            </InfoCard>
        </div>
    );
};

export default Info;