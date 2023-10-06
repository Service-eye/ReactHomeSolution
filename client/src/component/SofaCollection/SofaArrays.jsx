import React from 'react';
import "./SofaArrays.css";
import ProductItemCard from '../SmallComponent/ProductItemCard';

const SofaArrays = () => {
    // Create an array to store repeated components
    const ProductCardComponents = Array.from({ length: 20 }, (_, index) => (
        <ProductItemCard key={index} />
    ));

    return (
        <div className="sofa-card-container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {ProductCardComponents}
            </div>
        </div>
    );
}

export default SofaArrays;
