import React from 'react';
import { AiOutlineShop, AiOutlineArrowRight } from 'react-icons/ai';
import { BsBox2 } from 'react-icons/bs';
import { Ri24HoursFill } from 'react-icons/ri';

const MiddleAbout = () => {
    return (
        <div className='section-container flex sm:flex-col-reverse md:flex-row lg:flex-row gap-28 mt-20 mb-10'>
            <div className='sm:w-full md:w-1/2 lg:w-1/2'>
                <p className='sm:text-lg md:text-2xl lg:text-2xl mb-4'>Know our service</p>
                <h1 className='sm:text-3xl md:text-3xl lg:text-6xl leading-normal'>We offer the best service that will <span style={{ color: '#3E60C9' }}>make it easier</span> </h1>
                <p className='my-6 sm:my:3 text-justify leading-10 sm:leading-7'>At Luminae, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.</p>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex flex-col justify-between text-center p-7 bg-base-100 shadow-lg rounded-2xl'>
                        <AiOutlineShop className='w-full text-5xl justify-center' style={{ color: '#3E60C9' }} />
                        <h3 className='text-xl font-bold my-5'>Full category shop</h3>
                        <p className='text-md text-justify'>Explore our comprehensive online store where you'll find a diverse range of products across multiple categories, all curated to cater to your various needs and ...</p>
                        <button className='button-primary-wide text-center mt-3'>Read More <AiOutlineArrowRight /></button>
                    </div>
                    <div className='flex flex-col justify-between text-center p-7 bg-base-100 shadow-lg rounded-2xl'>
                        <BsBox2 className='w-full text-4xl justify-center' style={{ color: '#3E60C9' }} />
                        <h3 className='text-xl font-bold my-5'>Extraordinary discount</h3>
                        <p className='text-md text-justify'> Experience unparalleled savings on a wide selection of premium products that enhance your lifestyle without compromising on quality...</p>
                        <button className='button-primary-wide text-center mt-3'>Read More <AiOutlineArrowRight /></button>
                    </div>
                    <div className='flex flex-col justify-between text-center p-7 bg-base-100 shadow-lg rounded-2xl'>
                        <div className='flex justify-center'>
                        <Ri24HoursFill className='w-full text-5xl justify-center' style={{ color: '#3E60C9' }}   />
                        </div>
                        <h3 className='text-xl font-bold my-5'>Free Cargo</h3>
                        <p className='text-md text-justify'>Enjoy the convenience of free cargo services, ensuring your purchases are delivered right to your doorstep without any additional cost. Experience seamless...</p>
                        <button className='button-primary-wide text-center mt-3'>Read More <AiOutlineArrowRight /></button>
                    </div>
                    <div className='flex flex-col justify-between text-center p-7 bg-base-100 shadow-lg rounded-2xl'>
                        <AiOutlineShop className='w-full text-5xl justify-center' style={{ color: '#3E60C9' }} />
                        <h3 className='text-xl font-bold my-5'>24-hour customer service</h3>
                        <p className='text-md text-justify'>Our commitment to exceptional customer care means our 24-hour customer service team is always available to assist you, ensuring your inquiries and concerns...</p>
                        <button className='button-primary-wide text-center mt-3'>Read More <AiOutlineArrowRight /></button>
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