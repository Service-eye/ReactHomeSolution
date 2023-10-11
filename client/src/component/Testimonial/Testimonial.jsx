import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
    return (
        <>
            <div className="container-fluid custom-testimonial">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="custom-testimonial-content">
                            <h1>Testimonial</h1>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum consequatur dolorum
                                ipsam iusto vel.!"</p>
                            <h3>Suman Shahi</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="custom-img-div">
                            <img src="/images/image 98.png" alt className="image5" />
                            <div className="custom-img-arrow">
                                <i className="fa-solid fa-arrow-left fs-4" />
                                <i className="fa-solid fa-arrow-right fs-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial
