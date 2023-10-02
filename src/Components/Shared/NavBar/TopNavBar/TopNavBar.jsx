import React from 'react';
import Logo from './logo';
import TopNavOptions from './TopNavOptions';

const TopNavBar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* menu options were here */}
                <TopNavOptions />
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default TopNavBar;