import React from 'react'

import Blogs from './Blogs'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section>
      <div className="container-fluid" id='hero'>
        <h2 className='display-5 fw-bold'>WELCOME TO OUR BLOG APP</h2>
        <p className='fs-5'>Share your ideas and read other's thoughts.</p>
        <Link to={"/create"} className='btn btn-outline-dark'>Create a new blog</Link>
      </div>
       <Blogs/>
    </section>
  )
}

export default Home