import React from 'react';

const BottomBanner = () => {
    return (
        <div className='section-container my-20'>
            <div className=' flex gap-5'>
                <div className='relative flex flex-row rounded-lg w-1/2'>
                    <div className="card-body text-white px-7 py-16 w-1/2 rounded-s-lg" style={{ backgroundColor: "#BF2E3B" }}>
                        <h2 className="text-4xl font-bold">Never-Ending Summer</h2>
                        <p className='text-xl'>Throwback Shirts & all-day dressed</p>
                        <p className='underline'>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-lg' src="https://i.ibb.co/k6h3cNs/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
                <div className='relative flex flex-row rounded-lg'>
                    <div className="card-body text-white px-7 py-16 rounded-s-lg w-1/2" style={{ backgroundColor: "#1D5159" }}>
                        <h2 className="text-4xl font-bold">Never-Ending Summer</h2>
                        <p className='text-xl'>Throwback Shirts & all-day dressed</p>
                        <p className='underline'>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-lg' src="https://i.ibb.co/pytDMDH/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default BottomBanner;