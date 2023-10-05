import React from 'react';
import { TbShoppingBagPlus } from 'react-icons/tb';

const HomeBanner = () => {
    return (
        <div className='flex'>
            <div className='w-1/3 relative'>
                <img
                    src='https://i.ibb.co/hXjcCxW/banner-Left.jpg'
                    alt=""
                    className='h-full object-cover'
                />
                <div className='hidden lg:block absolute left-[433px] bottom-[148px]'>
                    <div className='flex flex-col items-center justify-center bg-white gap-2 py-8 px-8'>
                        <h1 className='text-xl font-bold text-black'>Summer Essentials</h1>
                        <h3 className='text-xl' style={{ color: '#FF2E00' }}>20% off</h3>
                    </div>
                    <div className='bottom-0 bg-black py-1'>
                        <p className='font-white w-full text-center'>19 Jul-30 Jul</p>
                    </div>
                </div>
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
                    <button className="button-primary"><TbShoppingBagPlus />Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
