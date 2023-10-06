import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
    return (
        <>
            <div >
                <div className="custom-border custom-product-card-box">
                    <img src="./images/FurnitureHubProject/new arrivals/product-2.png" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title custom-title">Epson E8-E01 XGA 3LCD
                            Projector</h5>
                        <p className="card-text custom-card-text text-danger my-4">NRP 64,000.00</p>
                    </div>
                    <div className="hover-logo"><i className="fa-regular fa-heart" /></div>
                </div>
            </div>

        </>
    )
}

export default ProductCard
