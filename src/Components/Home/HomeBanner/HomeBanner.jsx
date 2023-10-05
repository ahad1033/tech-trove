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
                    className='h-full object-cover flex flex-col items-center justify-center lg:gap-7 md:gap-4 text-white text-3xl'
                    style={{
                        background: 'url(<path-to-image>)',
                        borderRadius: 'var(--spacing-0, 0px)',
                        backgroundPosition: '50%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'var(--button-default, #4172DC)',
                    }}
                >
                    <h1 className='text-4xl uppercase '>Kimonos, Caftans & Pareos</h1>
                    <h2 className=''>Poolside glam included From $4.99</h2>
                    <button className="button-primary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
