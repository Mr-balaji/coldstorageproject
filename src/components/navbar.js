import React from 'react'
import Logo from "../images/WhatsApp Image 2023-10-02 at 11.39.29 PM (1).jpeg"

const Navbar = () => {
  return (
  <header id="header" class="fixed-top d-flex align-items-cente">
  <div class="container-fluid  navcontainer d-flex align-items-center justify-content-lg-between">

    <h1  class="logo me-auto me-lg-0 "><img className='h-[30%] ' src={Logo} /></h1>
   <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

    <nav id="navbar" class="navbar order-last order-lg-0">
      <ul>
        <li><a class="nav-link scrollto " href="#hero">HOME</a></li>
        <li><a class="nav-link scrollto" href="#about">ABOUT</a></li>
        <li><a class="nav-link scrollto" href="#Services">SERVICES</a></li>
        <li><a class="nav-link scrollto" href="#productcategory">PRODUCT CATEGORY</a></li>
        <li><a class="nav-link scrollto" href="#events">WHY-WE</a></li>
        <li><a class="nav-link scrollto" href="#gallery">GALLERY</a></li>
      </ul>
    </nav>
  </div>
</header>

  )
}

export default Navbar
