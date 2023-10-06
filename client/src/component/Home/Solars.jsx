// Uses Same Css and NewArival.css
import React from 'react';
import './NewArivals.css';
import ProductCard from '../SmallComponent/ProductCard';

const Solar = () => {
    const productCards = Array(4).fill(null).map((_, index) => (
        <div key={index} className="col">
            <ProductCard />
        </div>
    ));

    return (
        <>
            <div className="containter-fluid  ">
                <div className="custom-text">
                    <h1>Parqueting</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ms-1">
                    {productCards}
                </div>
                <div className=" mt-1 d-flex custom-seeMore">
                    <h4>See More</h4>
                </div>
            </div>
        </>
    );
}

export default Solar;  