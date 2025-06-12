import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-logo">
            <img src="./src/assets/images/main-side/logo.png"
              style={{ filter: "brightness(0) invert(1)" }}
              alt="" />
          </h3>
          <p className="footer-description">
            Premium footwear for every step of your journey. Quality, comfort, and style combined.
          </p>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/trending-shoes">Trending-Shop</Link></li>
            <li><Link to="/limited-edition">Limited-Edition</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><Link to="/returns">Returns Policy</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/size-guide">Size Guide</Link></li>
            <li><Link to="/payment">Payment Options</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><MdEmail /> support@stepwise.com</p>
            <p><MdPhone /> +91 9988776621</p>
            <p><MdLocationOn /> 123 Shoe Street, Footwear City</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StepWise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
