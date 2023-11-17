import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Create = () => {
    const initialBlog = {
        title:"",
        author:"",
        content:"",
    }

    const [blog,setBlog] = useState(initialBlog)
    const handleSubmit = async(e) =>{
        e.preventDefault()
        await fetch(`https://blogger-cc0b.onrender.com/api/create-blog`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(blog)
        })
        toast.success("Blog created successfully")
        setBlog(initialBlog)
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setBlog({
            ...blog,
            [name]:value
        })
    }

    return (
        <section>
            <div className="container my-5">
                <h2 className="text-center mb-5 fw-bold">Create a new Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={blog.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">
                            Author
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="author"
                            name="author"
                            value={blog.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">
                            Content
                        </label>
                        <textarea
                            className="form-control"
                            id="content"
                            rows={5}
                            name="content"
                            value={blog.content}
                            onChange={handleChange}
                            required
                           
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Create