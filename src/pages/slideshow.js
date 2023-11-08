import React, { useState, useEffect, useRef } from "react";
// import { Button } from 'primereact/button';
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "../slideshow.css";
import foodcluster from "../images/food cluster icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import coldstorageicon from "../images/cold_storage_icon-removebg-preview.png";
import warehouseicon from "../images/warehouse_icon-removebg-preview.png";
import coldstoragebg from "../images/cold storage Background.jpg";
import wareHousebg from "../images/warehouse background.jpeg";
import dairyicon from "../images/dairy unit icon.jpg";
import extractionIcon from "../images/extraction icon.jpg";
import pulpingicon from "../images/pulping icon.jpg";

import multigrainicon from "../images/multi grain mill icon.jpg";
import ricemillicon from "../images/rice mill icon.jpg";

import cargoicon from "../images/cargo icon.jpg";
import foodtestingicon from "../images/food testing lab icon.jpg";
import superstocking from "../images/superstockist icon.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const Slideshow = () => {
  const [products, setProducts] = useState([]);
  const [moreDetails, setMoreDetails] = useState(false);
  const [moreDetailswateHouse, setMoreDetailsWareHouse] = useState(false);
  const [moreDetailsriping, setMoreDetailsriping] = useState(false);

  const sampleData = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
    },
    {
      id: 4,
      name: "Product 4",
      price: 49.99,
    },
    {
      id: 5,
      name: "Product 5",
      price: 59.99,
    },
    {
      id: 6,
      name: "Product 6",
      price: 69.99,
    },
    {
      id: 7,
      name: "Product 7",
      price: 79.99,
    },
    {
      id: 8,
      name: "Product 8",
      price: 89.99,
    },
    {
      id: 9,
      name: "Product 9",
      price: 99.99,
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const secondSliderData = [
    { id: 1, title: "", content: "", img: foodcluster },
    { id: 2, title: "", content: "", img: warehouseicon },
    { id: 3, title: "", content: "", img: coldstorageicon },
    // {id:4,title:"",content:"",img:""},
    // {id:5,title:"",content:"",img:""},
  ];

  useEffect(() => {
    // Simulating data fetch
    const simulatedData = sampleData.slice(0, 9);
    setProducts(simulatedData);
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">balaji</h4>
          <h6 className="mt-0 mb-3">dcdxc</h6>
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
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
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    foodcluster,
    "image2.jpg",
    "image3.jpg",
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

  const swiperRef = useRef(null);

  const handleHover = (slideIndex) => {
    console.log("slideIndex", slideIndex);
    if (swiperRef.current && slideIndex !== null) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  console.log("swiperRef", swiperRef);

  return (
    <>
      <div className="h-[100%] border border-[green]">
        <h1 className="text-center mt-[50px]">Our Services</h1>
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
          modules={[Autoplay, Pagination]}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" div-with-background  h-[100%] ">
              <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                <div className="imgdiv ">
                  <img src={foodcluster} />
                </div>
                <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto">
                  <h1>Food Cluster</h1>
                  <p>
                    &nbsp; Food Cluster indicates geographically concentrated
                    group of interconnected businesses and organizations within
                    the food industry. These clusters often include farms, food
                    processors, distributors, research institutions, and
                    supporting services all located in close proximity to one
                    another. The proximity fosters collaboration, innovation,
                    and efficient supply chain management, contributing to the
                    growth and competitiveness of the regional food sector. Food
                    clusters are essential hubs for promoting economic
                    development, knowledge sharing, and the exchange of ideas
                    and resources within the food industry.Building bridge
                    between farm and market to justify fair remunerative value
                    of produced farm goods.&nbsp;{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div>
                <div className="flex justify-between  m-auto relative">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mainswipe"
                    ref={swiperRef}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      {/* <div className='div-with-background imgdiv'><img className='h-[100vh] imgdiv' src={coldstoragebg} /></div> */}
                      <div className=" div-with-background1  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" div-with-background2  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className=" div-with-background3  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="absolute maincard  z-[999] m-auto w-[1200px] left-[10%]  flex justify-center xl:w-[10 0% ] items-center h-[70vh]">
                    <div className="cards">
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(0)}
                      >
                        <div class="image">
                          <img src={coldstorageicon} />
                        </div>
                        <div class="card-info">
                          <span>Cold Storage</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          {" "}
                          We Provide Specialized facilities to designed to
                          preserve and store perishable items and
                          temperature-sensitive goods at controlled low
                          temperatures. Cold Storage is Equipped with
                          refrigeration systems to maintain a consistent cold
                          environment, preventing spoilage, and extending the
                          shelf life of products like fruits, vegetables, dairy,
                          meat, and pharmaceuticals. Cold storage plays a
                          crucial role in the food supply chain, helping to
                          reduce food waste, ensure product quality, and support
                          the distribution of goods to consumers throughout the
                          year. Frozen room temperature range between -18°C to
                          -24°C. Chiller room temperature range between 0°C to
                          12°C.
                        </p>
                      </div>
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(1)}
                      >
                        <div class="image">
                          <img src={warehouseicon} />
                        </div>
                        <div class="card-info">
                          <span>Ware House</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          A dry warehouse is a storage facility designed for
                          non-perishable goods that do not require temperature
                          control or refrigeration. They provide a secure and
                          climate-controlled environment to protect products
                          from environmental factors like moisture, dust, and
                          temperature fluctuations. Dry warehouses are essential
                          components of supply chains, ensuring the safe storage
                          and efficient distribution of a wide range of dry
                          goods. We provide 6000 Nos of palletize System For Dry
                          Warehouse & 2200 Sq.mtr Rack System for storage of
                          agro, food, healthcare,pharmaceutical products &
                          Fertilizers.
                        </p>
                      </div>
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(2)}
                      >
                        <div class="image">
                          <img src={warehouseicon} />
                        </div>
                        <div class="card-info">
                          <span>Ripping Chamber</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          Our Fruits Ripping Chamber is a game-changer in the
                          fruit industry. It precisely controls the ripening of
                          fruits, enhancing flavor and texture, while extending
                          shelf life. Whether you're a grower,distributor, or
                          importer our technology is your key to delivering the
                          freshest, tastiest fruits to consumers worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div>
                <div className="flex justify-between  m-auto relative">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mainswipe"
                    ref={swiperRef}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      {/* <div className='div-with-background imgdiv'><img className='h-[100vh] imgdiv' src={coldstoragebg} /></div> */}
                      <div className=" thirdslide-div-with-background1  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" thirdslide-div-with-background2  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className=" thirdslide-div-with-background3  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="absolute maincard  z-[999] m-auto w-[1200px] left-[10%]  flex justify-center xl:w-[10 0% ] items-center h-[70vh]">
                    <div className="cards">
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(0)}
                      >
                        <div class="image">
                          <img src={dairyicon} />
                        </div>
                        <div class="card-info">
                          <span> Dairy Unit</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          {" "}
                          A dairy unit is dedicated to the production and
                          processing of dairy products like milk and its
                          byproducts. The collected milk is processed,
                          pasteurized, and transformed into various dairy
                          products for consumption or distribution to consumers
                          and businesses. we collect and process 2.5L liter milk
                          per day straight from framers cowshed to our unit.
                        </p>
                      </div>
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(1)}
                      >
                        <div class="image">
                          <img src={extractionIcon} />
                        </div>
                        <div class="card-info">
                          <span>Flavor & herbal Extract</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          Flavor extracts are concentrated liquid forms of
                          natural flavours used to enhance the taste of food and
                          beverages. They capture the essence of various
                          ingredients, such as fruits, spices, or herbs, in a
                          convenient form. Herbal extracts, on the other hand,
                          specifically focus on extracting the beneficial
                          compounds from herbs, like medicinal or aromatic
                          properties, often used for their therapeutic or
                          flavor-enhancing qualities in various applications. We
                          enchance supercritical CO2 Technology to produce
                          oil,oleoresin in liquid & powder form with 10mtr
                          capacity per month comes with standard Packaging.
                        </p>
                      </div>
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(2)}
                      >
                        <div class="image">
                          <img src={pulpingicon} />
                        </div>
                        <div class="card-info">
                          <span>Pulping Unit Content</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          Our Multi-Process Pulping Unit is a versatile
                          powerhouse in fruit processing, capable of handling a
                          wide range of fruits and delivering purees, juices,
                          and concentrates with precision. It's the heart of our
                          operation, ensuring the highest quality fruit products
                          for various industries. It has ability to efficiently
                          extract juices, pulp and purees of tomato, mango,
                          guava, jamun in aseptic form.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
          <>
              <div>
                <div className="flex justify-between  m-auto relative">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mainswipe"
                    ref={swiperRef}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      {/* <div className='div-with-background imgdiv'><img className='h-[100vh] imgdiv' src={coldstoragebg} /></div> */}
                      <div className=" fourthlide-div-with-background1  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" fourthlide-div-with-background2  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className=" fourthlide-div-with-background3  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="absolute maincard  z-[999] m-auto w-[1200px] left-[10%]  flex justify-center xl:w-[10 0% ] items-center h-[70vh]">
                    <div className="cards">
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(0)}
                      >
                        <div class="image">
                          <img src={multigrainicon} />
                        </div>
                        <div class="card-info">
                          <span> Dairy Unit</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          {" "}
                          A dairy unit is dedicated to the production and
                          processing of dairy products like milk and its
                          byproducts. The collected milk is processed,
                          pasteurized, and transformed into various dairy
                          products for consumption or distribution to consumers
                          and businesses. we collect and process 2.5L liter milk
                          per day straight from framers cowshed to our unit.
                        </p>
                      </div>
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(1)}
                      >
                        <div class="image">
                          <img src={ricemillicon} />
                        </div>
                        <div class="card-info">
                          <span>Flavor & herbal Extract</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          Flavor extracts are concentrated liquid forms of
                          natural flavours used to enhance the taste of food and
                          beverages. They capture the essence of various
                          ingredients, such as fruits, spices, or herbs, in a
                          convenient form. Herbal extracts, on the other hand,
                          specifically focus on extracting the beneficial
                          compounds from herbs, like medicinal or aromatic
                          properties, often used for their therapeutic or
                          flavor-enhancing qualities in various applications. We
                          enchance supercritical CO2 Technology to produce
                          oil,oleoresin in liquid & powder form with 10mtr
                          capacity per month comes with standard Packaging.
                        </p>
                      </div>
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(2)}
                      >
                        <div class="image">
                          <img src={pulpingicon} />
                        </div>
                        <div class="card-info">
                          <span>Pulping Unit Content</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          Our Multi-Process Pulping Unit is a versatile
                          powerhouse in fruit processing, capable of handling a
                          wide range of fruits and delivering purees, juices,
                          and concentrates with precision. It's the heart of our
                          operation, ensuring the highest quality fruit products
                          for various industries. It has ability to efficiently
                          extract juices, pulp and purees of tomato, mango,
                          guava, jamun in aseptic form.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
          <>
              <div>
                <div className="flex justify-between  m-auto relative">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mainswipe"
                    ref={swiperRef}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      {/* <div className='div-with-background imgdiv'><img className='h-[100vh] imgdiv' src={coldstoragebg} /></div> */}
                      <div className=" fifthslide-div-with-background1  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" fifthslide-div-with-background2  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className=" fifthslide-div-with-background3  h-[100%] ">
                        <div className="xl:w-[1300px] h-[100%]  xl:m-auto md:w-[1200px] flex justify-between   ">
                          <div className="contentdiv text-[#fff] w-[50%] px-3 py-3 m-auto"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="absolute maincard  z-[999] m-auto w-[1200px] left-[10%]  flex justify-center xl:w-[10 0% ] items-center h-[70vh]">
                    <div className="cards">
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(0)}
                      >
                        <div class="image">
                          <img src={cargoicon} />
                        </div>
                        <div class="card-info">
                          <span> Cargo services</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                          {" "}
                          ultra connect cargo services is  specialized in the transportation of goods and commodities from one location to another, 
often across long distances all over pan india.
 These services encompass of transportation including and may involve handling, storage, and documentation of cargo. 
Cargo services are essential for  trade and logistics, facilitating the movement of products, raw materials, and supplies, 
and contributing to the efficient functioning of supply chains for businesses and industries worldwide.
we provide refer as well as dry Container to transport your goods throughout Pan india.                    Food testing lab is a specialized facility equipped to analyze and assess the safety, quality, and composition of food products.
 our labs employ various scientific techniques to detect contaminants, pathogens, nutritional content, and authenticity in food samples. 
Their findings help ensure that food products meet regulatory standards and are safe for consumption. 
Food testing labs are essential for both food manufacturers and regulatory agencies in upholding food safety and quality standards in the food industry.
We provide Micro as well as chemical division lab facility.
                        </p>
                      </div>
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(1)}
                      >
                        <div class="image">
                          <img src={foodtestingicon} />
                        </div>
                        <div class="card-info">
                          <span>Food Testing Lab</span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                        Food testing lab is a specialized facility equipped to analyze and assess the safety, quality, and composition of food products.
 our labs employ various scientific techniques to detect contaminants, pathogens, nutritional content, and authenticity in food samples. 
Their findings help ensure that food products meet regulatory standards and are safe for consumption. 
Food testing labs are essential for both food manufacturers and regulatory agencies in upholding food safety and quality standards in the food industry.
We provide Micro as well as chemical division lab facility.
                        </p>
                      </div>
                      <div
                        class="card cardsmain"
                        onMouseEnter={() => handleHover(2)}
                      >
                        <div class="image">
                          <img src={superstocking} />
                        </div>
                        <div class="card-info">
                          <span>Super Stockists </span>
                          <p></p>
                        </div>
                        {/* <a href="#" class="button">Folow</a>
                         */}
                        <p className="moretext">
                        Super Stockists are the backbone of our distribution network, strategically positioned to efficiently manage and distribute 
products to retailers, wholesalers and importer ensuring widespread availability.
We play a vital role in warehousing, managing inventory, and delivering our products promptly to meet market demands.
We are super-stockist of various FMCG products like Frozen products, Dairy products,and Ice-Cream  that specializes in distributing  products to a network of retailers and smaller distributors.
 Our organization operate on a larger scale, serving as a vital link between the Dairy, Frozen products, ice cream manufacturer and the local retail market. 
Our team ensure efficient distribution, inventory management, and timely deliveries, playing a crucial role in expanding the reach of your products and ensuring its availability to consumers across a specific region or area.
We are super stockiest of Khushboo ice-cream of Maharashtra , karnataka, Goa states.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </SwiperSlide>
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
