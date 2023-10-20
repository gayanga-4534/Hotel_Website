import React from "react";
import "./FooterSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const CurvedBelt = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-sub-container">
          <div className="">
            <h1 className="title">Corporate information</h1>
            <h5 className="text">Cinnamon Hotels & Resorts</h5>
            <h5 className="text">John Keells Group</h5>
          </div>

          <div className="">
            <h1 className="title">Blogs</h1>
            <h5 className="text">Cinnamon Ublog</h5>
          </div>

          <div className="">
            <h1 className="title">Careers</h1>
            <h5 className="text">Careers</h5>
          </div>
        </div>

        <div className="footer-sub-container">
          <div className="">
            <h1 className="title">News and Awards</h1>
            <h5 className="text">News</h5>
            <h5 className="text">Awards</h5>
          </div>

          <div className="">
            <h1 className="title">Corporate Governance</h1>
            <h5 className="text">CSR</h5>
          </div>
        </div>

        <div className="footer-sub-container">
          <div className="">
            <h1 className="title">Data Privacy & Security Policy</h1>
            <h5 className="text">Terms & Conditions</h5>
            <h5 className="text">Privacy Statement</h5>
          </div>

          <div className="">
            <h1 className="title">Get In Touch</h1>
            <h5 className="text">Corporate Contact Information</h5>
            <h5 className="text">Hotel Contact Information</h5>
          </div>

          <div className="">
            <h1 className="title">Follow Us</h1>

            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>

      <div className="email-section">
        <h1 className="title">Get Cinnamon in your inbox</h1>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="email-input"
        />
        <h5 className="text">By checking this box</h5>
      </div>

      <div className="curved-belt">
        <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="500">
          <path
            d="M-30 250 Q 300 760, 1400 200"
            fill="transparent"
            stroke="rgb(141, 109, 170)"
            strokeWidth="70"
          />
        </svg>
      </div>
    </>
  );
};

export default CurvedBelt;
