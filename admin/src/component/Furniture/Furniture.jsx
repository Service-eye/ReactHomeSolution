import React, { useEffect, useState } from 'react';
import './Furniture.css';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import axios from 'axios';
import FurnitureCard from '../SmallComponent/FurnitureCard';
const Furniture = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState('');
    const visibleItems = 4;
    useEffect(() => {
        axios.get(`${API_URL}/product/getproduct`)
            .then(response => {
                setProduct(response.data.products);
                console.log(response.data.products);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);
    return (
        <>
            <div className="mt-5 container">
                <div className="border-furniture-container">
                    <div className="mt-1 category-collection d-flex justify-content-evenly">
                        <div className="category-item">
                            <Link className='category-image-link' to='/sofas'>
                                <div className="category-image">
                                    <img src="./images/pngtree-brown-queen-bed-wooden-bed-boutique-furniture-bed-cartoon-illustration-png-image_415074 1.png" alt="" />
                                </div>
                                <div className="category-image-name">
                                    <h5>BED</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="category-item">
                            <Link className='category-image-link' to='/sofas'>
                                <div className="category-image">
                                    <img src="./images/download 2.png" alt="" />
                                </div>
                                <div className="category-image-name">
                                    <h5>SOFA</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="category-item">
                            <Link className='category-image-link' to='/sofas'>
                                <div className="category-image">
                                    <img src="./images/download 1.png" alt="" />
                                </div>
                                <div className="category-image-name">
                                    <h5>CHAIR</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="category-item">
                            <Link className='category-image-link' to='/sofas'>
                                <div className="category-image">
                                    <img src="/images/images 1.png" alt="" />
                                </div>
                                <div className="category-image-name">
                                    <h5>WARDROVE</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="category-item">
                            <Link className='category-image-link' to='/sofas'>
                                <div className="category-image">
                                    <img src="/images/table-dining-room-nightstand-clip-art-dining-table-png-picture 1.png" alt="" />
                                </div>
                                <div className="category-image-name">
                                    <h5>DINING TABLE</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid custom-margin">
                    <div className="custom-text">
                        <h1>Furniture</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ms-1">
                        {product && product?.map((p, i) => (
                            <FurnitureCard key={i} p={p} />
                        ))}
                    </div>
                    </div>
                {error && <p>Error: {error}</p>}
            </div>
        </>
    );
};
export default Furniture;