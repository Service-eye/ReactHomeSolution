import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <>
            <div className="carousel-container-custom">
                <div className="carousel">
                    <ul className="slides">
                        <input type="radio" name="radio-buttons" id="img-1" defaultChecked />
                        <li className="slide-container">
                            <div className="slide-image">
                                <img src="./images/unsplash_nWidMEQsnAQ.png" />
                            </div>
                            <div className="carousel-controls">
                                <label htmlFor="img-3" className="cara-prev-slide">
                                    <span>‹</span>
                                </label>
                                <label htmlFor="img-2" className="cara-next-slide">
                                    <span>›</span>
                                </label>
                            </div>
                        </li>
                        <input type="radio" name="radio-buttons" id="img-2" />
                        <li className="slide-container">
                            <div className="slide-image">
                                <img src="./images/unsplash_nWidMEQsnAQ.png" />
                            </div>
                            <div className="carousel-controls">
                                <label htmlFor="img-1" className="prev-slide">
                                    <span>‹</span>
                                </label>
                                <label htmlFor="img-3" className="next-slide">
                                    <span>›</span>
                                </label>
                            </div>
                        </li>
                        <input type="radio" name="radio-buttons" id="img-3" />
                        <li className="slide-container">
                            <div className="slide-image">
                                <img src="./images/unsplash_nWidMEQsnAQ.png" />
                            </div>
                            <div className="carousel-controls">
                                <label htmlFor="img-2" className="prev-slide">
                                    <span>‹</span>
                                </label>
                                <label htmlFor="img-1" className="next-slide">
                                    <span>›</span>
                                </label>
                            </div>
                        </li>
                        <div className="carousel-dots">
                            <label htmlFor="img-1" className="carousel-dot" id="img-dot-1" />
                            <label htmlFor="img-2" className="carousel-dot" id="img-dot-2" />
                            <label htmlFor="img-3" className="carousel-dot" id="img-dot-3" />
                        </div>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Carousel
