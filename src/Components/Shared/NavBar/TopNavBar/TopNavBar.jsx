import React from 'react';
import Logo from './logo';
import TopNavOptions from './TopNavOptions';
import SearchOption from './SearchOption';
import SocialIcons from './SocialIcons';

const TopNavBar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="flex gap-3 items-center">
                    <Logo />
                    <SearchOption />
                </div>
            </div>
            <div className="hidden lg:flex">
                {/* menu options were here */}
                <TopNavOptions />
            </div>
            <div className="navbar-end">
                <SocialIcons />
            </div>
        </div>
    );
};

export default TopNavBar;