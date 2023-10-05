import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div>
                {/* Footer 2 Start */}
                <div className="container-fluid custom-footer-container">
                    <div className="row">
                        <div className="col-lg-12 text-contactUs-129">
                            Contact Us <i className="fa-regular fa-envelope" />
                        </div>
                        <div className="col-lg-12 input-contactUs-132">
                            <input type="number" placeholder="Phone No." className="me-4" />
                            <input type="email" placeholder="Email" />
                            <button className="send-button-135"><i className="fa-regular fa-paper-plane" /></button>
                        </div>
                    </div>
                </div>
                {/* Footer 2 End */}
                {/* Footer 3 Start */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-flex flex-column">
                            <img src="./images/Logo1.png" alt className="custom-footer3-img-144" />
                            <div className="d-flex flex-row m-auto">
                                <i className="fa-solid fa-map-pin fs-2 text-success" />
                                <div>
                                    <ul>
                                        <li> Home Solution Pvt. Ltd.</li>
                                        <li>SS Chowk Bhatapur</li>
                                        <li>+977 5551140,</li>
                                        <li>+977 9856473829</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="custom-footer3-div">
                                <ul>
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="custom-footer3-div">
                                <ul>
                                    <li>Doors</li>
                                    <li>Solar</li>
                                    <li>Chimney</li>
                                    <li>Parqueting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-12 text-followUs-191">
                                Follow us On <br />
                                <i className="fa-brands fa-facebook custom-followUs-icon" />
                                <i className="fa-brands fa-instagram custom-followUs-icon" />
                                <i className="fa-brands fa-youtube custom-followUs-icon" />
                                <i className="fa-brands fa-whatsapp custom-followUs-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-copyright-201">
                    @Copyright@2023. All Rights Reserved by Service eye
                </div>
                {/* Footer 3 End */}
            </div>


        </>
    )
}

export default Footer
