import React, { useState, useEffect } from 'react';
import butturimage from "../../src/images/butter-removebg-preview.png"
// import coneshapejaggery from "../../src/images/cone-shape-jaggery.png"
import fenugreek from "../../src/images/fenugreek-removebg-preview.png";
import ginneroil from "../../src/images/ginger_oil-removebg-preview.png";
// import greenpeers from "../../src/images/green peas.png";
import jaggery from "../../src/images/jaggery-removebg-preview.png";
import milkpowder from "../../src/images/milk-powder.png";
import peardcord from "../../src/images/peas_corn-removebg-preview.png";
import ragi from "../../src/images/ragi.png";
import farmerfresh from "../../src/images/farmer fresh.png";









const ImageChanger = () => {
    const [images, setImages] = useState([
      butturimage,
      // coneshapejaggery ,
      fenugreek,
      ginneroil,
      jaggery,
      // greenpeers,
      milkpowder,
      peardcord,
      ragi
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
