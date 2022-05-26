import React, { useState } from 'react';
import i18n from '../../i18n';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import './SideNav.scss';

const SideNav = () => {
  const [currentNav, setCurrentNav] = useState(1);
  const [currLang, setCurrLang] = useState('en');
  const { t } = useTranslation();

  const languageHandler = () => {
    currLang === 'en' ? i18n.changeLanguage('hi') : i18n.changeLanguage('en');
    currLang === 'en' ? setCurrLang('hi') : setCurrLang('en');
  };
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
              <span>{t('side_nav_1')}</span>
            </Link>
          </li>
          <li className={currentNav === 2 ? 'active' : ''}>
            <Link to={'create-issue'} onClick={() => setCurrentNav(2)}>
              <span className="side-rectangle"></span>
              <span>{t('side_nav_2')}</span>
            </Link>
          </li>
          <li className={currentNav === 3 ? 'active' : ''}>
            <Link to={'create-project'} onClick={() => setCurrentNav(3)}>
              <span className="side-rectangle"></span>
              <span>{t('side_nav_3')}</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="language_changer">
        <TranslateIcon />
        <span onClick={languageHandler}>
          Change to
          {currLang === 'en' ? ' Hindi' : ' English'}
        </span>
      </div>
    </div>
  );
};

export default SideNav;
