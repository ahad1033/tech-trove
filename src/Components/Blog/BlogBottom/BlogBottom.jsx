import React from 'react';
import { PiNavigationArrowFill } from 'react-icons/pi'

const BlogBottom = () => {
    return (
        <div className='section-container py-11 flex justify-between lg:flex-row md:flex-row sm:flex-col gap-5 lg:gap-32 ' style={{ backgroundColor: '#7296AB' }}>
            <div className='w-full lg:w-1/3 items-start sm:items-center'>
                <h1 className='mb-4 text-5xl text-black'>Tech<span className='font-bold'>Trove</span></h1>
                <p className='mb-5 text-black font-semibold text-xl'>Register your email not to miss the last minutes off+ Free delivery</p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                        <button className="btn">
                            <PiNavigationArrowFill />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/3 flex justify-between lg:text-center md:text-center text-black'>
                <div>
                    <h3 className='font-semibold my-7 uppercase'>Contact Us</h3>
                    <h3 className='font-semibold my-7 uppercase'>Partners</h3>
                </div>
                <div className='text-center'>
                    <h3 className='font-semibold my-7 uppercase'>Advertise</h3>
                    <h3 className='font-semibold my-7 uppercase'>Times of Service</h3>
                </div>
                <div>
                    <h3 className='font-semibold my-7 uppercase'>Work With Us</h3>
                    <h3 className='font-semibold my-7 uppercase'>Subscription</h3>
                </div>
            </div>
        </div>
    );
};

export default BlogBottom;