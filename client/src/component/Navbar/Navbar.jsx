import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-custom">
                <div className="topheader">
                    <Link to="#home"><img src="./images/Logo1.png" alt="" className="logo-home" /></Link>
                    <div>
                        <Link to="#" id=""><i className="fa-sharp fa-solid fa-magnifying-glass" style={{ color: '#c5aaaa' }}></i></Link>
                        <button className="languagebtn"><Link to="#">English <i className="fa-sharp fa-solid fa-caret-down ms-1"
                            style={{ color: '#c5aaaa' }}></i></Link></button>
                    </div>
                </div>
                <div className="header ">
                    <Link to="/" className="brandName">Home Solution</Link>
                    <i className="fa-solid fa-bars" style={{ color: '#c5aaaa' }} id="menu-icon"></i>
                    <div className="navbarflex">
                        <ul className="navbar">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <div className="dropdown">
                                <li className="dropbtn"><Link to="#Doors">Doors</Link> </li>
                                <div className="dropdown-content">
                                    <li><Link className="dropdown-item" to="#">3D Doors</Link></li>
                                    <li><Link className="dropdown-item" to="#">3D Skin Doors</Link></li>
                                    <li><Link className="dropdown-item" to="#">Main Doors</Link></li>
                                    <li><Link className="dropdown-item" to="#">Laminated Doors</Link></li>
                                    <li><Link className="dropdown-item" to="#">2D Doors</Link></li>

                                </div>
                            </div>
                            <div className="dropdown">
                                <li className="dropbtn"><Link to="#Doors">Furniture</Link> </li>
                                <div className="dropdown-content">
                                    <li><Link className="dropdown-item" to="/sofas">Sofa</Link></li>
                                    <li><Link className="dropdown-item" to="/chairs">Chair</Link></li>
                                    <li><Link className="dropdown-item" to="#">Bed</Link></li>
                                    <li><Link className="dropdown-item" to="#">Dinning Table</Link></li>
                                </div>
                            </div>
                            <div className="dropdown">
                                <li className="dropbtn"><Link to="#Doors">Solar</Link> </li>
                                <div className="dropdown-content">
                                    <li><Link className="dropdown-item" to="#">Link1</Link></li>
                                    <li><Link className="dropdown-item" to="#">Link2</Link></li>
                                    <li><Link className="dropdown-item" to="#">Ling3</Link></li>
                                    <li><Link className="dropdown-item" to="#">Link4</Link></li>
                                </div>
                            </div>


                            <li><Link to="#Chimney">Chimney</Link></li>
                            <li><Link to="#Parqueting">Parqueting</Link></li>
                            <li><Link to="#Descorativeitems">Descorative Items</Link></li>
                            <li><Link to="/blogs">Blog</Link></li>


                        </ul>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Navbar
