
"use client"
import React, { useState } from 'react';
import './ResponsiveNavbar.css'; // Import the CSS

const ResponsiveNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile-navbar">
      <div className="nav-header">
        <h1 className="logo">Zencaid</h1>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {isOpen && (
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="">Emergency</a></li>
        </ul>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;