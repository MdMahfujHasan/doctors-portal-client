import React from 'react';

const Stat = () => {
    return (
        <>
            <div className='mt-20'>
                <h4 className='text-xl text-primary font-bold'>Why Choose Us</h4>
                <h2 className='text-3xl'>We Provide Exceptional Services</h2>
            </div>
            <div className='flex justify-center mt-10'>
                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat place-items-center">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value text-[#8B008B]">2.5K</div>
                        <div className="stat-desc text-[#8B008B]">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (3%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value text-[#FF1493]">1,200</div>
                        <div className="stat-desc text-[#FF1493]">↘︎ 75 (14%)</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Services</div>
                        <div className="stat-value text-[#9400D3]">3275</div>
                        <div className="stat-desc text-[#9400D3]">↗︎ 60 (25%)</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Service Providers</div>
                        <div className="stat-value text-[#7FFFD4]">915</div>
                        <div className="stat-desc text-[#7FFFD4]">↗︎ 85 (30%)</div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Stat;