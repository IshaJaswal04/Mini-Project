import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Welcome from '../Components/Welcome/Welcome' 
import ProductType from '../Components/Product/ProductType'
import './Epson.css'
import SupportLinks from '../Components/Support/SupportLinks'
import Footer from '../Components/Footer/Footer'

function Epson() {
  return (
    <div className="Epson">
        <Navbar/>
        <Welcome/>
        <ProductType />
        <SupportLinks/>
        <Footer/>
   </div>
  )
}

export default Epson