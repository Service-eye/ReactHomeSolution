import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { Link, useParams } from 'react-router-dom'
import { API_URL, IMG_URL } from '../../config'

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
    const params = useParams()
    console.log(params.id)
    const [products, setProducts] = useState({})
    useEffect(() => {
       const get=async()=>{

       await fetch(`${API_URL}/productdetails/${params.id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
        }
        get()




    }, [])
    return (
        <>
            <div className="row p-4 mx-2">
                <div className="col-lg-7">
                    <div className="custom-productDetail-img">
                        

                       {
                        products && products?.productPictures ?
                        <img src={`${IMG_URL}/${products?.productPictures[0]?.img}`}  id="ProductImg" />:
                        null
                        
                       } 
                    </div>
                    <div className="small-img-row">
                    { products && products?.productPictures ?
                      products?.productPictures
                      .map((picture, index) => {
                        return <>
                        <img
                          key={picture._id}
                          src={`http://localhost:2000/public/${picture.img}`}
                          alt={`Product Image ${index }`}
                          width={100}
                          height={100}
                          className="small-img" 
                        />
                        
                        </>

                        
}): null}
                   
                    </div>
                </div>
                <div className="col-lg-5">
                    <h2 className="custom-text-38">{products?.name}</h2>
                    <h4 className="custom-text-39">NRS {products?.price}</h4>
                    <p className="custom-product-information">
                        {products?.description}
                    </p>
                    <p className="custom-product-information">Quantity: {products?.quantity}</p>
                    {
                        products && products?.category ? 
                        <>
                   <Link to={`/${products?.category?._id}`}><p className="custom-category-information">Category: {products?.category?.name}</p> </Link> 

                        </> :
                        null
                    }
                    <div className="custom-category-information">
                        <span>tag: </span><span>sofa </span><span>clean</span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProductDetail
