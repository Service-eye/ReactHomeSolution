import React from 'react'
import {  Outlet, Navigate } from 'react-router-dom'
import { isAuthenticated } from '.'
import AdminSidebar from '../admin/AdminSidebar'


const AdminRoute = () => (
    isAuthenticated() && isAuthenticated().user.role === "admin" ?
    <>
    <AdminSidebar/>
    <Outlet/>
    </>
        :
        (
            <Navigate to='/signin' />
        )
)

export default AdminRoute