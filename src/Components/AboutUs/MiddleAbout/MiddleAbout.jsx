import React from 'react';

const MiddleAbout = () => {
    return (
        <div className='section-container flex sm:flex-col-reverse md:flex-row lg:flex-row gap-28 mt-20 mb-10'>
            <div className='sm:w-full md:w-1/2 lg:w-1/2'>
                <p className='sm:text-lg md:text-2xl lg:text-2xl mb-4'>Know our service</p>
                <h1 className='sm:text-3xl md:text-3xl lg:text-6xl leading-normal'>We offer the best service that will <span style={{ color: '#3E60C9' }}>make it easier</span> </h1>
                <p className='my-6 sm:my:3 text-justify leading-10 sm:leading-7'>At Luminae, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.</p>
            </div>
            <div className='sm:w-full md:w-1/2 lg:w-1/2 flex justify-center items-center'>
                <img className='h-full' src="https://i.ibb.co/KsDzzbc/team.png" alt="" />
            </div>
        </div>
    );
};

export default MiddleAbout;