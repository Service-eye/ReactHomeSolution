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
import ScrolltoTop from "./page/ScrolltoTop";
import FurniturePage from "./page/FurniturePage";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <ScrolltoTop>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/sofas"  element={<SofaPage/>}/>
          <Route path="/blogs" element={<BlogPage/>}/>
          <Route path="/chairs" element={<ChairPage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/bloginside/:id" element={<BlogInsidePage/>}/>
          <Route path="/productdetails/:id" exact element={<ProductDetailPage/>}/>
          <Route path="/furniture" exact element={<FurniturePage/>}/>



          <Route path="/adminLogin" element={<LoginPage/>}/>
          <Route path="/admindashboard" element={<DashboardPage/>}/>



        </Routes>
      </ScrolltoTop >

      </BrowserRouter>
    </>
  );
};

export default MyRoutes;