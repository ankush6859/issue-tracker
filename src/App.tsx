import React from 'react';
import './App.scss';
import Login from './components/Login/Login';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import SideNav from './components/SideNav/SideNav';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <ProjectBoard />
    </div>
  );
}

export default App;
