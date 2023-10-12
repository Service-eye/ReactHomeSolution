import React from 'react'
import Blogs from '../component/Blogs/Blogs'
import Footer from '../component/Footer/Footer'
import Testimonial from '../component/Testimonial/Testimonial'
import Navbar from '../component/Navbar/Navbar'

const BlogPage = () => {
  return (
    <>
      <Navbar/>
      <Blogs/>
      {/* <Testimonial/> */}
      <Footer/>
      
    </>
  )
}

export default BlogPage
