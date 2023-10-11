import React from 'react';
import BlogBanner from '../../Components/Blog/BlogBanner/BlogBanner';
import TextualBlog from '../../Components/Blog/TextualBlog/TextualBlog';
import BlogBottom from '../../Components/Blog/BlogBottom/BlogBottom';
import BlogFooter from '../../Components/Blog/BlogFooter/BlogFooter';
import BlogGalaray from '../../Components/Blog/BlogGalaray/BlogGalaray';

const Blog = () => {
    return (
        <div>
            <BlogBanner />
            <TextualBlog />
            <BlogGalaray />
            <BlogBottom />
            <BlogFooter />
        </div>
    );
};

export default Blog;