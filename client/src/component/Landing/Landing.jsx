import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
    return (

        <>
        <div className="custom-landingpage-container"> 
                <section className="landing-page " id="landing-page">
                    <div className="landing-page-text ">
                        <h1><span>Introducing the New</span><br />Furniture Series</h1>
                        <p><br /> Unmatched Performance in a <br />Sleek design</p>
                        <div className="grid-container">
                            <div><Link to="#"><img src="./images/couch.png" alt="..." className="grid-item" /></Link></div>
                            <div><Link to="#"><img src="./images/chair-removebg-preview.png" alt="..." className="grid-item" /></Link></div>
                            <div><Link to="#"><img src="./images/pngegg (3).png" alt="..." className="grid-item" /></Link></div>
                            <div><Link to="#"><img src="./images/pngegg (9).png" alt="..." className="grid-item" /></Link></div>
                        </div>
                        {/* Show More Button */}
                        <div className="bottom-button-container">
                            <div className="btn"><Link to="shop">Show More</Link></div>
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
