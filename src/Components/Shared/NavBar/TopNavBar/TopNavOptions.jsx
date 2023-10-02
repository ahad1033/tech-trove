import React from 'react';

const TopNavOptions = () => {

    const navOptions = <>
        <li><a>About Us</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact Us</a></li>
        <li><a>Help & Support</a></li>
    </>

    return (
        <div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default TopNavOptions;