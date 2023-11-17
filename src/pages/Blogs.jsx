import React, { useState, useEffect } from 'react';
import Blog from '../Components/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        displayBlogs();
    }, []); // An empty dependency array ensures that this effect runs only once when the component mounts

    const displayBlogs = async () => {
        try {
            const res = await fetch(`https://blogger-cc0b.onrender.com/api/blogs/`);
            const blogsData = await res.json();
            setBlogs(blogsData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className='container my-5'>
            <h2 className='text-center my-3'>Your Blogs</h2>
            <div className="row">
                {
                    blogs.length === 0 ? <p>Blog Not Found</p> : blogs.map((blog) => (
                        <Blog key={blog._id} blog={blog} />
                    ))
                }
            </div>
        </section>
    );
};

export default Blogs;
