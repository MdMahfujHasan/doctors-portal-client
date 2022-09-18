import React from 'react';
import clean from '../../assets/images/clean.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const LearnMore = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{ border: '5px solid pink' }} src={clean} width={458} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Services at Your Doorstep</h1>
                    <p className="py-6 large-letter">Morem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ducimus reprehenderit minima vitae dicta dignissimos distinctio sequi soluta eligendi expedita, nesciunt temporibus hic ipsum, debitis corrupti excepturi provident delectus nihil nobis officiis rerum sunt similique eos repudiandae? Rerum id commodi officia recusandae tempora voluptas sint labore deserunt sapiente autem dignissimos ad corrupti nobis quo maiores itaque, tenetur est. Dolorum, velit? Labore laboriosam incidunt pariatur rem praesentium nostrum fuga, nulla, doloremque voluptate temporibus nam! Alias, repudiandae.</p>
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;