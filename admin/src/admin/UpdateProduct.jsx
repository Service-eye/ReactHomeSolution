import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';
import { isAuthenticated } from '../auth';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import './style.css'
const UpdateProduct = () => {
  const params = useParams();
  const id = params.productId;
  const [categories, setCategory] = useState([]);
  const [initialValues, setInitialValues] = useState({});
  const { token } = isAuthenticated();
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  // const [productPictures, setProductPictures] = useState([]);
  const [productPictures, setProductPictures] = useState([]);
  const [categoryId, setCategoryId] = useState('')
  const [categoryList, setCategoryList] = useState([]); // Changed to categoryList
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(`${API_URL}/category/getcategory`);
        setCategory(categoryResponse.data.categoryList);
        setCategoryList(categoryResponse.data.categoryList); // Set categoryList here
        const productResponse = await axios.get(`${API_URL}/productdetails/${id}`);
        const productData = productResponse.data;
        setInitialValues(productData);
        setName(productData.name);
        setPrice(productData.price);
        setQuantity(productData.quantity);
        setDescription(productData.description);
        setCategoryId(productData.categoryList);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);
  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name, isMainCategory: true }); // Set isMainCategory to true for main categories
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
        options.push(...category.children.map((child) => ({ value: child._id, name: child.name, isMainCategory: false }))); // Set isMainCategory to false for subcategories
      }
    }
    return options;
  };
  const handleProductPictures = (e) => {
    // Create an array of files from the FileList object
    const selectedFiles = Array.from(e.target.files);
    setProductPictures(selectedFiles);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('description', description);
    formData.append('category', categoryId);
    // Append each selected file to the FormData
    for (let i = 0; i < productPictures.length; i++) {
      formData.append('productPictures', productPictures[i]);
    }
    try {
      const response = await axios.put(`${API_URL}/updateproduct/${id}`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          authorization: `Bearer ${token}`,
        },
      });
      toast.success('Product updated successfully.');
      navigate('/admin/products');
    } catch (err) {
      toast.error('Error updating product. Please try again.');
      console.log('Error on updating product:', err);
    }
  };
  // 6522635de16959690b8b7ea4
  // 6522633ae16959690b8b7e9c
  return (
    <>
      <ToastContainer theme="colored" position="top-center" autoClose={1000} />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form className="shadow p-3">
              <h3 className="text-center text-muted">Update Product</h3>
              <div className="mb-2">
                <label htmlFor="pname">Product Name</label>
                <input
                  type="text"
                  name="pname"
                  id="pname"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="qty">Quantity</label>
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="desc">Product Description</label>
                <textarea
                  name="desc"
                  id="desc"
                  cols="30"
                  rows="10"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="image">Images</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  accept="image/*"
                  multiple // Allow multiple file selection
                  onChange={handleProductPictures} // Use the updated function
                />
              </div>
              <div className="mb-2">
                <label htmlFor="category">Category</label>
                <select
                  name="parentCategoryId"
                  id="parentCategoryId"
                  className="form-control"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {createCategoryList(categoryList).map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className={
                        option.isMainCategory ? 'red-category' : 'blue-category'
                      } // Apply CSS classes conditionally
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <button
                  className="btn btn-primary px-4 py-2"
                  onClick={handleSubmit}
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateProduct;