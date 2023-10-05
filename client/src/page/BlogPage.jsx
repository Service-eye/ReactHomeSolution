import React from 'react'
import Blogs from '../component/Blogs/Blogs'
import NavbarBootstrap from '../component/Navbar/NavbarBootstrap'
import Footer from '../component/Footer/Footer'
import Testimonial from '../component/Testimonial/Testimonial'

const BlogPage = () => {
  return (
    <>
      <NavbarBootstrap/>
      <Blogs/>
      <Testimonial/>
      <Footer/>
      
    </>
  )
}

export default BlogPage
