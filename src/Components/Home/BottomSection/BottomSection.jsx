import React from 'react';

const BottomSection = () => {
    return (
        <div className='w-full items-center lg:px-60 md:px-40 sm:px-20 lg:pt-32 md:pt-24 sm:pt-20 lg:pb-32 md:pb-24 sm:pb-20 lg:gap-32 md:gap-14 sm:gap-10 grid lg:grid-cols-4 grid-cols-2' style={{backgroundColor: '#d1e2eb'}}>
            <div className='items-start my-6 p-10'>
                <h3 className='font-bold'>Company</h3>
                <p className='my-4'>About Us</p>
                <p className='my-4'>Our Store</p>
                <p className='my-4'>Contact Us</p>
            </div>
            <div className='items-start my-6 p-10'>
                <h3 className='font-bold'>Career Opportunities</h3>
                <p className='my-4'>Selling Programs</p>
                <p className='my-4'>Advertise</p>
                <p className='my-4'>Cooperation </p>
            </div>
            <div className='items-start my-6 p-10'>
                <h3 className='font-bold'>How to Buy</h3>
                <p className='my-4'>Making Payments</p>
                <p className='my-4'>Delivery Options</p>
                <p className='my-4'>New User Guide</p>
            </div>
            <div className='items-start my-6 p-10'>
                <h3 className='font-bold'>Help</h3>
                <p className='my-4'>Contact Us</p>
                <p className='my-4'>FAQ</p>
                <p className='my-4'>Privacy Policy</p>
            </div>
        </div>
    );
};

export default BottomSection;