import React from 'react';
import './FurnitureCard.css';
import { IMG_URL } from '../../Config';
import {Link} from "react-router-dom"

const FurnitureCard = ({p}) => {
    console.log(p?.productPictures[0])
    
    

    return (
       
        <Link to={`/productdetails/${p?._id}` } className='custom-furniture-card'>
            <div className="custom-furniture-border custom-Furniture-card-box " >
                <img src={`${IMG_URL}/${p?.productPictures[0].img}`} className="card-img-top" alt="..." />
                <div className="furniture-card-body">
                    <h5 className="furniturecard-title custom-furniture-title">{p?.name}</h5>
                    <p className="card-text custom-furniture-card-text text-danger my-4">NRP {p?.price}</p>
                </div>
                <div className="furniture-hover-logo"><i className="fa-regular fa-heart" /></div>
            </div>
        </Link>
    );
}

export default FurnitureCard;