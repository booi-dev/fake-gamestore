import { Routes, Route } from 'react-router-dom';
import Store from '../pages/Store';
import User from '../pages/User';
import Library from '../pages/Library';
import Community from '../pages/Community';
import Support from '../pages/Support';
import News from '../pages/News';
import GameView from '../components/game/gameView';

function MainBody() {
  return (
    <div className='main-body'>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/:userId' element={<User />} />
        <Route path='/library' element={<Library />} />
        <Route path='/community' element={<Community />} />
        <Route path='/support' element={<Support />} />
        <Route path='/news' element={<News />} />
        <Route path='/game/:gameId' element={<GameView />} />
      </Routes>
    </div>
  );
}

export default MainBody;