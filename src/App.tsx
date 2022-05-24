import React from 'react';
import SideNav from './components/SideNav/SideNav';
import TopNav from './components/TopNav/TopNav';

import './App.scss';

function App() {
  return (
    <div className="main">
      <SideNav />
      <TopNav />
    </div>
  );
}

export default App;
