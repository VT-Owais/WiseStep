import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { CartContext } from '../Context/CartContext'; 
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get cart items from context
  const { cartItems } = useContext(CartContext);
  
  // Calculate total quantity of items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img 
          src="./src/assets/images/main-side/logo.png"
          alt="SD Shop Logo"
          style={{ filter: "brightness(0) invert(1)" }} 
        />
      </div>
           
      <div 
        className={`menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={isOpen ? 'active' : ''}>
        <ul>
          <li>
            <Link 
              to="/"
              onClick={() => setIsOpen(false)}
              className={isActiveLink('/') ? 'active-link' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/trending-shoes"
              onClick={() => setIsOpen(false)}
              className={isActiveLink('/trending-shoes') ? 'active-link' : ''}
            >
              Trending Shoes
            </Link>
          </li>
          <li>
            <Link 
              to="/limited-edition"
              onClick={() => setIsOpen(false)}
              className={isActiveLink('/limited-edition') ? 'active-link' : ''}
            >
              Limited Edition
            </Link>
          </li>
          <li>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={isActiveLink('/contact') ? 'active-link' : ''}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <Link to="/login"><FiUser className="icon" /></Link>
        <Link to="/cart">
          <FiShoppingCart className="icon"/>
        </Link> 
        <div className="nav-cart-count">{cartItemCount}</div>
      </div>
    </div>
  );
};

export default Navbar;