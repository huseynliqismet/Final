import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/layout/Layout'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Shop from '../pages/Shop'

const Routers = () => {
  return (
    <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Layout>
  )
}

export default Routers