import React from 'react';
import { Link } from 'react-router-dom';

const TopNavOptions = () => {

    const navOptions = <>
    <Link className='text-base mx-2' to='/'>Home</Link>
    <span className='mx-2 text-base'>|</span>
    <Link className='text-base mx-2' to='/'>About Us</Link>
    <span className='mx-2 text-base'>|</span>
    <Link className='text-base mx-2' to='/blog'>Blog</Link>
    <span className='mx-2 text-base'>|</span>
    <Link className='text-base mx-2' to='/blog'>Contact Us</Link>
    <span className='mx-2 text-base'>|</span>
    <Link className='text-base mx-2' to='/blog'>Help & Support</Link>
  </>

    return (
        <div className='flex justify-between'>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-sm">
                    {navOptions}
                </ul>
            </div>
            <div className="lg:flex md:flex sm:hidden flex-row">
                <ul className="menu menu-horizontal px-1 font-bold text-sm">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default TopNavOptions;