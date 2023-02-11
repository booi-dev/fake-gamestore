import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/useCart';
import { WishlistProvider } from './context/useWishlist';
import { WishCartProvider } from './context/useWishCart';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <WishCartProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </WishCartProvider>
    </Router>
  </React.StrictMode>,
);
