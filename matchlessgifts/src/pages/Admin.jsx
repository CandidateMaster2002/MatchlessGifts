import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import AdminHeader from '../components/AdminHeader'

const Admin = () => {
  return (
    <>
    <AdminHeader/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Admin