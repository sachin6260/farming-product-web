
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './component/Navbar'
 import Home from './component/Home';
 import AboutUs from './component/AboutUs'
import Services from './component/Services';
import Products from './component/Products';
import Dealers from './component/Dealers';
import Farmers from './component/Farmers';
import GotoTop from './component/GotoTop';
import Footer from './component/Footer';


const App = () => {
  return (
    <div>
    
       <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/dealers' element={<Dealers/>}/>
        <Route path='/farmers' element={<Farmers/>}/>

        

       </Routes> 
       <Footer></Footer>
       <GotoTop></GotoTop>

      </BrowserRouter>

    </div>
  )
}

export default App














 