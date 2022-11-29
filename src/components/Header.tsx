import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';
import AuthButtonsContainer from './AuthButtonsContainer';
import { AppRoutes } from '../constants/routes';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import HomeIcon from '@mui/icons-material/Home';
import ModalWindow from './ModalWindow/ModalWindow';

const fontSize = '1.8rem';

interface props {
  isLogin: boolean;
}

const Header: FC<props> = ({ isLogin }) => {
  const navigate = useNavigate();

  const onMainPage = (): void => navigate(AppRoutes.WELCOME);
  const onProfilePage = (): void => navigate(AppRoutes.PROFILE);
  const onBoardsPage = (): void => navigate(AppRoutes.BOARDS);

  return (
    <AppBar position="static" component="header">
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button color="inherit" sx={{ fontSize: '1.8rem' }} onClick={onMainPage}>
            <HomeIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
            Главная
          </Button>
          <div>
            {isLogin && (
              <>
                <Button color="inherit" sx={{ fontSize: '1.8rem' }} onClick={onBoardsPage}>
                  <DashboardRoundedIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
                  Доски
                </Button>
                <Button color="inherit" sx={{ fontSize: '1.8rem' }} onClick={onProfilePage}>
                  <AccountBoxRoundedIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
                  Профиль
                </Button>
              </>
            )}
          </div>
          <div>
            <LanguageSwitcher fontSize={fontSize} />
            <AuthButtonsContainer isLogin={isLogin} fontSize={fontSize} />
          </div>
        </Toolbar>
      </Container>
      <ModalWindow />
    </AppBar>
  );
};

export default Header;
