import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-indigo-600">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p><strong>{slots.length}</strong> {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <strong style={{ fontSize: '1.5em' }}>${price}</strong>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-indigo-600 to-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;