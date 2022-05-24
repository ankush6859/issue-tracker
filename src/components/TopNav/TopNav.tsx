import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet } from 'react-router-dom';

import './TopNav.scss';

const TopNav = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} id="topNav">
      <div className="main_topnav">
        <div className="search">
          <span className="search_bar">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </span>
        </div>
        <div className="user">
          <span className="user_name">Ankush Sharma</span>
          <span className="user_image">
            <PersonIcon />
          </span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TopNav;
