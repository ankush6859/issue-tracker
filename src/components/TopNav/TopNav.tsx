import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../services/hooks/hooks';
import { RootState } from '../../services/store/store';
import { logOut } from '../../services/reduxSlice/authSlice';

import './TopNav.scss';

const TopNav = () => {
  const dispatch = useAppDispatch();
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
            <span
              className="logout_button"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Log Out
            </span>
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
