import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";


  const Footer = () => {
    const iconSize = 30; // Set the desired size in pixels
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h1 className="footer-title">All Right Reserved &copy; Jainendra Tripathy</h1>
          <p className="footer-subtitle">
            <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/policy">Privacy Policy</Link>
          </p>
        </div>
        <div className="footer-column">
          <div className="newsletter-box">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your Email"
            />
            <button className="newsletter-submit">Login</button>
          </div>
        </div>
        <div className="social-icons">
          <IoLogoInstagram size={iconSize} />
          <FaFacebook size={iconSize} />
          <TbWorldWww size={iconSize} />
          <FaLinkedin size={iconSize} />
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
