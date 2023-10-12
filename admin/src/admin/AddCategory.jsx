import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../auth';
import { addcategory } from './apiIndex';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import slugify from 'slugify';
import axios from 'axios';
import { API_URL } from '../config';
const AddCategory = () => {
  const [name, setName] = useState('');
  const [parentId, setParentId] = useState('');
  const [categories, setCategories] = useState([]);
  // destructure token from the localStorage.
  const { token } = isAuthenticated();
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await axios.get(`${API_URL}/category/getcategory`)
        // console.log('res.data is: ',res.data.categoryList)
        setCategories(res.data.categoryList)
      }
      catch(error){
        console.log('error on fetching data: ', error)
        toast.error('error on fetching data', error)
      }
    }
    fetchData()
  },[])
// console.log('categories: ' ,categories)
  const handleChange = (e) => {
    setName(e.target.value.toLowerCase());
  };
  const handleParentChange = (e) => {
    setParentId(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof name !== 'string' || name.trim() === '') {
      toast.error('Category name should be a non-empty string');
      return;
    }
    // Create a slug from the category_name
    const slug = slugify(name, { lower: true });
    // Determine if the selected parent is null (indicating a parent category)
    // or if a parent category is selected (indicating a subcategory)
    const isParentCategory = !parentId;
    // Make request to add category with the slug and parentId
    addcategory(token, { name: name, slug, parentId })
      .then((data) => {
        if (data.error) {
          toast.error('Error on adding new category');
        } else {
          toast.success(`New ${isParentCategory ? 'Parent' : 'Sub'} Category Added successfully.`);
          setName('');
          setParentId('');
        }
      });
  };
  return (
    <>
      <ToastContainer theme="colored" position="top-center" autoClose="1200" />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form className="shadow p-3">
              <h3 className="text-center text-muted">Add Category</h3>
              <div className="mb-2">
                <label htmlFor="category">Category Name</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={handleChange}
                  value={name}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="parentCategory">Parent Category</label>
                <select
                  name="parentCategory"
                  id="parentCategory"
                  className="form-control"
                  onChange={handleParentChange}
                  value={parentId}
                >
                  <option value="">Select a parent category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <button
                  className="btn btn-primary px-4 py-2"
                  onClick={handleSubmit}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCategory;