import React from 'react'
import Navbar from '../components/navbar'
import '../index.css';
import ImageChanger from '../components/imagechanger';
import WhatWeDo from '../components/whatwedo';
import OurServices from '../components/ourservices';
import ProductCategory from '../components/productcategory';
import WhytoChoosUs from '../components/whytochoosus';
import Footer from '../components/fotter';
import Slideshow from './slideshow';

const Dashboard = () => {
  return (
    <div>
    <Navbar />
    <ImageChanger />
    <WhatWeDo />
    <Slideshow />
   <ProductCategory />
   <WhytoChoosUs />
   <Footer />
    </div>
  )
}

export default Dashboard
