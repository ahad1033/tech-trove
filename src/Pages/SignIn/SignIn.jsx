import React from 'react';
import TopNavBar from '../../Components/Shared/NavBar/TopNavBar/TopNavBar';
import BottomNavBar from '../../Components/Shared/NavBar/BottomNavBar/BottomNavBar';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';
import Footer from '../../Components/Shared/Footer/Footer';
import { FcGoogle } from 'react-icons/fc'
import { PiWarningOctagonLight } from 'react-icons/pi'
import SignUpComponent from '../../Components/SignIn/SignUpComponent/SignUpComponent';

const SignIn = () => {
    return (
        <div>
            <TopNavBar />
            <BottomNavBar />
            {/* sign in & up form starts here */}
            <div className='section-container my-10 gap-0 sm:gap-5 lg:gap-10 flex flex-col md:flex-row lg:flex-row'>
                {/* sign in */}
                <div className='w-full md:w-1/2 lg:w1/2 px-10 md:px-0 lg:px-0'>
                    <h2 className='text-xl font-semibold'>Sign in</h2>
                    <div className="form-control w-full mt-10 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="enter your email" className="input input-bordered w-full text-xs" />
                    </div>
                    <div className="form-control w-full my-7">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="enter your password" className="input input-bordered w-full text-xs" />
                    </div>
                    <a className="link text-xs text-blue-500">Forgot password?</a>
                    <button className='button-secondary-wide mt-7'>Sign In</button>
                    <div className="flex items-center gap-4 my-5">
                        <hr className="flex-1 border-t border-gray-300" />
                        <span className="text-gray-500 text-sm">OR</span>
                        <hr className="flex-1 border-t border-gray-300" />
                    </div>
                    <button className='button-secondary-wide' style={{ textTransform: 'none' }}><FcGoogle />sign in with google</button>
                    <p className='text-red-500 text-xs lg:text-sm mt-7 flex justify-center items-center gap-3'><PiWarningOctagonLight className='text-4xl md:text-3xl lg:text-2xl' />Sign up to  save $9 for free shipping with Ausff company through australlian territory</p>
                </div>
                {/* sign up */}

                <SignUpComponent />

                {/* <div className='w-full md:w-1/2 lg:w1/2 px-10 md:px-0 lg:px-0 my-5 md:my-0 lg:my-0'>
                    <h2 className='text-xl font-semibold'>Sign up</h2>
                    <div className="form-control w-full mt-10 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="enter your full name" className="input input-bordered w-full text-xs" />
                    </div>
                    <div className="form-control w-full mt-10 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="enter your email" className="input input-bordered w-full text-xs" />
                    </div>
                    <div className="form-control w-full my-7">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="enter your password" className="input input-bordered w-full text-xs" />
                    </div>
                    <a className="link text-xs text-blue-500">Forgot password?</a>
                    <button className='button-secondary-wide mt-7'>Sign Up</button>
                    <div className="flex items-center gap-4 my-5">
                        <hr className="flex-1 border-t border-gray-300" />
                        <span className="text-gray-500 text-sm">OR</span>
                        <hr className="flex-1 border-t border-gray-300" />
                    </div>
                    <button className='button-secondary-wide' style={{ textTransform: 'none' }}><FcGoogle /> sign up by google</button>
                </div> */}
            </div>
            <BottomSection />
            <Footer />
        </div>
    );
};

export default SignIn;