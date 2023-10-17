import React from 'react';
// import { AiOutlineUser } from 'react-icons/ai'

const ContactUs = () => {
    return (
        <div className='section-container'>
            <div className='w-1/2 p-14' style={{ backgroundColor: '#262626' }}>
                <h2 className='text-5xl font-bold text-white'>Tell us about your <p className='mt-3' style={{ color: '#FFC94B' }}>Concerns</p></h2>
                <div className="form-control w-full max-w-xs mt-8">
                    <label className="label">
                        <span className="label-text text-white mb-3">Your name</span>
                    </label>
                    <div>
                        {/* <AiOutlineUser /> */}
                        <input type="text" placeholder="Enter Your Name Here" className="input input-bordered border-white max-w-full" />
                    </div>
                </div>
                <div className="form-control w-full max-w-xs mt-8">
                    <label className="label">
                        <span className="label-text text-white mb-3">Email</span>
                    </label>
                    <div>
                        {/* <AiOutlineUser /> */}
                        <input type="email" placeholder="Enter Your Email Here" className="input input-bordered border-white w-full" />
                    </div>
                </div>
                <div className="form-control  mt-8">
                    <label className="label">
                        <span className="label-text text-white mb-3">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 border-white" placeholder="Tell Us About Your Conceerns"></textarea>
                </div>
                <button className='btn button-primary-wide mt-10'>Send</button>
            </div>
            <div className='w-1/2'>

            </div>
        </div>
    );
};

export default ContactUs;