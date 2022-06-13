import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai';
function Rating() {
  return (
    <div className='flex row items-center mt-1'>
        <div class="rating rating-sm ml-6 mr-1">
        <AiTwotoneStar className='w-3 text-orange-600'/>
        <AiTwotoneStar className='w-3 text-orange-600'/>
        <AiTwotoneStar className='w-3 text-orange-600'/>
        <AiTwotoneStar className='w-3 text-orange-600'/>
            <AiTwotoneStar className='w-3 text-gray-600'/>
         
    {/* <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" /> */}
  </div>
  <p className='text-xs mb-[3px] font-extralight tracking-wide'>(56)</p></div>
  )
}

export default Rating