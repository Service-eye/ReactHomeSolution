import React from 'react'
import './ProductDetail.css'

// var ProductImg = document.getElementById("ProductImg");
// var smallImg = document.getElementsByClassName("small-img");
// smallImg[0].onclick = function () {
//   ProductImg.src = smallImg[0].src;
// };
// smallImg[1].onclick = function () {
//   ProductImg.src = smallImg[1].src;
// };
// smallImg[2].onclick = function () {
//   ProductImg.src = smallImg[2].src;
// };
// smallImg[3].onclick = function () {
//   ProductImg.src = smallImg[3].src;
// };

const ProductDetail = () => {
    return (
        <>
            <div className="row p-4 mx-2">
                <div className="col-lg-7">
                    <div className="custom-productDetail-img">
                        <img src="./images/chair-removebg-preview.png" id="ProductImg" />
                    </div>
                    <div className="small-img-row">
                        <div className="small-img-col">
                            <img src="./images/FurnitureHubProject/New folder/pngegg (1).png" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src="./images/FurnitureHubProject/New folder/pngegg (2).png" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src="./images/FurnitureHubProject/New folder/pngegg (3).png" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src="./images/FurnitureHubProject/New folder/pngegg (4).png" className="small-img" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <h2 className="custom-text-38">Sofa code 234</h2>
                    <h4 className="custom-text-39">$50.00</h4>
                    <p className="custom-product-information">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo
                        nam magnam rerum sunt explicabo! Distinctio ipsam doloremque nostrum
                        ipsum?
                    </p>
                    <p className="custom-product-information">Sku: 02</p>
                    <p className="custom-category-information">Category: sofa</p>
                    <div className="custom-category-information">
                        <span>tag: </span><span>sofa </span><span>clean</span>
                    </div>
                    <div className="custom-description">
                        <p>Description</p>
                    </div>
                    <p className="custom-category-information">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo
                        nam magnam rerum sunt explicabo! Distinctio ipsam doloremque nostrum
                        ipsum?
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
