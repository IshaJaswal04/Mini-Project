import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

function Product() {
  return (
    <div className ="product">
        <div className="product-header">
            <h1>DETERMINE YOUR PRODUCT'S SUPPORT ELIGIBILITY</h1>
        </div>
        <div className = "product-content">
            <p>Register your product to take advantage of all your support options, using our MyCanon Account System. It’s as simple as...

</p>
        </div>
        
        <div className="sign-in-container">
        <div className="sign-in">
            <img src="/images/user-icon.webp" alt="Sign In Icon" className="sign-in-icon"/>
            <span className="sign-in-step">Step 1</span>
            <span className="sign-in-text">Sign into your MyCanon account or create a new account</span>
        </div>

        <span className="sign-in-divider"></span>

        <div className="sign-in">
            <img src="/images/laptop-icon.webp" alt="Sign In Icon" className="sign-in-icon"/>
            <span className="sign-in-step">Step 2</span>
            <span className="sign-in-text">Register your product and track all your Canon gear</span>
        </div>

        <span className="sign-in-divider"></span>

        <div className="sign-in">
            <img src="/images/Icon-awesome-check-circle.webp" alt="Sign In Icon" className="sign-in-icon"/>
            <span className="sign-in-step">Step 3</span>
            <span className="sign-in-text">Select registered product to view your support options</span>
        </div>
        </div>

        <div className="sign-in-button-container">
            <button className="sign-button">SIGN IN</button>
        </div>
        
        <div className="account">
            <span className="account-text">or</span>
            <Link to="#" className="account-link">Create Account</Link>
        </div>



    </div>
  )
}

export default Product