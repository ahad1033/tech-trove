import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { LiaTelegramPlane } from 'react-icons/li';


const HomePageFooterIcons = () => {
    return (
        <div className='lg:flex md:flex gap-2 text-gray-400 sm:hidden'>
            <AiOutlineInstagram />
            <FiFacebook />
            <LiaTelegramPlane />
        </div>
    );
};

export default HomePageFooterIcons;
