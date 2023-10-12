import React from 'react'
import "./ChairArrays.css"
import ProductChairCard from '../SmallComponent/ProductChairCard';
const ChairArrays = () => {
    const ChairProductChairCard = Array.from({ length: 20 }, (_, index) => (
        <ProductChairCard key={index} />
    ));
    return (
        <>
        <div className="container-fluid">
        </div>
            <div className="chair-card-container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {ChairProductChairCard}
                </div>
            </div>
        </>
    )
}
export default ChairArrays