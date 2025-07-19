import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Paradise Nursery</Link>
      <Link to="/plants" className="nav-link">Plants</Link>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart size={24} />
      </Link>
    </nav>
  );
}

export default Navbar;
