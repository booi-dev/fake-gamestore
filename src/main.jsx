import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AccountProvider } from './context/useAccount';
import { WishCartProvider } from './context/useWishCart';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AccountProvider>
        <WishCartProvider>
          <App />
        </WishCartProvider>
      </AccountProvider>
    </Router>
  </React.StrictMode>,
);
