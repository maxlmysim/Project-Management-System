import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Menu, MenuItem, AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const fontSize = '1.8rem';

const Header: FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenuLanguage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenuLanguage = (language: string): void => {
    console.log(language);
    setAnchorEl(null);
  };

  function onMainPage(): void {
    navigate('/');
  }

  function onLogin(): void {
    navigate('/login');
  }
  function onRegistration(): void {
    navigate('/registration');
  }

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onMainPage}>
                <HomeIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
                Главная
              </Button>
            </Typography>
            <Button color="inherit" sx={{ fontSize: fontSize }} onClick={openMenuLanguage}>
              <LanguageIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
              RU
            </Button>

            <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onLogin}>
              <PersonIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
              Вход
            </Button>
            <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onRegistration}>
              <LockOpenIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
              Регистрация
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={closeMenuLanguage}>
              <MenuItem sx={{ fontSize: fontSize }} onClick={(): void => closeMenuLanguage('RU')}>
                RU
              </MenuItem>
              <MenuItem sx={{ fontSize: fontSize }} onClick={(): void => closeMenuLanguage('EN')}>
                EN
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
