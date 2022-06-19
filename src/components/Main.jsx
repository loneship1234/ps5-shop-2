import React from 'react'
import Poster from './Poster';
import ps5 from '../img/horizon forbiden west.jpg'
function Main() {
  return (
    <div className=' w-full h-[33.3em] mt-2 overflow-hidden flex row pl-32 pr-16'>
<div className=' w-screen flex-shrink  mr-5 -mt-14'> <button className='bg-blue-600 rounded-[16px] p-4 px-6 relative left-16 top-[26em] shadow-md shadow-blue-600 '>explore more</button> <img src={ps5} className='rounded-3xl h-[32.5em]' alt="" /></div>
<div className=' overflow-hidden w-8/12 gap-4 gap-x-6 grid-cols-2 grid-row-6 grid h-[33em] -mt-2'>
  {/* poster */}
  <div className='p'><Poster img='spider man miles morales' classname={'h-full w-full'} textbottom='19'/></div> 
  <div className='b'><Poster img='doom eternal'  classname={'h-full w-full'} textbottom='33'/></div> 
  <div className='g'><Poster img='the last of us part 2' classname={'h-full w-full'} textbottom='20'/></div> 
  <div className='r'><Poster img='watch dogs legion' classname={'h-full w-full'} textbottom='30'/></div> 
{/* poster end */}
</div>
    </div>
  )
}

export default Main