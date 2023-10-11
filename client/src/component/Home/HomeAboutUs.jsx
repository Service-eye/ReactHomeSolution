import React from 'react'
import './HomeAboutUs.css'
import { Link } from 'react-router-dom'

const HomeAboutUs = () => {
    return (
        <>
            
                <div className="home-container">
                <div className="row g-4 p-4  d-flex justify-content-between container-fluid">
                    <div className="col-lg-5">
                        <div className="p-4 custom-aboutUs-div">
                            <h1 className="border border-5 border-white d-inline-flex p-1 custom-aboutUs">About Us</h1>
                            <p className="custom-home-about-us">Home Solution Kathmandu is staffed by a team of
                                energetic and dynamic people who have years of
                                experience in this field in Nepal. We offer a
                                luxury sofa, bed, dining, and other furniture as per
                                our customized and interest.<br />
                                Our worker makes all types of sofa as they are
                                well experienced. We're well acquainted with the
                                goods, their quality. All the staff here are well
                                trained.<br />
                                Best quality, good customer service with
                                reasonable prices are at the heart of our business
                                <Link href className="aboutUs-more-32">More_ _</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 custom-aboutUs-image-div">
                        <img src="/images/chair-removebg-preview.png" alt className="custom-aboutUs-image" />
                    </div>
                </div>
            </div>
            


        </>
    )
}

export default HomeAboutUs
