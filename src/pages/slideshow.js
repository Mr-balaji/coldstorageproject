import React, { useState, useEffect, useRef } from 'react';
// import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import '../slideshow.css'
import foodcluster from '../images/food cluster icon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import coldstorageicon from "../images/cold storage icon.jpg"
import warehouseicon from "../images/warehouse icon.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Keyboard, Pagination, Navigation,Autoplay } from 'swiper/modules';


const Slideshow = () => {
  const [products, setProducts] = useState([]);


  const sampleData = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 59.99,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 69.99,
    },
    {
      id: 7,
      name: 'Product 7',
      price: 79.99,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 89.99,
    },
    {
      id: 9,
      name: 'Product 9',
      price: 99.99,
    },
  ];
  const responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  const getSeverity = (product) => {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  };

  const secondSliderData = [
    {id:1,title:"",content:"",img:""},
    {id:2,title:"",content:"",img:""},
    {id:3,title:"",content:"",img:""},
    {id:4,title:"",content:"",img:""},
    {id:5,title:"",content:"",img:""},
  ]

  useEffect(() => {
    // Simulating data fetch
    const simulatedData = sampleData.slice(0, 9);
    setProducts(simulatedData);
  }, []);

  const productTemplate = (product) => {
    return (
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div className="mb-3">
                <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
            </div>
            <div>
                <h4 className="mb-1">balaji</h4>
                <h6 className="mt-0 mb-3">dcdxc</h6>
                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                    {/* <Button icon="pi pi-search" className="p-button p-button-rounded" /> */}
                    {/* <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" /> */}
                </div>
            </div>
        </div>
    );
};

const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };




  return (

<>
<div className='h-[100%] border border-[green]'>
    <h1 className='text-center mt-[50px]'>Our Services</h1>
<Swiper
        // centeredSlides={true}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=' div-with-background  h-[100%] '>
          <div className='xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   '>


           <div className='imgdiv '>
          <img src={foodcluster}/>
           </div>
           <div className='contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto'>
           <h1>Food Cluster</h1>
          <p >&nbsp;
Food Cluster indicates geographically concentrated group of interconnected businesses and organizations within the food industry.
These clusters often include farms, food processors, distributors, research institutions, and supporting services all located in close proximity to one another.
The proximity fosters collaboration, innovation, and efficient supply chain management, contributing to the growth and competitiveness of the regional food sector.
Food clusters are essential hubs for promoting economic development, knowledge sharing, and the exchange of ideas and resources within the food industry.Building bridge between
farm and market to justify fair remunerative value of produced farm goods.&nbsp; </p>
           </div>
          </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <>
          {
            secondSliderData.map((elm)=>{
              return(
                <div class="container">
                <div class="card">
                  <div class="box">
                    <div class="content">
                      <h2>01</h2>
                      <h3>Card One</h3>
                      <p>We Provide Specialized facilities to designed to preserve and store perishable items and temperature-sensitive goods at controlled low temperatures. 
Cold Storage is Equipped with refrigeration systems to maintain a consistent cold environment, preventing spoilage, and extending the shelf life of products like fruits,
 vegetables, dairy, meat, and pharmaceuticals.
 Cold storage plays a crucial role in the food supply chain, helping to reduce food waste, ensure product quality, and support the distribution of goods to consumers 
throughout the year. We provide 4000 Nos of palletize System for  Frozen & Chiller Room & 400 Sq.mtr  Rack System to store Food Products.
Frozen room temperature range between -18°C to -24°C.
Chiller room temperature range between 0°C to 12°C</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              
                <div class="card">
                  <div class="box">
                    <div class="content">
                      <h2>02</h2>
                      <h3>Card Two</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              
                <div class="card">
                  <div class="box">
                    <div class="content">
                      <h2>03</h2>
                      <h3>Card Three</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              )
            })
          }
         
          </>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
      </div>
      </>

  );
};

export default Slideshow;