import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; 


const plantsArray = [
  {
    name: 'Snake Plant',
    image: 'path/to/snake-plant.jpg', // Replace with actual image path
    description: 'Produces oxygen at night, improving air quality',
    cost: '$15',
    category: 'Air Purifying Plants',
  },
  {
    name: 'Spider Plant',
    image: 'path/to/spider-plant.jpg', // Replace with actual image path
    description: 'Filters formaldehyde and xylene from the air',
    cost: '$12',
    category: 'Air Purifying Plants',
  },
  {
    name: 'Peace Lily',
    image: 'path/to/peace-lily.jpg', // Replace with actual image path
    description: 'Removes mold spores and purifies the air',
    cost: '$18',
    category: 'Air Purifying Plants',
  },
  // Add more plant objects as needed
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({}); // State to track added products

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true, // Set the plant name as key with value true
    }));
  };

  return (
    <div className="product-grid">
      <h2>Air Purifying Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {plantsArray.map((plant) => (
          <div key={plant.name} className="product-card" style={{ margin: '10px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center', width: '250px' }}>
            <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p><strong>{plant.cost}</strong></p>
            <button
              onClick={() => handleAddToCart(plant)}
              disabled={addedToCart[plant.name]} // Disable button if already added
              style={{
                backgroundColor: addedToCart[plant.name] ? 'gray' : '#4CAF50',
                color: 'white',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '5px',
                cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer',
                marginTop: '10px'
              }}
            >
              {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;