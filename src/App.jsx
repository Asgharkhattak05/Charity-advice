import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from "./pages/Aboutus"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Donate from './components/Donate'
const App = () => {


  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donate' element={<Donate/>} />

      </Routes>
    </>
  )
}

export default App