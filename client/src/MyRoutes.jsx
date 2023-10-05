import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import BlogPage from "./page/BlogPage";
import HomePage from "./page/HomePage";
import SofaPage from "./page/SofaPage";
import ChairPage from "./page/ChairPage";
import AboutUsPage from "./page/AboutUsPage";
import BlogInsidePage from "./page/BlogInsidePage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/AdminPages/LoginPage";
import DashboardPage from "./page/AdminPages/DashboardPage";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sofas" element={<SofaPage/>}/>
          <Route path="/blogs" element={<BlogPage/>}/>
          <Route path="/chairs" element={<ChairPage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/blogsinside" element={<BlogInsidePage/>}/>
          <Route path="/productdetails" element={<ProductDetailPage/>}/>



          <Route path="/adminLogin" element={<LoginPage/>}/>
          <Route path="/admindahboard" element={<DashboardPage/>}/>



        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;