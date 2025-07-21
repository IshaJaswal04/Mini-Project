import React from 'react'
import './Support.css'

function Support() {
  return (
    <div className="support">
        <div className="support-header">
            <h1>ADDITIONAL SUPPORT RESOURCES</h1>
        </div>
        <div className = "container">
        <div className = "Support-container">
            <div className="resource">
                <img src="/images/community-40x40.webp" alt="resource-icon" className="resource-icon" />
                <h2 className="text">Join our community to ask questions, share knowledge, and connect with others.</h2>
                <button className="resource-button">CANON COMMUNITY </button>
             </div>

             <span className="support-divider"></span>

              <div className="resource">
                <img src="/images/how-to-videos.webp" alt="resource-icon" className="resource-icon" />
                <h2 className="text">Get to know your product. Troubleshoot and learn to use your product with video tutorials.</h2>
                <button className="resource-button">HOW-TO-VIDEOS </button>
             </div>

             <span className="support-divider"></span>

              <div className="resource">
                <img src="/images/knowledge-base.webp" alt="resource-icon" className="resource-icon" />
                <h2 className="text">Find answers and perform your own troubleshooting with the knowledge base.</h2>
                <button className="resource-button">KNOWLEDGE BASE</button>
             </div>
        </div>
        <hr></hr>

        <div className = "Support-container1">
            <div className="resource">
                <img src="/images/drivers-and-downloads.webp" alt="resource-icon" className="resource-icon" />
                <h2 className="text">Access the drivers, software and firmware downloads for your Canon product.</h2>
                <button className="resource-button1">DRIVERS & DOWNLOADS </button>
             </div>
             <span className="support-divider"></span>

             <div className="resource">
                <img src="/images/manuals.webp" alt="resource-icon" className="resource-icon" />
                <h2 className="text">Access the manuals for your Canon Product.</h2>
                <button className="resource-button1">MANUALS</button>
             </div>
             <span className="support-divider"></span>

             <div className="resource">
                <img src="/images/ink-finder.webp" alt="resource-icon" className="resource-icon" />
                <h2 className="text">Use Canon's Ink and Toner Finder to find compatible ink tanks and toner cartridges for your Canon inkjet or laser printer.</h2>
                <button className="resource-button2">INK FINDER</button>
             </div>
        </div>

        
        </div>


    </div>
  )
}

export default Support