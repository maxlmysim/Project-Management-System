import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';
import AuthButtonsContainer from './AuthButtonsContainer';
import ProfileButton from './ProfileButton';
import MainButton from './MainButton';
import BoardsButton from './BoardsButton';
import { AppRoutes } from '../constants/routes';
import ModalWindow from './ModalWindow';

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
          <BoardsButton onClick={onBoardsPage}>Доски</BoardsButton>
          <ProfileButton onClick={onProfilePage}>Профиль</ProfileButton>
          <LanguageSwitcher fontSize={fontSize} />
          <AuthButtonsContainer isLogin={isLogin} fontSize={fontSize} />
        </Toolbar>
      </Container>
      <ModalWindow />
    </AppBar>
  );
};

export default Header;
