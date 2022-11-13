import React, { FC } from 'react';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { signOut } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/storeHooks';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LogoutIcon from '@mui/icons-material/Logout';

interface props {
  isLogin: boolean;
  fontSize?: string;
  fontSizeIcon?: string;
}

const AuthButtonsContainer: FC<props> = ({
  isLogin,
  fontSize = '1.8rem',
  fontSizeIcon = '2rem',
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onLogin(): void {
    navigate('/login');
  }

  function onSignOut(): void {
    dispatch(signOut());
    navigate('/login');
  }

  function onRegistration(): void {
    navigate('/registration');
  }
  return (
    <>
      {isLogin ? (
        <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onSignOut}>
          <LogoutIcon sx={{ fontSize: fontSizeIcon, marginRight: '5px' }} />
          Выход
        </Button>
      ) : (
        <>
          <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onLogin}>
            <PersonIcon sx={{ fontSize: fontSizeIcon, marginRight: '5px' }} />
            Вход
          </Button>
          <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onRegistration}>
            <LockOpenIcon sx={{ fontSize: fontSizeIcon, marginRight: '5px' }} />
            Регистрация
          </Button>
        </>
      )}
    </>
  );
};

export default AuthButtonsContainer;
