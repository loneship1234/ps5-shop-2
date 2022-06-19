import React from 'react'

// 
import Main from '../components/Main';
import Carusel from '../components/Carusel';

function HomePage() {
  return (
    <div className='text-white' >
    <Main/>
    <p className='my-3 ml-32 font-normal tracking-wide select-none capitalize text-3xl '>discover games</p>
    <Carusel/>
        </div>
  )
}

export default HomePage