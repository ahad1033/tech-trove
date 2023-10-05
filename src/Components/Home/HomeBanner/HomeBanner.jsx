import React from 'react';

const HomeBanner = () => {
    return (
        <div className='flex'>
            <div className='w-1/3'>
                <img
                    src='https://i.ibb.co/hXjcCxW/banner-Left.jpg'
                    alt=""
                    className='h-full object-cover'
                />
            </div>
            <div className='w-2/3'>
                <div
                    className='h-full object-cover'
                    style={{
                        background: 'url(<path-to-image>)',
                        borderRadius: 'var(--spacing-0, 0px)',
                        backgroundPosition: '50%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'var(--button-default, #4172DC)',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default HomeBanner;
