import React from 'react'
import video from "../../src/videos/WhatsAppVideo2023-10-10at10.30.24 AM.mp4"

const WhatWeDo = () => {
  return (
    <div>
    <section id="about" className="video-background about">
      {/* <div class="container" data-aos="fade-up">
    <div>
        hello
    </div>
        <div class="row">
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div> */}
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-gradient-overlay "></div>
      <div className='aboutcontent  max-w-[1200px] m-auto'>
     <div className=''>
      <h1 className='text-center text-[#000] font-extrabold mb-[2%]'>What we Do</h1>
      <div className=' w-[70%] m-auto  xl:mt-8 '>
      <p className='text-[#000] font-bold text-[20px] text-center'>Ultra Connect Overseas is a firm made by the farmers for the farmers</p>
        <p className='text-[#000] text-[20px] ' style={{ textIndent: '0' }}>
We have a team of agronomists, Food Technologist and International Marketing professional who guide the farmers in the entire Greenfield process. We are progressive as we use latest farming technology in our farms.
 Our products are subject to stringent tests of quality and safety and are recognized as safe foods that come straight from the farm to your plate.
</p>
<p className='text-[#000] text-[20px]'>We are progressive as we contribute to India's economy by exporting quality products.</p>
      <div className='flex justify-center items-center'>
      <a href='/about'  className='px-3 text-[25px]   py-2 text-[#fff] bg-[green] rounded-full'>One Click Away</a>
      </div>
      </div>
     </div>
      </div>
    </section>

    </div>
  )
}

export default WhatWeDo