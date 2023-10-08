import React from 'react';
import { PiNavigationArrowFill } from 'react-icons/pi'

const BottomSection = () => {
    return (
        <div className='relative lg:mt-80 md:mt-28 sm:mt-16'>
            <div className='w-2/5 h-96 absolute inset-1/2 transform -translate-x-1/2  text-center px-36 py-20 rounded-xl -top-56  hidden lg:block' style={{ backgroundColor: '#7296AB' }}>
                <h1 className='mb-3 text-5xl text-white'>Tech<span className='font-bold'>Trove</span></h1>
                <p className='mb-6 text-white font-semibold'>Register your email not to miss the last minutes off+ Free delivery</p>
                <div className="form-control">
                    <div className="input-group justify-center">
                        <input type="text" placeholder="Enter your email" className="input input-bordered" />
                        <button className="btn">
                            <PiNavigationArrowFill />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full items-center lg:px-60 md:px-40 sm:px-20 lg:pt-32 md:pt-24 sm:pt-10 lg:pb-32 md:pb-24 sm:pb-20 lg:gap-32 md:gap-14 sm:gap-10 grid lg:grid-cols-4 grid-cols-2 text-black' style={{ backgroundColor: '#d1e2eb' }}>
                <div className='items-start my-6 p-10'>
                    <h3 className='font-bold text-lg'>Company</h3>
                    <p className='my-4'>About Us</p>
                    <p className='my-4'>Our Store</p>
                    <p className='my-4'>Contact Us</p>
                </div>
                <div className='items-start my-6 p-10'>
                    <h3 className='font-bold text-lg'>Career Opportunities</h3>
                    <p className='my-4'>Selling Programs</p>
                    <p className='my-4'>Advertise</p>
                    <p className='my-4'>Cooperation </p>
                </div>
                <div className='items-start my-6 p-10'>
                    <h3 className='font-bold text-lg'>How to Buy</h3>
                    <p className='my-4'>Making Payments</p>
                    <p className='my-4'>Delivery Options</p>
                    <p className='my-4'>New User Guide</p>
                </div>
                <div className='items-start my-6 p-10'>
                    <h3 className='font-bold text-lg'>Help</h3>
                    <p className='my-4'>Contact Us</p>
                    <p className='my-4'>FAQ</p>
                    <p className='my-4'>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;