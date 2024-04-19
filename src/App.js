import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages.js/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Contact from './Pages.js/Contact'
import AboutUs from './Pages.js/AboutUs'
import Footer from './Components/Footer'
import Layout from './Components/Layout'

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
   
      <Routes>
     <Route path="/" element={
      <>
      <Layout>
      <Home/>
      </Layout>
      </>}/>

      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
     
      </Routes>

     
      
      </BrowserRouter>
    
    </div>
  )
}

export default App
