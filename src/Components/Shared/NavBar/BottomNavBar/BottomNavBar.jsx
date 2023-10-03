import React from 'react';
import BottomNavCategory from './BottomNavCategory';
import Coupon from './Coupon';
import SignInComponent from './SignInComponent';

const BottomNavBar = () => {
    return (
        <div className='bg-[var(--bg-secondary)] navbar justify-between'>
            <BottomNavCategory />
            <Coupon />
            <SignInComponent />
        </div>
    );
};

export default BottomNavBar;