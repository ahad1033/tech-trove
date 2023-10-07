import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { PiTelegramLogoDuotone } from 'react-icons/pi';


const FooterIcons = () => {
    return (
        <div className='flex gap-2 justify-between'>
            <AiOutlineInstagram />
            <FiFacebook />
            <PiTelegramLogoDuotone />
        </div>
    );
};

export default FooterIcons;
