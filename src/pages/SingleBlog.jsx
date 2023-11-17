import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [blog, setBlog] = useState({
        title: "",
        content: "",
        date: "",
        author: "", 
    });

    const { id } = useParams();

    useEffect(() => {
        displayBlog();
    }, [id]);

    const displayBlog = async () => {
        try {
            const res = await fetch(`https://blogger-cc0b.onrender.com/api/blogs/${id}`);
            const data = await res.json();
            setBlog(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='container my-5'>
            <p>{blog.title}</p>
            <p>{blog.content}</p>
            <p>{blog.author}</p>
            <p>{blog.date.slice(0,10)}</p>
        </div>
    );
};

export default SingleBlog;
