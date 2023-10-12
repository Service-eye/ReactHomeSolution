import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './admin-pages/NotFound'
import SignIn from './admin-pages/Signin'
import Register from './admin-pages/Register'
import Product from './admin/Product'
import AddProduct from './admin/AddProduct'
import AdminRoute from './auth/AdminRoute'
import Dashboard from './admin/Dashboard'
import UpdateProduct from './admin/UpdateProduct'
import Category from './admin/Category'
import AddCategory from './admin/AddCategory'
import Users from './admin/Users'
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
import FurniturePage from './page/FurniturePage'
import Navbar1 from './component/Navbar/Navbar1'

const MyRoute = () => {
  return (
    <>

      <Router>
        <ScrolltoTop>
          <Routes>

            <Route path="" element={<HomePage />} />
            <Route path="/sofas" element={<SofaPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/chairs" element={<ChairPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/bloginside/:id" element={<BlogInsidePage />} />
            <Route path="/productdetails/:id" exact element={<ProductDetailPage />} />
            <Route path="/furniture" element={<FurniturePage />} />
            <Route path="/navbar" element={<Navbar1 />} />








            <Route path='/signin' element={<SignIn />} />
            <Route path='/register' element={<Register />} />




            <Route path='/admin/' element={<AdminRoute />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='addcategory' element={<AddCategory />} />
              <Route path='category' element={<Category />} />
              <Route path='addproduct' element={<AddProduct />} />
              <Route path='products' element={<Product />} />
              <Route path='updateproduct/:productId' element={<UpdateProduct />} />
              <Route path='users' element={<Users />} />
            </Route>


            <Route path='/*' element={<NotFound />} />

          </Routes>
        </ScrolltoTop>

      </Router>

    </>
  )
}

export default MyRoute