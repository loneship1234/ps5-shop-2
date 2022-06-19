import React from 'react'
// route
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
// 
import HomePage from './Pages/HomePage';
import NavBar from './Pages/NavBar'
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Page404 from './Pages/Page404';
import GameCatalog from './Pages/GameCatalog'

function App() {
  return (
   <Router>
<NavBar/>
    <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/game-Catalog' element={<GameCatalog/>}/>
<Route path='/about-us' element={<AboutUs/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/sign-up' element={<SignUp/>}/>
<Route path='*' element={<Page404/>}/>
    </Routes>
   </Router>
  )
}

export default App