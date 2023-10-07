import React from 'react';
import { RiUserLine } from 'react-icons/ri';
import { MdFavoriteBorder } from 'react-icons/md';
import Card from '../Card';

const SignInComponent = () => {
    return (
        <div className='gap-10 text-white'>
            <p className='gap-2 flex flex-row items-center'><span><RiUserLine /></span>SignIn</p>
            <p className='gap-2 flex flex-row items-center'><span><MdFavoriteBorder /></span>Favourite</p>
            <Card />
        </div>
    );
};

export default SignInComponent;