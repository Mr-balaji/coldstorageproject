import {React,useEffect,useRef} from 'react'
import bakeryImg from "../images/butter.jpg"
import 'swiper/swiper-bundle.css'; // Import Swiper style
import Slideshow from '../pages/slideshow';

import '../slideshow.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Keyboard, Pagination, Navigation,Autoplay } from 'swiper/modules';

const OurServices = () => {

   useEffect(() => {
      var swiper = new Swiper(".mySwiper", {
         effect: "coverflow",
         grabCursor: true,
         centeredSlides: true,
         loop: true,
         autoplay: {
            delay: 1000, // Set the delay to 2000 milliseconds (2 seconds)
          },
         slidesPerView: "1",
         coverflowEffect: {
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 4,
           slideShadows: false
         },
         keyboard: {
           enabled: true
         },
        //  mousewheel: {
        //    thresholdDelta: 70
        //  },
         initialSlide: 0,
         on: {
           click(event) {
             swiper.slideTo(this.clickedIndex);
           }
         },
         breakpoints: {
           640: {
             slidesPerView: 2
           }
         }
       });


      return () => {
        swiper.destroy(true, true);
      };
    }, []);

    const caracolData = [
     {
        id:1,
        img:bakeryImg,
        title:"services1",
        content:"hello",
     },
     {
        id:2,
        img:bakeryImg,
        title:"services2",
        content:"",
     },
     {
        id:3,
        img:bakeryImg,
        title:"services2",
        content:"",
     },
     {
        id:4,
        img:bakeryImg,
        title:"services2",
        content:"",
     },
     {
        id:5,
        img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        title:"services2",
        content:"",
     },
     {
        id:6,
        img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
        title:"services2",
        content:"",
     },
     {
        id:5,
        img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        title:"services2",
        content:"",
     },
     {
        id:5,
        img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        title:"services2",
        content:"",
     },
     {
        id:5,
        img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        title:"services2",
        content:"",
     },

    ]

    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
//     <>
//     <div id="Services">
//     <h1 className='text-center mt-[50px]'>Our Services</h1>
//     <div class="slider ">
// 	<div class="slide-track">
//     {caracolData.map((elm)=>{
//         return(
//             <>
//             <div class="slide ">
//             <div className=' border ml-3  '>
//             <div class="image-container">
//         <img src={elm.img} alt="Your Image" />
//         <div class="overlay"></div>
//     </div>
//             {/* <img className='h-[100%] w-[100%]'  /> */}
//             <h1 className='text-center'>{elm.title}</h1>
//             <h1 className='text-center'>{elm.content}</h1>

//             </div>
//           </div>
//             </>
//         )
//     })}
// 	</div>
// </div>
// </div>
// </>
<>
<h1 className='text-center mt-[3%]'>Our Services</h1>

{/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper> */}



</>

  )
}

export default OurServices
