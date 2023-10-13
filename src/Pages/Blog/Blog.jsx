import React from 'react';
import BlogBanner from '../../Components/Blog/BlogBanner/BlogBanner';
import TextualBlog from '../../Components/Blog/TextualBlog/TextualBlog';
import BlogBottom from '../../Components/Blog/BlogBottom/BlogBottom';
import BlogFooter from '../../Components/Blog/BlogFooter/BlogFooter';
import BlogGalaray from '../../Components/Blog/BlogGalaray/BlogGalaray';
import BlogCard from '../../Components/Blog/BlogCard/BlogCard';

const Blog = () => {
    return (
        <div>
            <BlogBanner />
            <BlogCard />
            <TextualBlog />
            <BlogGalaray />
            <BlogBottom />
            <BlogFooter />
        </div>
    );
};

export default Blog;