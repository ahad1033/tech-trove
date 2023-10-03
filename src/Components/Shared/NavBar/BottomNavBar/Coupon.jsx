import React from 'react';

const Coupon = () => {
    return (
        <div className='flex flex-row gap-3 items-center'>
            <img src={'https://i.ibb.co/SKZ0mFX/Men-cosmetic.png'} alt="img" />
            <div>
                <h3 className='font-semibold'>Weekly Men's Toiletries Coupons.</h3>
                <p>We extend exclusive discounts to our male clientele</p>
            </div>
        </div>
    );
};

export default Coupon;