import React from 'react';
import './ProductCard.css';
import { API_URL, IMG_URL } from '../../Config';
import {Link} from "react-router-dom"

const ProductChairCard = ({p}) => {
    console.log(p?.productPictures[0])
    
    

    return (
       
     
        
        <Link to={`/productdetails/${p?._id}`}>
            <div className="custom-chair-card-border custom-product-chair-card-box " >
                <img src={`${IMG_URL}/${p?.productPictures[0].img}`} className="card-img-top" alt="..." />
                <div className="chair-card-body chair-text-center">
                    <h5 className="chair-card-title custom-chair-title">{p?.name}</h5>
                    <p className="chair-card-text custom-chair-card-text text-danger my-4">NRP {p?.price}</p>
                </div>
                <div className="chair-hover-logo"><i className="fa-regular fa-heart" /></div>
            </div>
        </Link>
    );
}

export default ProductChairCard;
