import React from 'react';
import { PiNavigationArrowFill } from 'react-icons/pi'

const BlogBottom = () => {
    return (
        <div className='section-container py-11 justify-between flex flex-col md:flex-row lg:flex-row gap-5 lg:gap-32 ' style={{ backgroundColor: '#7296AB' }}>
            <div className='w-full lg:w-1/3 items-start sm:items-center text-center md:text-start lg:text-start px-4 md:px-0 lg:px-0'>
                <h1 className='mb-4 text-5xl text-black'>Tech<span className='font-bold'>Trove</span></h1>
                <p className='mb-5 text-black font-semibold text-sm lg:text-xl'>Register your email not to miss the last minutes off+ Free delivery</p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                        <button className="btn">
                            <PiNavigationArrowFill />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/3 px-5 md:px-0 lg:px-0 text-sm items-center flex justify-between text-black'>
                <div className='text-start'>
                    <h3 className='font-semibold my-7 uppercase'>Contact Us</h3>
                    <h3 className='font-semibold my-7 uppercase'>Partners</h3>
                </div>
                <div className='text-center'>
                    <h3 className='font-semibold my-7 uppercase'>Advertise</h3>
                    <h3 className='font-semibold my-7 uppercase'>Times of Service</h3>
                </div>
                <div className='text-right'>
                    <h3 className='font-semibold my-7 uppercase'>Work With Us</h3>
                    <h3 className='font-semibold my-7 uppercase'>Subscription</h3>
                </div>
            </div>
        </div>
    );
};

export default BlogBottom;