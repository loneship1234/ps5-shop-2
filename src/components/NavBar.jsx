import React from 'react'
import Logo from '../img/ps5-logo.png';
import {FiLogIn,FiSearch} from 'react-icons/fi'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {TbDeviceGamepad2} from 'react-icons/tb'


function NavBar() {
  return (
    <div className=' flex h-28 flex-row items-center justify-end'>
        <img src={Logo} alt="" className='w-48 mr-auto ml-32' />
        <input type="text" placeholder='Search' className='mr-0 w-1/3 h-[43px]  pl-6 rounded-2xl border-2 border-slate-800 bg-transparent focus:outline-slate-800 focus:border-slate-800' />
        <div className='bg-gradient-to-tr from-blue-400 to-violet-500  p-[11px] rounded-xl cursor-pointer text-2xl relative shadow-custom right-11'><FiSearch className='text-black'/></div>
        <button className='border-2 border-slate-800 flex items-center p-3  py-2     text-slate-400 rounded-xl text-lg mr-5 capitalize transition-all active:scale-105 hover:text-slate-100 hover:border-slate-400 '> <TbDeviceGamepad2 className='mr-2 text-white'/>games</button>
        <button className='border-2 border-slate-800 flex items-center p-3 py-2 text-slate-400 rounded-xl text-lg mr-5  capitalize transition-all active:scale-105 hover:text-slate-100 hover:border-slate-400'><MdOutlinePersonOutline className='mr-2 text-white'/>login</button>
        <button className='border-2 border-slate-800 flex items-center p-3  py-2     text-slate-400 rounded-xl text-lg mr-16 capitalize transition-all active:scale-105 hover:text-slate-100 hover:border-slate-400'> <FiLogIn className='mr-2 text-white'/>sign up</button>

    </div>
  )
}

export default NavBar