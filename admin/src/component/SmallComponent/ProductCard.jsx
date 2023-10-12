import React from 'react';
import './ProductCard.css';
import { API_URL, IMG_URL } from '../../config';
import {Link} from "react-router-dom"
const ProductCard = ({p}) => {
    console.log(p?.productPictures[0])
    return (
        <Link to={`/productdetails/${p?._id}` } className='custom-card'>
            <div className="custom-border custom-product-card-box " >
                <img src={`${IMG_URL}/${p?.productPictures[0].img}`} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title custom-title">{p?.name}</h5>
                    <p className="card-text custom-card-text text-danger my-4">NRP {p?.price}</p>
                </div>
                <div className="hover-logo"><i className="fa-regular fa-heart" /></div>
            </div>
        </Link>
    );
}
export default ProductCard;