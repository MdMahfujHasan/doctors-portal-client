import React from 'react';

const InfoCard = ({ img, cardTitle, CardInfo, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl bg-accent ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{CardInfo}</p>
            </div>
        </div>
    );
};

export default InfoCard;