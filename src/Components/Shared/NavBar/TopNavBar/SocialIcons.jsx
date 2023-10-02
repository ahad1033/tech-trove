import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoTelegram, BiLogoFacebook } from 'react-icons/bi';

const SocialIcons = () => {
    return (
        <div className='lg:flex md:flex gap-2 text-gray-400 sm:hidden'>
            <AiFillInstagram />
            <BiLogoFacebook />
            <BiLogoTelegram />
        </div>
    );
};

export default SocialIcons;