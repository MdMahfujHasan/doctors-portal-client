import React from 'react';
import chef from '../../assets/images/chef.png';
import kitchen from '../../assets/images//kitchen.png';
import PrimaryButton from '../Shared/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section style={{
            border: '5px solid pink',
            background: `url(${kitchen})`, backgroundSize: '100%', marginTop: '100px'
        }} className='flex justify-center items-center mb-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-75px]' src={chef} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold bg-gray-50'>Appointment</h3>
                <h2 className='text-3xl text-white bg-gray-50 text-black p-5'>Make An Appointment Today</h2>
                <p className='text-white bg-gray-50 text-black p-5 mb-5 large-letter'>Aorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <Link to='/appointment'><PrimaryButton>Order Now</PrimaryButton></Link>
            </div>
        </section>
    );
};

export default MakeAppointment;