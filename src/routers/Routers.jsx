import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/layout/Layout'
import Home from '../pages/Home'

const Routers = () => {
  return (
    <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  </Layout>
  )
}

export default Routers