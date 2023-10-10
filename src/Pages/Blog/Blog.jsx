import React from 'react';
import BlogBanner from '../../Components/Blog/BlogBanner/BlogBanner';
import TextualBlog from '../../Components/Blog/TextualBlog/TextualBlog';
import BlogBottom from '../../Components/Blog/BlogBottom/BlogBottom';
import BlogFooter from '../../Components/Blog/BlogFooter/BlogFooter';

const Blog = () => {
    return (
        <div>
            <BlogBanner />
            <TextualBlog />
            <BlogBottom />
            <BlogFooter />
        </div>
    );
};

export default Blog;