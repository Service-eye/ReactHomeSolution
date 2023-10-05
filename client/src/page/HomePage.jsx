import React from 'react'
import Landing from '../component/Landing/Landing'
import NavbarBootstrap from '../component/Navbar/NavbarBootstrap'
import Footer from '../component/Footer/Footer'
import GetInTouch from '../component/GetInTouch/GetInTouch'
import HomeAboutUs from '../component/Home/HomeAboutUs'
import NewArivals from '../component/Home/NewArivals'

const HomePage = () => {
  return (
    <>
      <NavbarBootstrap/>
      <Landing />
      <HomeAboutUs/>
      <NewArivals/>
      <GetInTouch/>
      <Footer/>

    </>
  )
}

export default HomePage
