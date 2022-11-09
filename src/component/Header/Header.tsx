import React, { FC } from 'react';
import style from './Header.module.css';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AppLogo = AppRegistrationIcon;
const AppLogoStyle = { fontSize: '5rem' };
const UserLogo = AccountCircleIcon;
const UserLogoStyle = {
  fontSize: '4.2rem',
  color: 'white',
};

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.appLogo}>
        <AppLogo sx={AppLogoStyle} />
        RS Project Management App
      </div>
      <div className={style.navOverlay}>
        <UserLogo sx={UserLogoStyle} />
        <button className={style.changeLanguage}>RU</button>
      </div>
    </header>
  );
};

export default Header;
