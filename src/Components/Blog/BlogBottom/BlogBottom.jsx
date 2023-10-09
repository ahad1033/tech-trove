import React from 'react';
import { PiNavigationArrowFill } from 'react-icons/pi'

const BlogBottom = () => {
    return (
        <div className='section-container py-11 flex gap-20' style={{ backgroundColor: '#7296AB' }}>
            <div>
                <h1 className='mb-4 text-5xl text-black'>Tech<span className='font-bold'>Trove</span></h1>
                <p className='mb-5 text-black font-semibold text-xl'>Register your email not to miss the last minutes off+ Free delivery</p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your email" className="input input-bordered" />
                        <button className="btn">
                            <PiNavigationArrowFill />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex text-black gap-10 items-center mx-auto'>
                <div>
                    <h3 className='font-semibold my-7 uppercase'>Contact Us</h3>
                    <h3 className='font-semibold my-7 uppercase'>Partners</h3>
                </div>
                <div>
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