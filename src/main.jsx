import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AccountProvider } from './context/useAccount';
import { WishCartProvider } from './context/useWishCart';
// import { HeaderRefProvider } from './layouts/Header';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AccountProvider>
        <WishCartProvider>
          {/* <HeaderRefProvider> */}
          <App />
          {/* </HeaderRefProvider> */}
        </WishCartProvider>
      </AccountProvider>
    </Router>
  </React.StrictMode>,
);
