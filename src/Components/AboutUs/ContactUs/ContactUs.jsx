import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'

const ContactUs = () => {

    return (
        <div className='section-container flex flex-row my-10 lg:my-20'>
            <div className='w-full lg:w-1/2 p-5 md:p-10 lg:p-14 relative' style={{ backgroundColor: '#262626' }}>
                <h2 className='text-3xl lg:text-5xl font-bold text-white'>Tell us about your <p className='mt-3' style={{ color: '#FFC94B' }}>Concerns</p></h2>
                <div className="form-control w-full mt-5 md:mt-8 lg:mt-8">
                    <label className="label">
                        <span className="label-text text-white mb-3">Your Name</span>
                    </label>
                    <div>
                        {/* <AiOutlineUser /> */}
                        <input type="email" placeholder="Enter Your Name Here" className="input input-bordered border-white w-full" />
                    </div>
                </div>
                <div className="form-control w-full mt-5 md:mt-8 lg:mt-8">
                    <label className="label">
                        <span className="label-text text-white mb-3">Email</span>
                    </label>
                    <div>
                        {/* <AiOutlineUser /> */}
                        <input type="email" placeholder='Enter Your Email Here' className="input input-bordered border-white w-full" />
                    </div>
                </div>
                <div className="form-control mt-5 md:mt-8 lg:mt-8">
                    <label className="label">
                        <span className="label-text text-white mb-3">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 border-white" placeholder="Tell Us About Your Conceerns"></textarea>
                </div>
                <button className='btn button-primary-wide mt-10'>Send</button>
            </div>
            <div className='hidden lg:w-1/2 relative lg:block'>
                <div className="h-full" style={{ background: `url('https://i.ibb.co/hXjcCxW/banner-Left.jpg') center/cover no-repeat` }}></div>
            </div>
        </div>
    );
};

export default ContactUs;