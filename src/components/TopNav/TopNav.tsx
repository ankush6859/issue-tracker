import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../services/hooks/hooks';
import { RootState } from '../../services/store/store';

import './TopNav.scss';

const TopNav = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { t } = useTranslation();
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} id="topNav">
      <div className="main_topnav">
        <div className="search">
          <span className="search_bar">
            <SearchIcon />
            <input type="text" placeholder={t('top_search')} />
          </span>
        </div>
        <div className="user">
          <span className="user_name">{user?.name}</span>
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
