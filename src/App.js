import logo from './logo.svg';
import './App.css';
// import './style.scss';

import Dashboard from './pages/dashboard';
import '../src/vendor/animate.css/animate.min.css';
import '../src/vendor/aos/aos.css';
import '../src/vendor/bootstrap/css/bootstrap.min.css';
import '../src/vendor/bootstrap-icons/bootstrap-icons.css';
import '../src/vendor/boxicons/css/boxicons.min.css';
import '../src/vendor/glightbox/css/glightbox.min.css';
import '../src/vendor/swiper/swiper-bundle.min.css';
import { useEffect } from 'react';
// import '../src/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'swiper/swiper-bundle.min.css'; // Import Swiper CSS
// import 'glightbox/dist/css/glightbox.min.css'; // Import GLightbox CSS

import  MyComponent from '../src/js/main';
import OurServices from './components/ourservices';
import ProductCategory from './components/productcategory';
import WhytoChoosUs from './components/whytochoosus';
import Footer from './components/fotter';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/about';
import Slideshow from './pages/slideshow';


function App() {

  return (
   <>
   <MyComponent />
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/about' element={<Slideshow />} />

    </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
