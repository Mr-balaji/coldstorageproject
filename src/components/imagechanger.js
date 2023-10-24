import React, { useState, useEffect } from 'react';

import greencord from "../../src/slideshowimages/green & corn.png"
import banana from "../../src/slideshowimages/banu-transformed.png"
import cashew12 from "../../src/slideshowimages/cashew12.jpg"
import fingerMilet from "../../src/slideshowimages/Finger Millet Ragi 9.png"
import manuke from "../../src/slideshowimages/istockphoto-171306112-1024x1024-transformed.jpg"
import jackfroit from "../../src/slideshowimages/jack Fruit 5.png"
import organicjeerry from "../../src/slideshowimages/Organic_Jaggery_3-removebg-preview.png"
import sweetpotato from "../../src/slideshowimages/Sweet Potato 10.png"
import shad from "../../src/slideshowimages/WhatsApp Image 2023-10-09 at 10.46.55 PM.jpeg"
import istock4649 from "../../src/slideshowimages/istockphoto-464971800-1024x1024-transformed-removebg-preview.png"
import temric from "../../src/slideshowimages/istockphoto-1137344824-1024x1024-transformed.png"
import farmerfresh from "../../src/images/New Project.png"














const ImageChanger = () => {
    const [images, setImages] = useState([
      greencord,
      banana ,
      cashew12,
      fingerMilet,
      manuke,
      jackfroit,
      organicjeerry,
      sweetpotato,
      shad,
      istock4649,
      temric
      ]);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          // Increment the current image index
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 500); // Change image every 1 seconds (adjust as needed)

        return () => clearInterval(interval); // Cleanup on unmount
      }, [images]);

  return (
    <div className=' '>
   <div className="relative border  h-screen flex justify-center items-center   ">
  {images.map((image, index) => (
    <div className=" flex justify-center items-center">
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        // className={`absolute   xl:w-[30%] transition-opacity duration-1000 ${
        //   index === currentImageIndex ? 'opacity-100' : 'opacity-0'
        // }`}
        className={`absolute   xl:w-[35%] xl-h-[30%] ${
          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  ))}
  <div className='absolute'>
   <img src={farmerfresh} />
  </div>
</div>
    </div>
  )
}

export default ImageChanger
