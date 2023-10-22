import React from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';

const BlogBanner = () => {
    return (
        <div className='mx-auto bg-cover bg-center lg:px-32 md:px-10 sm:px-20 py-7 md:py-24 lg:py-36' style={{ backgroundImage: `url(https://i.ibb.co/9wk7cBx/stunning-barefooted-woman-trendy-fur-coat-dancing-laughing-photoshoot-1.png)`, backgroundRepeat: 'no-repeat' }}>
            <div className='flex'>
                <div className='text-white text-2xl md:text-3xl lg:text-5xl pt-5 md:pt-10 lg:pt-20 pr-5 md:pr-5 lg:pr-10'>
                    <span><BsFillBookmarkFill /></span>
                </div>
                <div>
                    <h1 className='text-xl md:text-5xl lg:text-7xl uppercase font-semibold lg:font-bold text-white leading-6 lg:w-full md:w-3/4 sm:w-full'>Stunning barefooted <p className='lg:mt-7 md:mt:5 sm:mt-3'>woman of 2023</p></h1>
                    <p className='uppercase text-sm md:text-lg lg:text-xl text-white mt-3 md:mt-5 lg:mt-12 w-[300px] lg:w-[500px]'>In the heart of a chic urban studio, the atmosphere buzzed with excitement as a trendy fur coat took center stage during a vibrant photoshoot.</p>
                    <button className="btn btn-outline text-white border-white my-5 md:mt-5 lg:mt-12">Read More</button>
                    {/* TO DO - add some dynamic icon */}
                    <div className='hidden md:flex lg:flex text-white mt-10 lg:gap-5 md:gap-10'>
                        <div className='lg:w-[290px] w-[150px]'>
                            <h2 className='uppercase font-bold text-lg mb-3'>Elevating Everyday Style</h2>
                            <p className='uppercase text-justify'>Explore the art of blending high-end and budget-friendly fashion items to create stylish and versatile outfits.</p>
                        </div>
                        <div className='lg:w-[290px] w-[150px]'>
                            <h2 className='uppercase font-bold text-lg mb-3'>Sustainable Fashion</h2>
                            <p className='uppercase text-justify'>Discuss the growing importance of sustainable fashion and its impact on the environment.</p>
                        </div>
                        <div className='lg:w-[290px] w-[150px]'>
                            <h2 className='uppercase font-bold text-lg mb-3'>The Evolution of Workwear</h2>
                            <p className='uppercase text-justify'>Showcase versatile outfit ideas that strike a balance between professionalism and personal expression.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;