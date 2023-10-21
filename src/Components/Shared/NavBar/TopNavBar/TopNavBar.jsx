import React from 'react';
import Logo from './logo';
import TopNavOptions from './TopNavOptions';
import SearchOption from './SearchOption';
import SocialIcons from './SocialIcons';

const TopNavBar = () => {

    return (
        <div className="navbar flex flex-row-reverse md:flex-col lg:flex-row lg:justify-between md:justify-between sm:justify-between bg-white text-black section-container sm:py-8 md:py-3 lg:py-7">
            <div className="w-full">
                <div className="flex md:flex-row lg:flex-row gap-3 items-center justify-between">
                    <Logo />
                    <SearchOption />
                </div>
            </div>
            <div className="flex md:mt-4 justify-between w-full ">
                <TopNavOptions />
                <SocialIcons />
            </div>
        </div>
    );
};

export default TopNavBar;