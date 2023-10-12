import React from 'react'
import { Link } from 'react-router-dom'

import "./ProductItemCard.css"


const ProductItemCard = () => {
    return (
        <>
            <div className="col ">
                <div className="sofa-card-container-custom">
                    <div className="sofa-card-custom h-100 ">
                        <Link to="/productdetails" className='sofa-card-custom-link'>
                            <div className="card-body">
                                <div className="sofa-custom-card-overflow">
                                    <img src="/images/sofawithoutbg/ae-319-1r-removebg-preview.png" className="sofa-card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="sofa-card-title">Epson E8-E01 XGA 3LCD Projector</h5>
                                <p className="sofa-card-price ">NRP 64,000.00</p>
                            </div>
                            
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductItemCard
