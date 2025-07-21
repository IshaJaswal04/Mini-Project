import React from 'react'
import './Block.css'
import { Link } from 'react-router-dom'
function Block() {
  return (
    <>
    <div className = "block">
        <Link to='#' className="block-link">Canon Homepage</Link>
        <span className="block-divider">/</span>
        <Link to='#' className="block-link">Contact Us</Link>
        <span className="block-divider">/</span>
        <Link to='#' className="block-link">Canon Support</Link>
    </div>

    <div className="block-banner">
        <h1 className="block-banner-1">Support Contact Us</h1>
    </div>
    </>
  )
}

export default Block