import React from 'react';
import TopNavBar from '../../Components/Shared/NavBar/TopNavBar/TopNavBar';
import BottomNavBar from '../../Components/Shared/NavBar/BottomNavBar/BottomNavBar';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';
import Footer from '../../Components/Shared/Footer/Footer';
import { FcGoogle } from 'react-icons/fc'

const SignIn = () => {
    return (
        <div>
            <TopNavBar />
            <BottomNavBar />
            {/* sign in & up form starts here */}
            <div className='section-container my-10 gap-0 sm:gap-5 lg:gap-10'>
                {/* sign in */}
                <div className='w-full md:w-1/2 lg:w1/2 px-10 md:px-0 lg:px-0'>
                    <h2 className='text-xl font-semibold'>Sign in</h2>
                    <div className="form-control w-full mt-10 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="enter your email" className="input input-bordered w-full text-xs" />
                    </div>
                    <div className="form-control w-full my-7">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="enter your password" className="input input-bordered w-full text-xs" />
                    </div>
                    <a className="link text-xs text-blue-500">Forgot password?</a>
                    <button className='button-secondary-wide mt-7'>Sign In</button>
                    <div className="flex items-center gap-4 my-5">
                        <hr className="flex-1 border-t border-gray-300" />
                        <span className="text-gray-500 text-sm">OR</span>
                        <hr className="flex-1 border-t border-gray-300" />
                    </div>
                    <button className='button-secondary-wide' style={{ textTransform: 'none'}}><FcGoogle /> sign in with google</button>
                </div>
                {/* sign up */}
                
            </div>
            <BottomSection />
            <Footer />
        </div>
    );
};

export default SignIn;