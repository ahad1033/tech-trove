import React from 'react';
import Logo from './logo';
import TopNavOptions from './TopNavOptions';
import SearchOption from './SearchOption';
import SocialIcons from './SocialIcons';

const TopNavBar = () => {

    return (
        <div className="navbar lg:flex-row md:flex-col sm:flex-row-reverse lg:justify-between md:justify-between sm:justify-between bg-white text-black section-container lg:py-7 md:py-3 sm:py-8 ">
            <div className="w-full">
                <div className="flex lg:flex-row md:flex-row gap-3 items-center justify-between">
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