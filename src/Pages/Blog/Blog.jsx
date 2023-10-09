import React from 'react';
import BlogBanner from '../../Components/Blog/BlogBanner/BlogBanner';
import TextualBlog from '../../Components/Blog/TextualBlog/TextualBlog';
import BlogBottom from '../../Components/Blog/BlogBottom/BlogBottom';

const Blog = () => {
    return (
        <div>
            <BlogBanner />
            <TextualBlog />
            <BlogBottom />
        </div>
    );
};

export default Blog;