import React from 'react';
import './Cart.css';

function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-overlay">
        <h2>Total Cart Amount: $</h2>
        <button className="green-btn">Continue Shopping</button>
        <button className="green-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
