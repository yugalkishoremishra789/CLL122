import React from 'react'
import Footer from "../Footer/footer.js";
import Router from '../../Routers/router.js';
import NavbarCust from '../NavBar/navbar.js';


const Layout = () => {
  return (
    <>
    <NavbarCust/>
      <Router/>
      <Footer />
    </>

  )
}

export default Layout