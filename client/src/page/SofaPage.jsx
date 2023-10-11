import React from 'react'
import Carousel from '../component/Carousel/Carousel'
import NavbarBootstrap from '../component/Navbar/NavbarBootstrap'
import SofaArrays from '../component/SofaCollection/SofaArrays'
import Footer from '../component/Footer/Footer'

const SofaPage = () => {
    return (
        <>
        <NavbarBootstrap/>
        <Carousel/>
        <SofaArrays/>
        <Footer/>
        </>
    )
}

export default SofaPage
