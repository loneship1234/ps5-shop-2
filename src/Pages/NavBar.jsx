import React from 'react'
import Logo from '../img/ps5-logo.png';
import {Link} from 'react-router-dom';
import {FiLogIn,FiSearch} from 'react-icons/fi'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {TbDeviceGamepad2} from 'react-icons/tb'
import {RiMenuFill} from 'react-icons/ri';
import {AiOutlineTeam} from 'react-icons/ai';


function NavBar() {
  return (
 <div class="navbar dark">
  <div class="navbar-start h-20 w-4/12">
    <Link to='/' class=" normal-case text-xl cursor-pointer ml-4 lg:ml-32 mr-0">        <img src={Logo} alt="" className='w-44 lg:w-48 mr-auto ' />
</Link>
  </div>
  <div class="navbar-center pl-[0em]  w-[50em] hidden lg:flex">
  <input type="text" placeholder='Search' className='ml-[21em] hidden lg:flex mr-0 w-[30em] h-[43px]  pl-6 rounded-l-2xl rounded-r-lg border-2 border-slate-800 bg-transparent focus:outline-slate-800 focus:border-slate-800' />
        <div className='hidden lg:flex bg-gradient-to-tr from-blue-400 to-violet-500  p-[11px] rounded-xl cursor-pointer text-2xl relative shadow-custom right-11'><FiSearch className='text-black'/></div>
  </div>
  <div class="navbar-end    hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <Link to='game-catalog' className='border-2 border-slate-800 flex items-center p-3  py-2     text-slate-400 rounded-xl text-lg mr-5 capitalize transition-all active:scale-105 hover:text-slate-100 hover:border-slate-400 '> <TbDeviceGamepad2 className='mr-2 text-white'/>games</Link>
        <Link to='login' className='border-2 border-slate-800 flex items-center p-3 py-2 text-slate-400 rounded-xl text-lg mr-5  capitalize transition-all active:scale-105 hover:text-slate-100 hover:border-slate-400'><MdOutlinePersonOutline className='mr-2 text-white'/>login</Link>
         <Link to='sign-up' className='border-2 border-slate-800 flex items-center p-3  py-2     text-slate-400 rounded-xl text-lg mr-16 capitalize transition-all active:scale-105 hover:text-slate-100 hover:border-slate-400'> <FiLogIn className='mr-2 text-white'/>sign up</Link>
    </ul>
  </div>
  <div dir='rtl' class="dropdown ml-auto  ">
      <label tabindex="0" class="btn btn-ghost lg:hidden px-2">
    <RiMenuFill className='h-8 w-8'/>
      </label>
      <ul tabindex="0"  class="menu menu-compact dropdown-content  mt-3 bg text-white p-2 shadow card-bg rounded-box w-52">
      
      <Link to='game-catalog'  className='h cursor-pointer active:scale-105 bg-child mb-2  text flex items-center px-3 py-[5px] rounded-md transition-all'>
        <TbDeviceGamepad2 className='w-6 h-6'/>
        <p className='capitalize text-lg font-medium mr-auto select-none'>games</p>
        </Link>
        <Link to='sign-up'  className='h  cursor-pointer active:scale-105 bg-child mb-2  text flex items-center px-3 py-[5px] rounded-md transition-all'>
        <MdOutlinePersonOutline className='w-6 h-6'/>
        <p className='capitalize text-lg font-medium mr-auto select-none'>sign up</p>
        </Link>
        <Link to='login' className=' hover:bg-gray-300 cursor-pointer bg-child active:scale-105  mb-2  text flex items-center px-3 py-[5px] rounded-md transition-all'>
        <FiLogIn className='w-6 h-6'/>
        <p className='capitalize text-lg font-medium mr-auto select-none'>login</p>
        </Link>
        <hr  className='bg-gray-500  h-[3px] rounded-md'/>
        <Link to='about-us'  className=' h cursor-pointer active:scale-105 bg-child mt-2  text flex items-center px-3 py-[5px] rounded-md transition-all'>
        <AiOutlineTeam className='w-6 h-6'/>
        <p className='capitalize text-lg font-medium mr-auto select-none'>about us</p>
        </Link>
      </ul>
    </div>
  
</div>  
  )
}

export default NavBar