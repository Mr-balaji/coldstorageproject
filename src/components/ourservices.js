import React from 'react'
import bakeryImg from "../images/butter.jpg"

const OurServices = () => {

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
  return (
    <>
    <div id="Services">
    <h1 className='text-center mt-[50px]'>Our Services</h1>
    <div class="slider">
	<div class="slide-track">
    {caracolData.map((elm)=>{
        return(
            <>
            <div class="slide ">
            <div className=' border ml-3  '>
            <div class="image-container">
        <img src={elm.img} alt="Your Image" />
        <div class="overlay"></div>
    </div>
            {/* <img className='h-[100%] w-[100%]'  /> */}
            <h1 className='text-center'>{elm.title}</h1>
            <h1 className='text-center'>{elm.content}</h1>

            </div>
          </div>
            </>
        )
    })}
	</div>
</div>
</div>
</>
  )
}

export default OurServices
