import { Routes, Route } from 'react-router-dom';
import Store from '../pages/Store';
import Account from '../pages/Account';
import MyGames from '../pages/MyGames';
import BrowseGames from '../pages/BrowseGames';
import Support from '../pages/Support';
import News from '../pages/News';
import GameView from '../components/game/GameView';
import Checkout from '../components/checkout/Checkout';

function MainBody() {
  return (
    <div className='main-body'>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/account' element={<Account />} />
        <Route path='/mygames' element={<MyGames />} />
        <Route path='/browse' element={<BrowseGames />} />
        <Route path='/support' element={<Support />} />
        <Route path='/news' element={<News />} />
        <Route path='/game/:gameId' element={<GameView />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default MainBody;