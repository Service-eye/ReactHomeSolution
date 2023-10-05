import React from 'react'
import Landing from '../component/Landing/Landing'
import NavbarBootstrap from '../component/Navbar/NavbarBootstrap'
import Footer from '../component/Footer/Footer'
import GetInTouch from '../component/GetInTouch/GetInTouch'
import HomeAboutUs from '../component/Home/HomeAboutUs'
import NewArivals from '../component/Home/NewArivals'
import RecommendedForYou from '../component/Home/RecommendedForYou'
import Furnitures from '../component/Home/Furnitures'
import Solars from '../component/Home/Solars'
import Chimney from '../component/Home/Chimney'
import WallPanel from '../component/Home/WallPanel'
import DecorativeItems from '../component/Home/DecorativeItems'
import CNCJali from '../component/Home/CNCJali'
import Parqueting from '../component/Home/Parqueting'

const HomePage = () => {
  return (
    <>
      <NavbarBootstrap/>
      <Landing />
      <HomeAboutUs/>
      <NewArivals/>
      <RecommendedForYou/>
      <Furnitures/>
      <Solars/>
      <Chimney/>
      <WallPanel/>
      <DecorativeItems/>
      <CNCJali/>
      <Parqueting/>
      <GetInTouch/>
      <Footer/>

    </>
  )
}

export default HomePage
