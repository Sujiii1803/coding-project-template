
import React, { useState } from 'react';
import ProductList from './ProductList'; // Keep this one
import CartItem from './CartItem';       // Keep this one
import Navbar from './Navbar';           // Keep this one

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* Assuming a Navbar component */}
      <Navbar onCartClick={handleShowCart} />

      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;