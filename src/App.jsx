import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Create from './pages/Create'
import {Toaster} from "react-hot-toast"
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'
import Navbar from './Components/Navbar'
import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogs/:id' element={<SingleBlog/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App