import React from 'react';
import BottomNavCategory from './BottomNavCategory';
import Coupon from './Coupon';

const BottomNavBar = () => {
    return (
        <div className='navbar justify-between'>
            <BottomNavCategory />
            <Coupon />
        </div>
    );
};

export default BottomNavBar;