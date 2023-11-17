import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({blog}) => {
  return (
    <div className="col-lg-4 my-2 col-md-6">
       <div className='border p-2'>
        <p>{blog.title}</p>
        <p>{blog.content}</p>
        <p>{blog.author}</p>
        <Link to={`/blogs/${blog._id}`}>Read Blog</Link>
       </div>
    </div>
  )
}

export default Blog