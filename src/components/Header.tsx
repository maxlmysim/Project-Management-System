import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';
import AuthButtonsContainer from './AuthButtonsContainer';
import MainButton from './MainButton';
import { AppRoutes } from '../constants/routes';
import ModalWindow from './ModalWindow';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

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
        <Toolbar>
          <MainButton onClick={onMainPage}>Главная</MainButton>
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
          <LanguageSwitcher fontSize={fontSize} />
          <AuthButtonsContainer isLogin={isLogin} fontSize={fontSize} />
        </Toolbar>
      </Container>
      <ModalWindow />
    </AppBar>
  );
};

export default Header;
