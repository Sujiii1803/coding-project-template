import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice'; // Adjust path if needed

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.cost, 0).toFixed(2);
  };

  const handleContinueShopping = () => {
    onContinueShopping();
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const calculateTotalCost = (item) => {
    return (item.quantity * item.cost).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p>Your cart is empty.</p>
        <button
          onClick={handleContinueShopping}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Shopping Cart</h2>
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Total Cart Amount: ${calculateTotalAmount()}</p>
      </div>

      {cartItems.map((item) => (
        <div key={item.name} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0' }}>
          <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginRight: '20px' }} />
          <div style={{ flexGrow: 1 }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.cost.toFixed(2)}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
              <button onClick={() => handleDecrement(item)} style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>-</button>
              <span style={{ margin: '0 10px' }}>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)} style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>+</button>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontWeight: 'bold' }}>Subtotal: ${calculateTotalCost(item)}</p>
            <button onClick={() => handleRemove(item.name)} style={{ backgroundColor: '#dc3545', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <button
          onClick={handleContinueShopping}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1em'
          }}
        >
          Continue Shopping
        </button>
        <button
          onClick={handleCheckoutShopping}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1em'
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;