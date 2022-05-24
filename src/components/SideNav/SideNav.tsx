import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <li className={currentNav === 1 ? 'active' : ''}>
            <Link to={'/'} onClick={() => setCurrentNav(1)}>
              <span className="side-rectangle"></span>
              <span>PROJECT BOARD</span>
            </Link>
          </li>
          <li className={currentNav === 2 ? 'active' : ''}>
            <Link to={'create-issue'} onClick={() => setCurrentNav(2)}>
              <span className="side-rectangle"></span>
              <span>CREATE ISSUES</span>
            </Link>
          </li>
          <li className={currentNav === 3 ? 'active' : ''}>
            <Link to={'create-issue'} onClick={() => setCurrentNav(3)}>
              <span className="side-rectangle"></span>
              <span>CREATE PROJECT</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
