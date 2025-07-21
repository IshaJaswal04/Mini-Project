import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Block from '../Components/Block/Block'
import Product from '../Components/Product/Product'
import Support from '../Components/Support/Support'
import Banner from '../Components/Banner/Banner'
import './LandingPage.css'
import Footer from '../Components/Footer/Footer'
function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Block/>
        <Product/>
        <Support/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default LandingPage