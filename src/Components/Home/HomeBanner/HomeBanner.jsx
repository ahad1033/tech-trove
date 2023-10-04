import React from 'react';

const HomeBanner = () => {
    return (
        <div className='flex'>
            <div className='w-1/3'><img src='https://i.ibb.co/hXjcCxW/banner-Left.jpg' alt="" /></div>
            <div className='w-2/3'><img className='max-h-fit' src='https://i.ibb.co/kyFFSzs/banner-Right.png' alt="" /></div>
        </div>
    );
};

export default HomeBanner;