import React from 'react';

const BlogGalaray = () => {
    return (
        <div className='section-container w-full mx-auto flex justify-center gap-5 lg:my-16 md:my-10 sm:my-8'>
            <div className='w-2/3'>
                <img className='w-full h-full' src="https://i.ibb.co/VgjVgY0/blog-Galary1.png" alt="" />
            </div>
            <div className='w-1/3 flex flex-col gap-5'>
                <img className='w-full' src="https://i.ibb.co/6nrV9Xj/blog-Galary2.png" alt="" />
                <img className='w-full' src="https://i.ibb.co/y007txw/blog-Galary4.png" alt="" />
                <img className='w-full' src="https://i.ibb.co/gvTKcP7/blog-Galary3.png" alt="" />
            </div>
        </div>
    );
};

export default BlogGalaray;