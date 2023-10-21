import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const Trending = () => {
    return (
        <div className='section-container'>
            <SectionTitle title={`Trending Must Have`} />
            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10 lg:gap-20'>
                <div className='w-96 px-10 md:px-0 lg:px-0'>
                    <img src="https://i.ibb.co/f4pC4jQ/4-org-zoom-1.png" alt="" />
                    <div className='flex flex-col lg:flex-row justify-between bottom-0 text-white p-4' style={{ backgroundColor: '#262626' }}>
                        <div>
                            <h1 className='font-bold text-center lg:text-start'>Cool & Sexy Calvin Klein</h1>
                            <p className='text-center lg:text-start'>Dotted dress-Casual</p>
                        </div>
                        <div className='text-center mt-3 lg:mt-0'>
                            <button className='btn btn-outline text-white btn-sm lg:btn-md'>$89 Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-96 px-10 md:px-0 lg:px-0'>
                    <img src="https://i.ibb.co/6RQhftg/4-org-zoom-1.png" alt="" />
                    <div className='flex flex-col lg:flex-row justify-between bottom-0 text-white p-4' style={{ backgroundColor: '#262626' }}>
                        <div>
                            <h1 className='font-bold text-center lg:text-start'>Cool & Sexy Calvin Klein</h1>
                            <p className='text-center lg:text-start'>Dotted dress-Casual</p>
                        </div>
                        <div className='text-center mt-3 lg:mt-0'>
                            <button className='btn btn-outline text-white btn-sm lg:btn-md'>$105 Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-96 px-10 md:px-0 lg:px-0'>
                    <img src="https://i.ibb.co/Pt6Qwx2/4-org-zoom-1.png" alt="" />
                    <div className='flex flex-col lg:flex-row justify-between bottom-0 text-white p-4' style={{ backgroundColor: '#262626' }}>
                        <div>
                            <h1 className='font-bold text-center lg:text-start'>beige coat Zara</h1>
                            <p className='text-center lg:text-start'>Cream-Brown-Formal</p>
                        </div>
                        <div className='text-center mt-3 lg:mt-0'>
                            <button className='btn btn-outline text-white btn-sm lg:btn-md'>$70 Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;