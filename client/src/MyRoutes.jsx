import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import BlogPage from "./page/BlogPage";
import HomePage from "./page/HomePage";
import SofaPage from "./page/SofaPage";
import ChairPage from "./page/ChairPage";
import AboutUsPage from "./page/AboutUsPage";

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

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;