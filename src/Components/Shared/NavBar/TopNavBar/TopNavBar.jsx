import React from 'react';
import Logo from './logo';
import TopNavOptions from './TopNavOptions';
import SearchOption from './SearchOption';
import SocialIcons from './SocialIcons';

const TopNavBar = () => {

    return (
        <div className="navbar lg:flex-row md:flex-col lg:justify-between bg-base-100">
            <div className="w-full">
                <div className="flex flex-row gap-3 items-center justify-between ">
                    <Logo />
                    <SearchOption />
                </div>
            </div>
            <div className="flex justify-between w-full">
                <TopNavOptions />
                <SocialIcons />
            </div>
        </div>
    );
};

export default TopNavBar;