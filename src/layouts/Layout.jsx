import React from 'react'
import MiniNavbar from '../components/MiniNavbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MiniFooter from '../components/MiniFooter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
        <MiniNavbar />
        <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MiniFooter />
    </div>
  )
}

export default Layout
