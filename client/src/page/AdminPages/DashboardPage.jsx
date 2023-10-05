import React from 'react'
import AdminNavbar from '../../component/AdminComponent/Dashboard/AdminNavbar'
import AdminSidebar from '../../component/AdminComponent/Dashboard/AdminSidebar'
import Dashboard from '../../component/AdminComponent/Dashboard/Dashboard'

const DashboardPage = () => {
  return (
    <>
      <AdminNavbar/>
      <AdminSidebar/>
      <Dashboard/>
    </>
  )
}

export default DashboardPage
