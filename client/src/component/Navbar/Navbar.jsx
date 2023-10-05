// import React from 'react'
// import $ from 'jquery'
// import "./Navbar.css"
// import { Link } from 'react-router-dom'

// // // search-box open close js code
// // let navbar = document.querySelector(".navbar");
// // let searchBox = document.querySelector(".search-box .bx-search");
// // // let searchBoxCancel = document.querySelector(".search-box .bx-x");
// // searchBox.addEventListener("click", ()=>{
// //   navbar.classList.toggle("showInput");
// //   if(navbar.classList.contains("showInput")){
// //     searchBox.classList.replace("bx-search" ,"bx-x");
// //   }else {
// //     searchBox.classList.replace("bx-x" ,"bx-search");
// //   }
// // });
// // // sidebar open close js code
// // let navLinks = document.querySelector(".nav-links");
// // let menuOpenBtn = document.querySelector(".navbar .bx-menu");
// // let menuCloseBtn = document.querySelector(".nav-links .bx-x");
// // menuOpenBtn.onclick = function() {
// // navLinks.style.left = "0";
// // }
// // menuCloseBtn.onclick = function() {
// // navLinks.style.left = "-100%";
// // }
// // // sidebar submenu open close js code
// // let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// // htmlcssArrow.onclick = function() {
// //  navLinks.classList.toggle("show1");
// // }
// // let moreArrow = document.querySelector(".more-arrow");
// // moreArrow.onclick = function() {
// //  navLinks.classList.toggle("show2");
// // }
// // let jsArrow = document.querySelector(".js-arrow");
// // jsArrow.onclick = function() {
// //  navLinks.classList.toggle("show3");
// // } 

// const Navbar = () => {
//     return (
//         <>
//             <nav>
//                 <div className="navbar">
//                     <i className="bx bx-menu" />
//                     <div className="logo"><Link to="/"><img src="./images/Logo1.png" alt="" className="logo-home" /></Link></div>
//                     <div className="nav-links">
//                         <div className="sidebar-logo">
//                             <span className="logo-name">Home Solution</span>
//                             <i className="bx bx-x" />
//                         </div>
//                         <ul className="links">
//                             <li><Link to="/">HOME</Link></li>
//                             <li><Link to="/aboutus">About Us</Link></li>
//                             <li>
//                                 <Link to="#">Doors</Link>
//                                 <i className="bx bxs-chevron-down htmlcss-arrow arrow  " />
//                                 <ul className="htmlCss-sub-menu sub-menu">
//                                     <li><Link to="#">3D Doors</Link></li>
//                                     <li><Link to="#">3D Skin Doors</Link></li>
//                                     <li><Link to="#">Main Doors</Link></li>
//                                     <li><Link to="#">Laminated Doors</Link></li>
//                                     <li><Link to="#">2D Doors</Link></li>
//                                     <li className="more">
//                                         <span><Link to="#">More</Link>
//                                             <i className="bx bxs-chevron-right arrow more-arrow" />
//                                         </span>
//                                         <ul className="more-sub-menu sub-menu">
//                                             <li><Link to="#">Neumorphism</Link></li>
//                                             <li><Link to="#">Pre-loader</Link></li>
//                                             <li><Link to="#">Glassmorphism</Link></li>
//                                         </ul>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <Link to="#">Furniture</Link>
//                                 <i className="bx bxs-chevron-down js-arrow arrow " />
//                                 <ul className="js-sub-menu sub-menu">
//                                     <li><Link to="/sofas">Sofa</Link></li>
//                                     <li><Link to="/chairs">Chair</Link></li>
//                                     <li><Link to="#">Card Slider</Link></li>
//                                     <li><Link to="#">Bed</Link></li>
//                                     <li><Link to="#">Dinning Table</Link></li>
//                                 </ul>
//                             </li>
//                             <li><Link to="#">Chimney</Link></li>
//                             <li><Link to="#">Parqueting</Link></li>
//                             <li><Link to="/blogs">Blog</Link></li>
//                         </ul>
//                     </div>
//                     <div className="search-box">
//                         <i className="bx bx-search" />
//                         <div className="input-box">
//                             <input type="text" placeholder="Search..." />
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//             <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            




//         </>
//     )
// }

// export default Navbar
