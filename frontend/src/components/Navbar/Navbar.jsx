import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setIsSidebarOpen(false); // Close the sidebar when a menu item is clicked
  };

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul className="navbar-mid">
        <Link to='/'>
        <li onClick={() => handleMenuClick('home')} className={menu === 'home' ? 'active' : ''}>Home</li>
        </Link>
        <li onClick={() => handleMenuClick('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</li>
        <li id='sell' onClick={() => handleMenuClick('sell')} className={menu === 'sell' ? 'active' : ''}>Post Your Property</li>
      </ul>
      <div className="navbar-right">
        <Link to= '/auth'>
        <button>Sign In</button>
        </Link>
      </div>
      <div className="hamburger-menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li onClick={() => handleMenuClick('home')} className={menu === 'home' ? 'active' : ''}>Home</li>
            <li onClick={() => handleMenuClick('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</li>
            <li onClick={() => handleMenuClick('sell')} className={menu === 'sell' ? 'active' : ''}>Post Your Property</li>
            <li><button>Sign In</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
