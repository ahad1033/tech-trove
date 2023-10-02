import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoTelegram, BiLogoFacebook } from 'react-icons/bi';

const SocialIcons = () => {
    return (
        <div className='flex gap-2 text-gray-400'>
            <AiFillInstagram />
            <BiLogoFacebook />
            <BiLogoTelegram />
        </div>
    );
};

export default SocialIcons;