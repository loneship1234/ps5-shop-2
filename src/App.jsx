import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main';
import Carusel from './components/Carusel';
function App() {
  return (
    <div className='text-white'>
<NavBar/>
<Main/>
<p className='my-3 ml-32 font-normal tracking-wide select-none capitalize text-3xl '>discover games</p>
<Carusel/>
    </div>
  )
}

export default App