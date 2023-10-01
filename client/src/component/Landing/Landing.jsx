import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
    return (

        <>
        <div className="custom-landingpage"> 
                <section className="home " id="home">
                    <div className="home-text ">
                        <h1><span>Introducing the New</span><br />Furniture Series</h1>
                        <p><br /> Unmatched Performance in a <br />Sleek design</p>
                        <div className="grid-container">
                            <div><a href="#"><img src="./images/couch.png" alt="..." className="grid-item" /></a></div>
                            <div><a href="#"><img src="./images/chair-removebg-preview.png" alt="..." className="grid-item" /></a></div>
                            <div><a href="#"><img src="./images/pngegg (3).png" alt="..." className="grid-item" /></a></div>
                            <div><a href="#"><img src="./images/pngegg (9).png" alt="..." className="grid-item" /></a></div>
                        </div>
                        {/* Show More Button */}
                        <div className="bottom-button-container">
                            <div className="btn"><a href="shop">Show More</a></div>
                        </div>
                        {/* Show More End */}
                    </div>
                    <div className="carasoul">
                        <img src="./images/chair-removebg-preview.png" alt className="carasoul" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </section>
                {/* Home End */}
                {/* About US */}
                <section className="home " id="home">
                    <div className="home-text ">
                        <h1><span>Introducing the New</span><br />Furniture Series</h1>
                        <p><br /> Unmatched Performance in a <br />Sleek design</p>
                        <div className="grid-container">
                            <div><a href="#"><img src="./images/couch.png" alt="..." className="grid-item" /></a></div>
                            <div><a href="#"><img src="./images/chair-removebg-preview.png" alt="..." className="grid-item" /></a></div>
                            <div><a href="#"><img src="./images/pngegg (3).png" alt="..." className="grid-item" /></a></div>
                            <div><a href="#"><img src="./images/pngegg (9).png" alt="..." className="grid-item" /></a></div>
                        </div>
                        {/* Show More Button */}
                        <div className="bottom-button-container">
                            <div className="btn"><a href="shop">Show More</a></div>
                        </div>
                        {/* Show More End */}
                    </div>
                    <div className="carasoul">
                        <img src="./images/chair-removebg-preview.png" alt className="carasoul" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </section>
                </div>

        </>
    );
};

export default Landing;
