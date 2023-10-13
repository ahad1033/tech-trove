import React from 'react';
import TopCard from './TopCard';
import BottomCard from './BottomCard';

const BlogCard = () => {
    return (
        <section className='section-container flex flex-col my-16'>
            <TopCard />
            <BottomCard />
        </section>
    );
};

export default BlogCard;