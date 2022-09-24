import React from 'react';
import book from '../../assets/images/book2.jpg';
import bg from '../../assets/images/book.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    let footer = <p style={{ textAlign: 'center', color: 'blue' }}>Please Pick a Date.</p>
    // const today = new Date();
    const limitDate = new Date(2022, 11, 31);
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'initial',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img style={{ border: '3px solid pink' }} src={book} className="max-w-sm rounded-lg shadow-2xl" alt='book' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        footer={footer}
                        disabled={{ after: limitDate }}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;