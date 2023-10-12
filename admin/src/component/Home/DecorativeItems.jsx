import React, { useEffect, useState } from 'react';
import './NewArivals.css';
import ProductCard from '../SmallComponent/ProductCard';
import axios from 'axios';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
const DecorativeItems = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState('');
    const visibleItems = 4;
    useEffect(() => {
        axios.get(`${API_URL}/product/getproduct`)
            .then(response => {
                setProduct(response.data.products);
                console.log(response.data.products)
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);
    return (
        <>
            <div className="container-fluid custom-margin">
                <div className="custom-text">
                    <h1>Decorative Items</h1>
                    {product.length > visibleItems && (
                        <div className="d-flex custom-seeMore">
                            <Link to="" className='custom-seeMore-size'>
                                See More
                            </Link>
                        </div>
                    )}
                </div>
                <div className="row-col-custom-margin">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ms-1">
                    {product && product?.slice(0, visibleItems).map((p, i) => (
                        <ProductCard key={i} p={p} />
                    ))}
                </div>
                </div>
            </div>
            {error && <p>Error: {error}</p>}
        </>
    )
}
export default DecorativeItems;