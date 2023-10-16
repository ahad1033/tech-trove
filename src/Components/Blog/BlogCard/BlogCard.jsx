import React from 'react';
import TopCard from './TopCard';
import BottomCard from './BottomCard';

const BlogCard = () => {
    return (
        <section className='flex justify-center lg:px-28 md:px-12 sm:p-10 my-16'>
            {/* <TopCard /> */}
            <BottomCard />
        </section>
    );
};

export default BlogCard;