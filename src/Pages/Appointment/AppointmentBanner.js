import React from 'react';
import book from '../../assets/images/book2.jpg';
import bg from '../../assets/images/book.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'initial',
            backgroundRepeat: 'no-repeat'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img style={{ border: '3px solid pink' }} src={book} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;