import React from 'react';
import { AiOutlineShop,AiOutlineArrowRight } from 'react-icons/ai';

const MiddleAbout = () => {
    return (
        <div className='section-container flex sm:flex-col-reverse md:flex-row lg:flex-row gap-28 mt-20 mb-10'>
            <div className='sm:w-full md:w-1/2 lg:w-1/2'>
                <p className='sm:text-lg md:text-2xl lg:text-2xl mb-4'>Know our service</p>
                <h1 className='sm:text-3xl md:text-3xl lg:text-6xl leading-normal'>We offer the best service that will <span style={{ color: '#3E60C9' }}>make it easier</span> </h1>
                <p className='my-6 sm:my:3 text-justify leading-10 sm:leading-7'>At Luminae, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.</p>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='text-center p-7 bg-base-200 rounded-2xl'>
                        <AiOutlineShop className='w-full text-3xl justify-center' style={{color:'#3E60C9'}} />
                        <h3 className='text-xl font-bold my-5'>Full category shop</h3>
                        <p className='text-md text-justify'>Explore our comprehensive online store where you'll find a diverse range of products across multiple categories, all curated to cater to your various needs and ...</p>
                        <button className='button-primary mt-3'>Read More <AiOutlineArrowRight /></button>
                    </div>
                    <div className='text-center p-7 bg-base-200 rounded-2xl'>
                        <AiOutlineShop className='w-full text-3xl justify-center' style={{color:'#3E60C9'}} />
                        <h3 className='text-xl font-bold my-5'>Full category shop</h3>
                        <p className='text-md text-justify'>Explore our comprehensive online store where you'll find a diverse range of products across multiple categories, all curated to cater to your various needs and ...</p>
                        <button className='button-primary mt-3'>Read More <AiOutlineArrowRight /></button>
                    </div>
                    <div className='text-center p-7 bg-base-200 rounded-2xl'>
                        <AiOutlineShop className='w-full text-3xl justify-center' style={{color:'#3E60C9'}} />
                        <h3 className='text-xl font-bold my-5'>Full category shop</h3>
                        <p className='text-md text-justify'>Explore our comprehensive online store where you'll find a diverse range of products across multiple categories, all curated to cater to your various needs and ...</p>
                        <button className='button-primary mt-3'>Read More <AiOutlineArrowRight /></button>
                    </div>
                    <div className='text-center p-7 bg-base-200 rounded-2xl'>
                        <AiOutlineShop className='w-full text-3xl justify-center' style={{color:'#3E60C9'}} />
                        <h3 className='text-xl font-bold my-5'>Full category shop</h3>
                        <p className='text-md text-justify'>Explore our comprehensive online store where you'll find a diverse range of products across multiple categories, all curated to cater to your various needs and ...</p>
                        <button className='button-primary mt-3'>Read More <AiOutlineArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className='sm:w-full md:w-1/2 lg:w-1/2 flex justify-center items-center'>
                <img className='h-full' src="https://i.ibb.co/KsDzzbc/team.png" alt="" />
            </div>
        </div>
    );
};

export default MiddleAbout;