import React from 'react'
import butturimage from "../../src/images/butter-removebg-preview.png"
// import coneshapejaggery from "../../src/images/cone-shape-jaggery.png"
import fenugreek from "../../src/images/fenugreek-removebg-preview.png";
import ginneroil from "../../src/images/ginger_oil-removebg-preview.png";
// import greenpeers from "../../src/images/green peas.png";
import jaggery from "../../src/images/jaggery-removebg-preview.png";
import milkpowder from "../../src/images/milk-powder.png";
import peardcord from "../../src/images/peas_corn-removebg-preview.png";
import ragi from "../../src/images/ragi.png";
import "../../src/product.scss"
const ProductCategory = () => {
    const products = [
        {
            id: 1,
            title: "SPECIES & NUTS",
            img:butturimage,
            description: "There are more than 20 different types of edible nuts around the world & 80 different types of spices grown in the world"
        },
        {
            id: 2,
            title: "FRESH FRUITS",
            img:fenugreek,
            description: "Life without love is like a tree without blossoms or fruit.We can provided various Fruits during Seasonal Period."
        },
        {
            id: 2,
            title: "DAIRY PRODUCTS",
            img:jaggery,
            description: "High-fat dairy products like butter have been linked to a reduced risk of obesity, diabetes, and heart problems."
        },
        {
            id: 2,
            title: "RICE & SUGAR",
            img:ginneroil,
            description: "We Can Provide Export quality of Sugar & Rice as Per your needs."
        },
        {
            id: 2,
            title: "EXTRACTION OIL",
            img:peardcord,
            description: "We Can Provide Tumeric, Ginger,Seeds, Extracte oil with Premium Quality."
        },
        {
            id: 2,
            title: "POWDER FORM",
            img:milkpowder,
            description: "We Can Provide Tumeric,Ginger various powder Products with Premium Quality"
        },

    ]
    return (
      //   <div className='Categories' id="productcategory">
      //   <h1 className='text-center mt-[30px]'>Product Category</h1>
      //   <div className=''>
      //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
      //       {products.map((item, index) => (
      //         <div>
      //           <figure className="effect-layla">
      //             <img className='max-w-sm' src={item.img} alt="img06"/>
      //             <figcaption>
      //               <h2>Crazy <span>{item.title}</span></h2>
      //               <p>{item.description}</p>
      //               <a href="#" className='bg-[red]'>View more</a>
      //               <p ><a href='#' className=' text-[#fff]  bg-[green] no-underline px-3 py-3 rounded-full decoration-none'>View More</a></p>
      //             </figcaption>
      //           </figure>
      //           </div>
      //       ))}
      //     </div>
      //   </div>
      // </div>
      <>
      <h1 className='text-center mt-[50px]'>Product Category</h1>

      <div class="gallery xl:pt-[10%] xl:pb-[10%]">
      {
        products.map((elm)=>{
          return(
            <>
         <img className='max-w-sm' src={elm.img} alt="img06"/>
            </>
          )
        })
      }

</div>
</>

    )
}

export default ProductCategory
