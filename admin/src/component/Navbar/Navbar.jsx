import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg  z-2 m-0 p-0" aria-label="Third navbar example">
                    <div className="container-fluid custom-hs-navbar ">
                        <Link to="/"><img src="/images/Logo1.png" alt="" className="logo-home mx-4 " /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse " id="navbarsExample03">
                            <ul className="navbar-nav ms-auto mb-2 mb-sm-0 mx-1">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/aboutus">About Us</Link>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown dropdown-toggle active text-white" to="/door" aria-expanded="false">
                                        Door </Link>
                                    <ul className="dropdown-menu subdropdown">
                                        <li><Link className="dropdown-item" to="/sofas">3D Doors</Link></li>
                                        <li><Link className="dropdown-item" to="#">3D Skin Doors</Link></li>
                                        <li><Link className="dropdown-item" to="#">Main Doors</Link></li>
                                        <li><Link className="dropdown-item" to="#">Laminated Doors</Link></li>
                                        <li><Link className="dropdown-item" to="#">2D Doors</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown dropdown-toggle active text-white" to="/furniture" aria-expanded="false">
                                        Furniture </Link>
                                    <ul className="dropdown-menu subdropdown">
                                        <li><Link className="dropdown-item" to="/sofas">Sofas</Link></li>
                                        <li><Link className="dropdown-item" to="/chairs">Chair</Link></li>
                                        <li><Link className="dropdown-item" to="#">Bed</Link></li>
                                        <li><Link className="dropdown-item" to="#">Dinging Table</Link></li>
                                        <li><Link className="dropdown-item" to="#">Wardrobe</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown dropdown-toggle active text-white" to="/door" aria-expanded="false">
                                        Solar </Link>
                                    <ul className="dropdown-menu subdropdown">
                                        <li><Link className="dropdown-item" to="/sofas">Link1</Link></li>
                                        <li><Link className="dropdown-item" to="/sofas">Link1</Link></li>
                                        <li><Link className="dropdown-item" to="/sofas">Link1</Link></li>
                                        <li><Link className="dropdown-item" to="/sofas">Link1</Link></li>
                                       
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/parqueting">Parqueting</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/parqueting">Chimney</Link>
                                </li>
                                <li className="nav-item">
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                                </li> */}
                               
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/blogs">Blogs</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>


            </div>
        </>
    );
};

export default Navbar;