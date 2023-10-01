import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <>
            {/* Inspiration Collectiom */}
            <div className="insp-container">
                <div className="insp-textfield">
                    <h1>Inspiration Collection</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                </div>
                <div className="insp-image-container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col ">
                            <div className="card border-0 ">
                                <img
                                    src="./images/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering 2.png"
                                    className="card-img-insp-top"
                                    id="card-image-left"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card border-0">
                                <img
                                    src="./images/scandinavian-interior-mockup-wall-decal-background 2.png"
                                    className="card-img-insp-top"
                                    id="card-image-mid"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card border-0">
                                <img
                                    src="./images/light-lamp-white-wall-1 1.png"
                                    className="card-img-insp-top"
                                    id="card-image-right"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Us */}
            <div class="why-us-container">
                <div class="why-us-textfield">
                    <h1>Why Choose Us</h1>
                </div>
                <div class="icon-sets ">
                    <section class="section1">
                        <div class="row">
                            <div class="col-4">
                                <div class="parent">
                                    <div id="left">
                                        <i class="fa-solid fa-truck-fast" id="rowIcon"></i>
                                    </div>

                                    <div id="right">
                                        <div id="object2">
                                            <h4>Free Delivary</h4>
                                        </div>
                                        <div id="object3">
                                            <h5>Lorem ipsum dolor sit amet.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="parent">
                                    <div id="left">
                                        <i class="fa-solid fa-clock-rotate-left" id="rowIcon"></i>
                                    </div>

                                    <div id="right">
                                        <div id="object2">
                                            <h4>Support 24/7</h4>
                                        </div>
                                        <div id="object3">
                                            <h5>Lorem ipsum dolor sit amet.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="parent">
                                    <div id="left">
                                        <i class="fa-solid fa-shield-halved" id="rowIcon"></i>
                                    </div>

                                    <div id="right">
                                        <div id="object2">
                                            <h4>100% Authentic</h4>
                                        </div>
                                        <div id="object3">
                                            <h5>Lorem ipsum dolor sit amet.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="parent">
                                    <div id="left">
                                        <i
                                            class="fa-solid fa-person-walking-arrow-loop-left"
                                            id="rowIcon"
                                        ></i>
                                    </div>

                                    <div id="right">
                                        <div id="object2">
                                            <h4>Hassle Free Return</h4>
                                        </div>
                                        <div id="object3">
                                            <h5>Lorem ipsum dolor sit amet.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="parent">
                                    <div id="left">
                                        <i class="fa-solid fa-basket-shopping" id="rowIcon"></i>
                                    </div>

                                    <div id="right">
                                        <div id="object2">
                                            <h4>100% Authentic</h4>
                                        </div>
                                        <div id="object3">
                                            <h5>Lorem ipsum dolor sit amet.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* Beautify-container */}
            <div className="beautify-container">
                <div className="cards-container">
                    <div className="w3r-circle" />
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col ">
                            <div className="card-img-beauty-top" id="card-left">
                                <div className="beautify-textfie">
                                    <h1>Beautify You Space</h1>
                                    <h5>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Delectus inventore qui cumque obcaecati officia error eius
                                        ea accusamus, blanditiis doloribus saepe exercitationem.
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm rounded-pill text-uppercase "
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card border-0 ">
                                <img
                                    src="./images/image 87.png"
                                    className="card-img-beauty-top"
                                    id="card-right"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About us Blogs */}
            <div class="about-us-blogs-container">
                <div class="about-us-blogs-textfield">
                    <h1>Blogs</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
                </div>
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="about-us-blogs-card h-100">
                                <div class="about-us-blogs-image">
                                    <img src="./images/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application 1.png"
                                        class="about-us-blogs-card-img-top" alt="..." />
                                    <div class="blog-numbering">
                                        <div class="white-circle">
                                            <div class="black-circle">
                                                <div class="numbering">
                                                    <h1>1.</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="about-us-blogs-card-body">
                                    <h5 class="about-us-blogs-card-title">
                                        Purchase Securely
                                    </h5>
                                    <p class="about-us-blogs-card-text text-truncate">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="about-us-blogs-card h-100">
                                <div class="about-us-blogs-image">
                                    <img src="./images/image 87.png"
                                        class="about-us-blogs-card-img-top" alt="..." />
                                    <div class="blog-numbering">
                                        <div class="white-circle">
                                            <div class="black-circle">
                                                <div class="numbering">
                                                    <h1>2.</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="about-us-blogs-card-body">
                                    <h5 class="about-us-blogs-card-title">
                                        Ships From Warehouse
                                    </h5>
                                    <p class="about-us-blogs-card-text text-truncate">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="about-us-blogs-card h-100">
                                <div class="about-us-blogs-image">
                                    <img src="./images/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering 1.png"
                                        class="about-us-blogs-card-img-top" alt="..." />
                                    <div class="blog-numbering">
                                        <div class="white-circle">
                                            <div class="black-circle">
                                                <div class="numbering">
                                                    <h1>3.</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="about-us-blogs-card-body">
                                    <h5 class="about-us-blogs-card-title">
                                        Style Your Room
                                    </h5>
                                    <p class="about-us-blogs-card-text text-truncate">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutUs;
