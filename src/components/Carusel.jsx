import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from './Rating.jsx';
// Import Swiper styles
import 'swiper/css';

import img from '../img/cyberpunk2077.jpg';
function Carusel() {
  return (
    <div>
         <Swiper
      spaceBetween={5}
      slidesPerView={6}
   
    >
      <SwiperSlide> 
<div style={{background:"-webkit-gradient(linear,right bottom, left top , color-stop(7%, transparent), color-stop(-10%, #ffff00))"}} className='g h-96 w-11/12 rounded-3xl'>
<img src={img} className='rounded-3xl w-full h-[14em]' alt="" />
<div >
<p className=' ml-6 font-medium text-sm tracking-wider capitalize mt-3'>cyberpunk 2077</p>
<Rating/>
<div className=''><p className=' text-[11px] text-gray-400 ml-6 mt-1'>RPG,action,</p></div>
<div className=''><p className='text-[11px] text-gray-400 ml-6 mt-px'>CD Project Red</p></div>
<p className='ml-6 font-medium text-sm tracking-wider capitalize mt-4'>$49.99</p>

</div>
        </div></SwiperSlide>

    
    </Swiper>
    </div>
  )
}

export default Carusel