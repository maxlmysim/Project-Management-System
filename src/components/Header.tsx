import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';
import AuthButtonsContainer from './AuthButtonsContainer';

const fontSize = '1.8rem';

interface props {
  isLogin: boolean;
}

const Header: FC<props> = ({ isLogin }) => {
  const navigate = useNavigate();

  function onMainPage(): void {
    navigate('/');
  }

  return (
    <AppBar position="static" component="header">
      <Container>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onMainPage}>
              <HomeIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
              Главная
            </Button>
          </Typography>
          <LanguageSwitcher fontSize={fontSize} />
          <AuthButtonsContainer isLogin={isLogin} fontSize={fontSize} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
