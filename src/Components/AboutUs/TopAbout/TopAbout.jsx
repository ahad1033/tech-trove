import React from 'react';

const TopAbout = () => {
    return (
        <div className='section-container flex items-center my-10 gap-36'>
            <div className='lg:w-2/3 md:w-2/3 sm:w-1/2'>
                <p className='text-2xl sm:text-lg mb-4'>Let's get to know TechTrove</p>
                <h1 className='text-5xl sm:text-3xl leading-normal'>Providing the best experience to make your <span style={{color: '#3E60C9'}}>Online Shopping</span> </h1>
                <p className='my-6 sm:my:3 text-justify leading-10 sm:leading-7'>At Luminae, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.</p>
                <div className='flex flex-row justify-between items-center gap-10'>
                    <div className='text-left'>
                        <h3 className='sm:text-2xl md:text-4xl lg:text-4xl mb-3' style={{color:'#3E60C9'}}>20+</h3>
                        <p className='sm:text-xs md:text-lg lg:text-lg'>Shopping category</p>
                    </div>
                    <div className='text-center'>
                        <h3 className='sm:text-2xl md:text-4xl lg:text-4xl mb-3' style={{color:'#3E60C9'}}>10+</h3>
                        <p className='sm:text-xs md:text-lg lg:text-lg'>Different Territory</p>
                    </div>
                    <div className='text-right'>
                        <h3 className='sm:text-2xl md:text-4xl lg:text-4xl mb-3' style={{color:'#3E60C9'}}>4M+</h3>
                        <p className='sm:text-xs md:text-lg lg:text-lg'>Happy Client</p>
                    </div>
                </div>
            </div>
            <div className='w-2/3 sm:w-1/2'>
                <h3>We have made many people satisfied with our Platform</h3>
            </div>
        </div>
    ); 
};

export default TopAbout;