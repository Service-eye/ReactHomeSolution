import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth';
const AdminSidebar = () => {
    const navigate = useNavigate();
    const { user } = isAuthenticated();
    const [offcanvasVisible, setOffcanvasVisible] = useState(false);
    // Function to toggle the offcanvas visibility
    const toggleOffcanvas = () => {
        setOffcanvasVisible(!offcanvasVisible);
    };
    // Function to close the offcanvas
    const closeOffcanvas = () => {
        setOffcanvasVisible(false);
    };
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-end">
                    <div className="col-md-1 mt-3">
                        <Link
                            className="btn btn-success "
                            onClick={toggleOffcanvas}
                        >
                            Menu
                        </Link>
                        <div
                            className={`offcanvas offcanvas-end bg-dark text-white ${offcanvasVisible ? 'show' : ''}`}
                            tabIndex="-1"
                            id="offcanvasRight"
                        >
                            <div className="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Admin Dashboard</h5>
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    onClick={closeOffcanvas}
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link
                                            to="dashboard"
                                            className="text-decoration-none text-white"
                                            onClick={closeOffcanvas} // Close the offcanvas on click
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/products"
                                            className="text-decoration-none text-white"
                                            onClick={closeOffcanvas} // Close the offcanvas on click
                                        >
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/category"
                                            className="text-decoration-none text-white"
                                            onClick={closeOffcanvas} // Close the offcanvas on click
                                        >
                                            Category
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/blogs"
                                            className="text-decoration-none text-white"
                                            onClick={closeOffcanvas} // Close the offcanvas on click
                                        >
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/users"
                                            className="text-decoration-none text-white"
                                            onClick={closeOffcanvas} // Close the offcanvas on click
                                        >
                                            Users
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/addproduct"
                                            className="text-decoration-none text-white"
                                            onClick={closeOffcanvas} // Close the offcanvas on click
                                        >
                                            Add Product
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/addcategory"
                                            className="text-decoration-none text-white"
                                            onClick={closeOffcanvas} // Close the offcanvas on click
                                        >
                                            Add Category
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/addblog"
                                            className="text-decoration-none text-white"
                                            onClick={closeOffcanvas} // Close the offcanvas on click
                                        >
                                            Add Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="list-unstyled">
                                    <li><Link to="#" className="text-decoration-none text-white">
                                        <b>Name : </b> {user.name}
                                    </Link></li>
                                    <li><Link to="#" className="text-decoration-none text-white">
                                        <b>Email : </b> {user.email}
                                    </Link></li>
                                </ul>
                                <Link to="/signin" className="btn btn-danger " onClick={() => signout(() => {
                                    
                                    navigate('/signin')
                                })}>Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AdminSidebar;