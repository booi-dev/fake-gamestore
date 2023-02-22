import React from 'react';
import ReactDOM from 'react-dom/client';
import { AccountProvider } from './context/useAccount';
import { WishCartProvider } from './context/useWishCart';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccountProvider>
      <WishCartProvider>
        <App />
      </WishCartProvider>
    </AccountProvider>
  </React.StrictMode>,
);

// main routing is in MainBody component. 