import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='bg-dark'>
        <nav className=' container d-flex flex-wrap justify-content-between align-items-center py-2'>
        <div>
           <img src="/blogger.png" alt="logo" width={60} />
        </div>
         <div className='d-flex gap-2'>
         <Link className='btn btn-primary' to={"/"}>Home</Link>
         <Link className='btn btn-primary' to={"/create"}>New Blog</Link>
         <Link className='btn btn-primary' to={"/blogs"}>Your Blogs</Link>
         </div>
    </nav>
    </header>
  )
}

export default Navbar