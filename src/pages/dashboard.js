import React from 'react'
import Navbar from '../components/navbar'
import '../index.css';
import ImageChanger from '../components/imagechanger';
import WhatWeDo from '../components/whatwedo';
import OurServices from '../components/ourservices';
import ProductCategory from '../components/productcategory';
import WhytoChoosUs from '../components/whytochoosus';
import Footer from '../components/fotter';

const Dashboard = () => {
  return (
    <div>
    <Navbar />
    <ImageChanger />
    <WhatWeDo />
    <OurServices />
   <ProductCategory />
   <WhytoChoosUs />
   <Footer />
    </div>
  )
}

export default Dashboard
