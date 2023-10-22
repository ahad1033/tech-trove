import React from 'react';

const TopAbout = () => {
    return (
        <div className='section-container flex items-center my-10 sm:gap-10 md:gap-20 lg:gap-36'>
            <div className='w-full lg:w-2/3 px-6 md:px-0 lg:px-0'>
                <p className='text-lg md:text-xl lg:text-2xl mb-4'>Let's get to know TechTrove</p>
                <h1 className='text-2xl md:text-3xl lg:text-6xl leading-normal'>Providing the best experience to make your <span style={{color: '#3E60C9'}}>Online Shopping</span> </h1>
                <p className='my-6 sm:my:3 text-justify leading-10 sm:leading-7'>At Luminae, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.</p>
                <div className='flex flex-row justify-between items-center gap-8 lg:gap-10'>
                    <div className='text-left'>
                        <h3 className='text-2xl md:text-4xl lg:text-4xl mb-3' style={{color:'#3E60C9'}}>20+</h3>
                        <p className='text-xs md:text-lg lg:text-lg'>Shopping category</p>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-2xl md:text-4xl lg:text-4xl mb-3' style={{color:'#3E60C9'}}>10+</h3>
                        <p className='text-xs md:text-lg lg:text-lg'>Different Territory</p>
                    </div>
                    <div className='text-right'>
                        <h3 className='text-2xl md:text-4xl lg:text-4xl mb-3' style={{color:'#3E60C9'}}>4M+</h3>
                        <p className='text-xs md:text-lg lg:text-lg'>Happy Client</p>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex w-full lg:w-1/3 justify-center items-center'>
                <h3 className='flex items-center w-80 h-44 text-center text-xl font-semibold p-10 leading-9 rounded-2xl' style={{backgroundColor:'#EAF3FB', color:'#555555'}}>We have made many people satisfied with our Platform</h3>
            </div>
        </div>
    ); 
};

export default TopAbout;