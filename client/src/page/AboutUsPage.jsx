import React from 'react'
import AboutUs from '../component/AboutUs/AboutUs'
import NavbarBootstrap from '../component/Navbar/NavbarBootstrap'
import Landing from '../component/Landing/Landing'
import Testimonial from '../component/Testimonial/Testimonial'
import Footer from '../component/Footer/Footer'


const AboutUsPage = () => {
  return (
    <>
    <NavbarBootstrap/>
    <Landing/>
    <AboutUs/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default AboutUsPage
