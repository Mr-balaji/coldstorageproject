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
import coldstorageicon from "../images/cold_storage_icon-removebg-preview.png"
import warehouseicon from "../images/warehouse_icon-removebg-preview.png"
import coldstoragebg from "../images/cold storage Background.jpg";
import wareHousebg from "../images/warehouse background.jpeg";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Keyboard, Pagination, Navigation,Autoplay } from 'swiper/modules';


const Slideshow = () => {
  const [products, setProducts] = useState([]);
  const [moreDetails, setMoreDetails] = useState(false);
  const [moreDetailswateHouse, setMoreDetailsWareHouse] = useState(false);
  const [moreDetailsriping, setMoreDetailsriping] = useState(false);




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
    {id:1,title:"",content:"",img:foodcluster},
    {id:2,title:"",content:"",img:warehouseicon},
    {id:3,title:"",content:"",img:coldstorageicon},
    // {id:4,title:"",content:"",img:""},
    // {id:5,title:"",content:"",img:""},
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    foodcluster,
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current image index to create the auto slide effect
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the duration as needed (in milliseconds)

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);




  return (

<>
<div className='h-[100%] border border-[green]'>
    <h1 className='text-center mt-[50px]'>Our Services</h1>
<Swiper
        // centeredSlides={true}
        autoplay={{
          delay: 150000,  
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination]}
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
          <div>

        
          <div className='flex justify-between  m-auto relative'>
          <Swiper
        autoplay={{
          delay:10000,  
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination]}
        className="mainswipe"
      >
        <SwiperSlide>
           {/* <div className='div-with-background imgdiv'><img className='h-[100vh] imgdiv' src={coldstoragebg} /></div> */}
           <div className=' div-with-background1  h-[100%] '>
          <div className='xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   '>
           <div className='contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto'>

           </div>
          </div>

          </div>
           </SwiperSlide>
        <SwiperSlide>
        <div className=' div-with-background2  h-[100%] '>
          <div className='xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   '>
           <div className='contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto'>

           </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> <div className=' div-with-background3  h-[100%] '>
          <div className='xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   '>
           <div className='contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto'>

           </div>
          </div>
          </div>
          </SwiperSlide>
        
      </Swiper>
      {/* <div className='absolute z-[999] w-[100%] m-auto   flex justify-between xl:w-[10 0%]'>
          <div class="a-box ">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src={coldstorageicon} />
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>A blue bird</h3>
    <div>
      This a demo experiment to skew image container. It looks good.
  </div>
</div>
</div>

<div class="a-box ">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew md:h-[10px] sm:h-[10px]">
        <img src={warehouseicon} />
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>A blue bird</h3>
    <div>
      This a demo experiment to skew image container. It looks good.
  </div>
</div>
</div>

<div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src={warehouseicon} />
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>A blue bird</h3>
    <div>
      This a demo experiment to skew image container. It looks good.
  </div>
</div>
</div>
</div> */}
<div className='absolute z-[999] xl:w-[100%] m-auto   flex justify-between xl:w-[10 0%] border border-[red] items-center h-[70vh]'>
<section class="articles">
  <article>
    <div class="article-wrapper">
      {
        moreDetails ?
        <div class="article-body">
        <h2>coldStorage</h2>
        <p>
        We Provide Specialized facilities to designed to preserve and store perishable items and temperature-sensitive goods at controlled low temperatures. 
Cold Storage is Equipped with refrigeration systems to maintain a consistent cold environment, preventing spoilage, and extending the shelf life of products like fruits,
 vegetables, dairy, meat, and pharmaceuticals.
  We provide 4000 Nos of palletize System for  Frozen & Chiller Room & 400 Sq.mtr  Rack System to store Food Products.
Frozen room temperature range between -18°C to -24°C.
Chiller room temperature range between 0°C to 12°C.
        </p>
        <button href="#" className='cursor-pointer' onClick={()=>setMoreDetails(false)} for="toggleContent1" class="read-more">
          Show Less <span class="sr-only">about this is some title</span>
        </button>
      </div>
        :   
        <>
        <figure>
        {/* <img src="https://picsum.photos/id/1011/800/450" alt="" /> */}
        <div class="flex flex-col items-center pb-10 imgdivcontent">
        <img class="w-24 h-24 mb-3  shadow-lg" src={coldstorageicon} alt="Bonnie image"/>
  
        </div>
      </figure>
      <div class="article-body">
      <h2>coldStorage</h2>
        <p>
        We Provide Specialized facilities to designed to preserve and store perishable items and temperature-sensitive goods at controlled low temperatures.
        </p>
        <button  onClick={()=>setMoreDetails(true)} for="toggleContent1" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg> */}
        </button>
      </div>
      </>
      }
    
    </div>
  </article>
  <article>

    <div class="article-wrapper">
    {
        moreDetailswateHouse ?
        <div class="article-body">
        <h2>Ware House</h2>
        <p>
        A dry warehouse is a storage facility designed for non-perishable goods that do not require temperature control or refrigeration. 
They provide a secure and climate-controlled environment to protect products from environmental factors like moisture, dust, and temperature fluctuations.
 ensuring the safe storage and efficient distribution of a wide range of dry goods.
 We provide 6000 Nos of palletize System For Dry Warehouse & 2200 Sq.mtr Rack System for storage of agro, food, healthcare,pharmaceutical products & Fertilizers.
        </p>
        <button href="#" className='cursor-pointer' onClick={()=>setMoreDetailsWareHouse(false)} for="toggleContent1" class="read-more">
          Show Less <span class="sr-only">about this is some title</span>
        </button>
      </div>
        :   
        <>
        <figure>
        {/* <img src="https://picsum.photos/id/1011/800/450" alt="" /> */}
        <div class="flex flex-col items-center pb-10 imgdivcontent">
        <img class="w-24 h-24 mb-3  shadow-lg" src={warehouseicon} alt="Bonnie image"/>
  
        </div>
      </figure>
      <div class="article-body">
      <h2>Ware House</h2>

        <p>
        A dry warehouse is a storage facility designed for non-perishable goods that do not require temperature control or refrigeration. 

        </p>
        <button  onClick={()=>setMoreDetailsWareHouse(true)} for="toggleContent1" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg> */}
        </button>
      </div>
      </>
      }
   
    </div>
  </article>
  <article>

    <div class="article-wrapper">
    {
        moreDetailsriping ?
        <div class="article-body">
        <h2>Riping Details</h2>
        <p>
        Our Fruits Ripping Chamber is a game-changer in the fruit industry. It precisely controls the ripening of fruits, enhancing flavor and texture, while extending shelf life. 
Whether you're a grower,distributor, or importer our technology is your key to delivering the freshest, tastiest fruits to consumers worldwide.

        </p>
        <button href="#" className='cursor-pointer' onClick={()=>setMoreDetailsriping(false)} for="toggleContent1" class="read-more">
          Show Less <span class="sr-only">about this is some title</span>
        </button>
      </div>
        :   
        <>
        <figure>
        {/* <img src="https://picsum.photos/id/1011/800/450" alt="" /> */}
        <div class="flex flex-col items-center pb-10 imgdivcontent">
        <img class="w-24 h-24 mb-3  shadow-lg" src={warehouseicon} alt="Bonnie image"/>
  
        </div>
      </figure>
      <div class="article-body">
      <h2>Riping Details</h2>
        <p>
        Our Fruits Ripping Chamber is a game-changer in the fruit industry. It precisely controls the ripening of fruits, enhancing flavor and texture, while extending shelf life. 
        </p>
        <button  onClick={()=>setMoreDetailsriping(true)} for="toggleContent1" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
       
        </button>
      </div>
      </>
      }
   
    </div>
  </article>
</section>
</div>
{/* <div className='absolute z-[999] xl:w-[100%] m-auto   flex justify-between xl:w-[10 0%] border border-[red] items-center h-[70vh]'>
<div className='[w-100vw]'>
<div class="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>
</div>
<div className='[w-100vw]'>
<div class="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
     
    </div>
    <div class="flex flex-col items-center pb-10 imgdivcontent">
        <img class="w-24 h-24 mb-3  shadow-lg" src={coldstorageicon} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 decoration-none text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</a>
           
        </div>
    </div>
</div>
</div>

<div className='[w-100vw]'>
<div class="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</a>
        </div>
    </div>
</div>
</div>
</div> */}

          {
            secondSliderData.map((elm)=>{
              return(
//             {/* <div class="container">
// //                 <div class="card">
// //                   <div class="box">
// //                     <div class="content">
// //                       <h2>01</h2>
// //                       <h3>Card One</h3>
// //                       <p>We Provide Specialized facilities to designed to preserve and store perishable items and temperature-sensitive goods at controlled low temperatures. 
// // Cold Storage is Equipped with refrigeration systems to maintain a consistent cold environment, preventing spoilage, and extending the shelf life of products like fruits,
// //  vegetables, dairy, meat, and pharmaceuticals.
// //  Cold storage plays a crucial role in the food supply chain, helping to reduce food waste, ensure product quality, and support the distribution of goods to consumers 
// // throughout the year. We provide 4000 Nos of palletize System for  Frozen & Chiller Room & 400 Sq.mtr  Rack System to store Food Products.
// // Frozen room temperature range between -18°C to -24°C.
// // Chiller room temperature range between 0°C to 12°C</p>
// //                       <a href="#">Read More</a>
// //                     </div>
// //                   </div>
// //                 </div>
              
// //                 <div class="card">
// //                   <div class="box">
// //                     <div class="content">
// //                       <h2>02</h2>
// //                       <h3>Card Two</h3>
// //                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
// //                       <a href="#">Read More</a>
// //                     </div>
// //                   </div>
// //                 </div>
              
// //                 <div class="card">
// //                   <div class="box">
// //                     <div class="content">
// //                       <h2>03</h2>
// //                       <h3>Card Three</h3>
// //                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
// //                       <a href="#">Read More</a>
// //                     </div>
// //                   </div>
// //                 </div>
//          </div> */}
         <>
       
       {/* <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${
            index === currentImageIndex ? 'active' : ''
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      )
      )}
    </div> */}  
 
  
  {/* <div className='w-[100%] flex'> */}

{/* </div> */}
         
  {/* <div class="container">
  <div class="card">
      <div class="face face1">
          <div class="content">
              <img src={coldstorageicon} />
              <h3>Cold Storage</h3>
          </div>
      </div>
      <div class="face face2">
          <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
          </div>
      </div>
  </div>
  <div class="card">
      <div class="face face1">
          <div class="content">
              <img src={warehouseicon}/>
              <h3>Ware House</h3>
          </div>
      </div>
      <div class="face face2">
          <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
          </div>
      </div>
  </div>
  <div class="card">
      <div class="face face1">
          <div class="content">
          <img src={warehouseicon}/>
              <h3>Ware House</h3>
          </div>
      </div>
      <div class="face face2">
          <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
          </div>
      </div>
  </div>
</div> */}
</>
              )
            })
          }
          </div>

          </div>
         
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
