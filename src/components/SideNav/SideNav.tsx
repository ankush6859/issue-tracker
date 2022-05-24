import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

import './SideNav.scss';

const SideNav = () => {
  const [currentNav, setCurrentNav] = useState(1);

  return (
    <div id="sideNav">
      <div className="logo">
        <img src={logo} alt="Tracker" />
      </div>
      <div className="sidenav-links">
        <ul>
          <li
            className={currentNav === 1 ? 'active' : ''}
            onClick={() => setCurrentNav(1)}
          >
            <span className="side-rectangle"></span>
            <span>PROJECT BOARD</span>
          </li>
          <li
            className={currentNav === 2 ? 'active' : ''}
            onClick={() => setCurrentNav(2)}
          >
            <span className="side-rectangle"></span>
            <span>CREATE ISSUES</span>
          </li>
          <li
            className={currentNav === 3 ? 'active' : ''}
            onClick={() => setCurrentNav(3)}
          >
            <span className="side-rectangle"></span>
            <span>CREATE PROJECT</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
