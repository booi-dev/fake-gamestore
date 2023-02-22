import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layouts/Header';
// import MainBody from './layouts/MainBody';
// import Footer from './layouts/Footer';

import Store from './pages/Store';
import Account from './pages/Account';
import MyGames from './pages/MyGames';
import Browse from './pages/Browse';
import Feature from './pages/Feature';
import GameView from './components/game/GameView';
import Checkout from './components/checkout/Checkout';

import './App.scss';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <div className='main-body'>
          <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/account' element={<Account />} />
            <Route path='/mygames' element={<MyGames />} />
            <Route path='/browse' element={<Browse />} />
            <Route path='/feature' element={<Feature />} />
            <Route path='/game/:gameId' element={<GameView />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;


