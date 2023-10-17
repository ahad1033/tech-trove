import React from 'react';

const TopAbout = () => {
    return (
        <div className='section-container flex items-center'>
            <div className='lg:w-2/3 md:w-2/3 sm:w-1/2 '>
                <p className='text-2xl mb-4'>Let's get to know TechTrove</p>
                <h1 className='text-5xl leading-normal'>Providing the best experience to make your <span style={{color: '#3E60C9'}}>Online Shopping</span> </h1>
                <p className='my-6 text-justify leading-10'>At Luminae, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.</p>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-4xl' style={{color:'#3E60C9'}}>20+</h3>
                        <p>Shopping category</p>
                    </div>
                    <div>
                        <h3 className='text-4xl' style={{color:'#3E60C9'}}>10+</h3>
                        <p>Different Territory</p>
                    </div>
                    <div>
                        <h3 className='text-4xl' style={{color:'#3E60C9'}}>4M+</h3>
                        <p>Happy Client</p>
                    </div>
                </div>
            </div>
            <div className='xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-1/2 '>
                <h3>We have made many people satisfied with our Platform</h3>
            </div>
        </div>
    ); 
};

export default TopAbout;