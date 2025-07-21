import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
        <div>
            <button className ="banner-button">CLICK HERE FOR SUPPORT NUMBERS BY GROUP</button>
        </div>

        <div className="banner-box">
            <img src="/images/lightbulb-icon.webp" alt="box-image" className="box-image"></img>
            <h2 className="box-title">Note from Canon</h2>
            <p className="box-text">Avoid Potential Costly Third-Party Scams and Make Sure to Get Official Canon Product Support!</p>
            <button className="box-button">LEARN MORE</button>

        </div>

       
        <div className="box-container">
        <div className="box">
            <span className="box-container-title">GET SUPPORT</span>
            <span className="box-container-text">Need help with your product? Let us help you find what you need.</span>
            <button className="container-button">Product Support</button>
        </div>

        <span className="box-divider"></span>

        <div className="box">
            <span className="box-container-title">NEED IT FIRST</span>
            <span className="box-container-text">Sign up for up-to-the-minute Canon News, Sales and Deals.</span>
            <button className="container-button">SUBSCRIBE</button>
        </div>

        <span className="box-divider"></span>

        <div className="box">
            <span className="box-container-title">LEARN WITH CANON</span>
            <span className="box-container-text">Discover great new ways to enjoy your products with exclusive articles, training and events.</span>
            <button className="container-button">LEARN MORE</button>
        </div>
        </div>
        
    </div>
  )
}

export default Banner