// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Store from './pages/Store';
import User from './pages/User';
import Library from './pages/Library';
import Community from './pages/Community';
import Support from './pages/Support';
import News from './pages/News';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/:userId' element={<User />} />
        <Route path='/library' element={<Library />} />
        <Route path='/community' element={<Community />} />
        <Route path='/support' element={<Support />} />
        <Route path='/News' element={<News />} />
      </Routes>
    </>
  );
}

export default App;


