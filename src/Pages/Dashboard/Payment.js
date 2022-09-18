import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LTaoFDwcsM1TvLG9PHRNFc1VkQ1NpQXhVvOkcurGpY7WXHHY7EqC9jd1ELe6hBA2gk4jPexrkZjVvyUPvgeYtSW00a7GH2bDU');

const Payment = () => {
    const { id } = useParams();
    const url = `https://salty-cliffs-61710.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for <span className='text-indigo-600'>{appointment.treatment}</span></h2>
                    <p>Your Appointment: <span className='text-indigo-600'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Payment: <strong>${appointment.price}</strong></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;