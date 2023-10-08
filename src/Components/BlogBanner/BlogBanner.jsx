import React from 'react';
// import { BsFillBookmarkHeartFill } from 'react-icons';

const BlogBanner = () => {
    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co/9wk7cBx/stunning-barefooted-woman-trendy-fur-coat-dancing-laughing-photoshoot-1.png)` }}>
            <div className='px-32 py-36'>
                <div>
                    {/* <span><BsFillBookmarkHeartFill /></span> */}
                </div>
                <h1 className='text-6xl leading-snug uppercase font-bold text-white'>Stunning barefooted <p>woman of 2023</p></h1>
                <p className='uppercase text-white mt-3 w-[500px]'>In the heart of a chic urban studio, the atmosphere buzzed with excitement as a trendy fur coat took center stage during a vibrant photoshoot.</p>
                <button className="btn btn-outline text-white border-white mt-3">Read More</button>
                <div className='flex text-white mt-10 gap-5'>
                    <div className='w-[290px]'>
                        <h2 className='uppercase font-bold text-lg mb-3'>Elevating Everyday Style</h2>
                        <p className='uppercase text-justify'>Explore the art of blending high-end and budget-friendly fashion items to create stylish and versatile outfits.</p>
                    </div>
                    <div className='w-[290px]'>
                        <h2 className='uppercase font-bold text-lg mb-3'>Sustainable Fashion</h2>
                        <p className='uppercase text-justify'>Discuss the growing importance of sustainable fashion and its impact on the environment.</p>
                    </div>
                    <div className='w-[290px]'>
                        <h2 className='uppercase font-bold text-lg mb-3'>The Evolution of Workwear</h2>
                        <p className='uppercase text-justify'>Showcase versatile outfit ideas that strike a balance between professionalism and personal expression.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;