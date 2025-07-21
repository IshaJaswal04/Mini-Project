import React from 'react'
import './Welcome.css'

function Welcome() {
  return (
    <div className="Welcome">
       <div className="Title">Welcome to Epson Support</div>
       <div className="Subtitle">The Official Support Site for Epson® Products</div>

       <div className="search-section">
         <div className="search-title">Search By Product Name</div>
         <div className="search-bar-container">
           <span className="search-icon" role="img" aria-label="search">🔍</span>
           <input
             className="search-input"
             type="text"
             placeholder="Enter Product Name"
           />
           <button className="search-button">Search</button>
         </div>
         <div className="search-examples">
           Examples: <a href="#">ET-2800</a>, <a href="#">WorkForce ES-500W</a>, <a href="#">EH-QL3000W</a>, <a href="#">macOS 15</a>
         </div>
       </div>
        <hr/>
    </div>
  )
}

export default Welcome