import React from 'react';
import Banner from './Banner';
import BlogArea from './BlogArea';
import './Blogs.css';
import NavBar from './NavBar';

const Blogs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <BlogArea></BlogArea>
        </div>
    );
};

export default Blogs;