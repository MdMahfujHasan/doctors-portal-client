import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-[#314755] to-[#26a0da]">{children}</button>
    );
};

export default PrimaryButton;