import React from 'react';
import TopCard from './TopCard';
import BottomCard from './BottomCard';

const BlogCard = () => {
    return (
        <section className='lg:px-28 md:px-12 sm:p-10 flex flex-col justify-center my-16 w-full mx-auto'>
            {/* <TopCard /> */}
            <BottomCard />
        </section>
    );
};

export default BlogCard;