import { Routes, Route } from 'react-router-dom';
import Store from '../pages/Store';
import User from '../pages/User';
import Library from '../pages/Library';
import MyGames from '../pages/MyGames';
import Support from '../pages/Support';
import News from '../pages/News';
import GameView from '../components/game/GameView';
import Checkout from '../components/checkout/Checkout';

function MainBody() {
  return (
    <div className='main-body'>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/:userId' element={<User />} />
        <Route path='/library' element={<Library />} />
        <Route path='/mygames' element={<MyGames />} />
        <Route path='/support' element={<Support />} />
        <Route path='/news' element={<News />} />
        <Route path='/game/:gameId' element={<GameView />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default MainBody;