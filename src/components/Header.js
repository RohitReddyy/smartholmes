// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">SmartHolmes</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
