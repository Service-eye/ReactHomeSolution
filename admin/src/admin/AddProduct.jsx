import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../config'
import { isAuthenticated } from '../auth'
import { ToastContainer, toast } from 'react-toastify'
const AddProduct = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [productPictures, setProductPictures] = useState([]);
    const [categoryList, setCategoryList] = useState([]); // Changed to categoryList
    const [products, setProducts] = useState([]);
    const {token}=isAuthenticated()
    // Fetch products and categories when the component mounts
    useEffect(() => {
        const fetchProductsAndCategories = async () => {
            try {
                const categoryResponse = await axios.get(
                    `${API_URL}/category/getcategory`
                );
                setCategoryList(categoryResponse.data.categoryList); // Set categoryList
                const productResponse = await axios.get(
                    `${API_URL}/product/getproduct`
                );
                setProducts(productResponse.data.products);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchProductsAndCategories();
    }, []);
    // Function to handle adding a product
    const addProduct = async (formData) => {
        try {
            const response = await axios.post(`${API_URL}/product/create`, formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                    authorization: `Bearer ${token}`, // Include the token in the headers
                },
            });
            if (response.status === 201) {
                setName('');
                setQuantity('');
                setPrice('');
                setDescription('');
                setCategoryId('');
                setProductPictures([]);
                toast.success('Product Added successfully.');
            } else {
                console.log('Failed to add product:', response.data.message);
                toast.error(response.data.message); // Display the actual error message
            }
        } catch (error) {
            console.log( 'error part: ', error);
            toast.error(' error part:' ,error.message);
        }
    };
    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options);
            }
        }
        return options;
    };
    const handleProductPictures = (e) => {
        setProductPictures([...productPictures, e.target.files[0]]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("quantity", quantity);
          formData.append("price", price);
          formData.append("description", description);
          formData.append("category", categoryId);
        //   for (let pic of productPictures) {
        //     console.log(`this is pic of productPictures: ${pic}`);
        //     formData.append("productPicture", pic);
        //   }
        for (let pic of productPictures) {
            formData.append("productPictures", pic);
        }
          // Call addProduct function to add the product
          await addProduct(formData);
        } catch (error) {
          console.log('error on submit: ',error);
        }
      };
    return (
        <>
            <ToastContainer theme='colored' position='top-center' autoClose={1000} />
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <form className="shadow p-3">
                            <h3 className="text-center text-muted ">Add Product</h3>
                            <div className="mb-2">
                                <label htmlFor="pname">Product Name</label>
                                <input type="text"
                                    name="pname"
                                    id="pname"
                                    className="form-control"
                                    onChange={e => setName(e.target.value)}
                                    value={name} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="price">Product Price</label>
                                <input type="number"
                                    name="price"
                                    id="price"
                                    className="form-control"
                                    onChange={e => setPrice(e.target.value)}
                                    value={price} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="qty"> Quantity</label>
                                <input type="number"
                                    name="qty"
                                    id="qty"
                                    className="form-control"
                                    onChange={e => setQuantity(e.target.value)}
                                    value={quantity} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor='desc' >Product Description</label>
                                <textarea name="desc" id="desc" cols="30" rows="10" className='form-control' onChange={e => setDescription(e.target.value)} value={description}>
                                </textarea>
                            </div>
                            <div className="mb-2">
                                {productPictures.length > 0
                                    ? productPictures.map((pic, index) => (
                                        <div key={index}>{JSON.stringify(pic.name)}</div>
                                    ))
                                    : null}
                                <input
                                    type="file"
                                    name="productPicture"
                                    id="productPicture"
                                    className="form-control"
                                    onChange={handleProductPictures}
                                />
                            </div>
                            <div className="mb-2">
                                <select
                                    name="parentCategoryId"
                                    id="parentCategoryId"
                                    className="form-control"
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    {createCategoryList(categoryList).map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-2">
                                <button className="btn btn-primary px-4 py-2"
                                    onClick={handleSubmit}>
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddProduct