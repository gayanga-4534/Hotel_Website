// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (

<>
    <nav className="navbar1">
      <div className="icon">
          <img src={"data:image/png;base64,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"} alt="Image Icon"  style={{
          width: '40px', 
          height: '50px',
         
        }} />
    <h1>SHANGRI-LA</h1>
      </div>
  
    <ul className="nav-links">
   
   
      <li>   <FontAwesomeIcon icon={faUser} /> <a href="/">Sign In |</a></li>
      <li><a href="/about"> Join Now |</a></li>
      <li><a href="/services"> Find Reservations |</a></li>
      <li> <FontAwesomeIcon icon={faGlobe} /><a href="/contact"> English |</a></li>
      <li><a href="/LKR"> LKR |</a></li>
      <li><FontAwesomeIcon icon={faMobileScreen} /></li>
    </ul>
  </nav>



    <nav className="navbar">

      <div className="sub-nav-titles">
        <div className="sub-nav-title">ABOUT</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>


      <div className="sub-nav-titles">
        <div className="sub-nav-title">ROOMS & SUITES</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className="sub-nav-titles">
        <div className="sub-nav-title">DINER</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className="sub-nav-titles">
        <div className="sub-nav-title">EXPERIENCE</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className="sub-nav-titles">
        <div className="sub-nav-title">EVENTS</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className="sub-nav-titles">
        <div className="sub-nav-title">GALLARY</div>
        {/* <FontAwesomeIcon icon={faChevronDown} /> */}
      </div>


      <div className="sub-nav-titles">
        <div className="sub-nav-title">OFFERS</div>
        {/* <FontAwesomeIcon icon={faChevronDown} /> */}
      </div>

      <div className="sub-nav-titles">
        <div className="sub-nav-title">MORE</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className="sub-nav-titles">
        <div className="sub-nav-title-btn">FIND A HOTEL</div>

      </div>
    </nav>
    </>
  );
}

export default Navbar;
