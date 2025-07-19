// Navbar.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = ({ onCartClick }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/path/to/paradise-nursery-logo.png" alt="Paradise Nursery Logo" style={{ height: '30px', marginRight: '10px' }} />
        <span>Paradise Nursery</span>
        <span style={{ marginLeft: '10px' }}>Where Green Meets Serenity</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>Plants</a> {/* Or use React Router Link */}
        <div onClick={onCartClick} style={{ cursor: 'pointer', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
          🛒 <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>({calculateTotalQuantity()})</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;