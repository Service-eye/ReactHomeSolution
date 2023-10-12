import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { API_URL } from "../config";
import { isAuthenticated } from "../auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Category = () => {
  const { token } = isAuthenticated();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}/category/getcategory`)
      .then((res) => {
        setCategories(res.data.categoryList);
      })
      .catch((err) => console.log(err));
  }, []);
  // Delete category (including subcategories):
  const deleteCategory = (id) => {
    const confirmed = window.confirm("Are you sure want to delete this category?");
    if (confirmed) {
      axios
        .delete(`${API_URL}/deletecategory/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success("Category deleted successfully.");
          const updatedCategories = categories.filter((c) => c._id !== id);
         setCategories(updatedCategories);
        })
        .catch((err) => {
          toast.error("Failed to delete.");
          toast.error(err.response.data.error);
        });
    }
  };
  return (
    <>
      <ToastContainer theme="colored" position="top-center" autoClose={1200} />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 shadow">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col" >Category</th>
                  <th scope="col" className="text-danger">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, i) => (
                  <React.Fragment key={i}>
                    <tr
                      key={i}
                      onClick={() => setSelectedCategory(category._id)}
                      style={{
                        backgroundColor: selectedCategory === category._id ? "red" : "blue",
                        color: "white",
                      }}
                    >
                      <td className="text-primary fw-bolder">
                        {category.name}{" "}
                        {category.children.length > 0 && (
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCategory(selectedCategory === category._id ? null : category._id);
                            }}
                          >
                            {selectedCategory === category._id ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        )}
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={() => deleteCategory(category._id)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                    {selectedCategory === category._id &&
                      category.children.map((subCategory, j) => (
                        <tr
                          key={j}
                          style={{ backgroundColor: "red", color: "white" }}
                        >
                          <td>
                            {subCategory.name}
                            </td>
                            <td>
                            <button
                              className=" me-2 btn btn-danger "
                              onClick={() => deleteCategory(subCategory._id)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                          <td></td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;