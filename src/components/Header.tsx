import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {AppBar, Container, Toolbar} from '@mui/material';
import { useAppSelector } from '../hooks/storeHooks';
import { authSelector } from '../store/authSlice';
import LanguageSwitcher from './LanguageSwitcher';
import AuthButtonsContainer from './AuthButtonsContainer';
import ProfileButton from "./ProfileButton";
import MainButton from "./MainButton";
import BoardsButton from "./BoardsButton";

const fontSize = '1.8rem';

const Header: FC = () => {
  const navigate = useNavigate();
  const { isLogin, userId } = useAppSelector(authSelector);
  const buttons = {
    main: {
      ru: 'Главная',
      en: 'Main',
    },
    boards: {
      ru: 'Доски',
      en: 'Boards',
    },
    profile: {
      ru: 'Профиль',
      en: 'Profile',
    }
  }

  useEffect(() => {
    if (userId) {
      navigate('/');
    }
  }, [userId]);

  const onMainPage = (): void => navigate('/');
  const onProfilePage = (): void => navigate('/profile');
  const onBoardsPage = (): void => navigate('/boards');

  return (
    <AppBar position="static" component="header">
      <Container>
        <Toolbar>
          <MainButton onClick={onMainPage}>{buttons.main.ru}</MainButton>
          <BoardsButton onClick={onBoardsPage}>{buttons.boards.ru}</BoardsButton>
          <ProfileButton onClick={onProfilePage}>{buttons.profile.ru}</ProfileButton>
          <AuthButtonsContainer isLogin={isLogin} fontSize={fontSize} />
          <LanguageSwitcher fontSize={fontSize} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
