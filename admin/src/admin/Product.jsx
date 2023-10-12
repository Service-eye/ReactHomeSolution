import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { isAuthenticated } from "../auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { API_URL, IMG_URL } from "../config";
const Product = () => {
  const { token } = isAuthenticated();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct=async()=>{
    await axios.get(`${API_URL}/product/getproduct`)
    .then((response) => {
        if (response.status === 200) {
            // Handle successful response
            console.log(response.data.products);
            setProduct(response.data.products)
        } else {
            // Handle error response
            console.error('Request failed with status:', response.status);
        }
    })
    .catch((error) => {
        // Handle network or other errors
        console.error('Request failed:', error);
    });
    }
    fetchProduct()
  }, []);
  console.log('this is products in admin: ', products)
  // delete category:
  const deleteProduct = (id) => {
    const confirmed = window.confirm(
      "Are you sure want to delete this product?"
    );
    if (confirmed) {
      axios
        .delete(`${API_URL}/deleteproduct/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success("Product deleted successfully.");
          setProduct(products.filter((p) => p._id !== id));
        })
        .catch((err) => {
          toast.error("Failed to delete.");
          toast.error(err.res.data.error);
        });
    }
  };
  return (
    <>
      <ToastContainer theme="colored" position="top-center" autoClose="1200" />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-11 shadow">
            <table className="table table-striped table-responsive table-bordered ">
              <thead>
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Product Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products && products.length>0 ?
                  products.map((p, i) => (
                    <tr key={i}>
                      <td>{p.name}</td>
                      <td>{p.price}</td>
                      <td>{p.quantity}</td>
                      <td>{p.description}</td>
                      <td>
                      {p.productPictures
                && p.productPictures
                    .slice(0,1)
                      .map((picture, index) => (
                        <img
                          key={index}
                          src={`${IMG_URL}/${picture.img}`}
                          alt={p.name}
                          width={100}
                          height={100}
                        />
                      ))}
                      </td>
                      <td>{p.category.name}</td>
                      <td>
                        <Link to={`/admin/updateproduct/${p._id}`} className="btn btn-success">
                          <FaEdit />
                        </Link>
                        <br />
                        <br />
                        <Link
                          className="btn btn-danger"
                          onClick={() => deleteProduct(p._id)}
                        >
                          <FaTrash />
                        </Link>
                      </td>
                    </tr>
                  )): null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;