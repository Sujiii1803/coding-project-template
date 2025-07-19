// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { Provider } from 'react-redux';
import store from './store'; // Path to your store.js
import App from './App'; // Your main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);