import React, { FC } from 'react';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { signOut } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/storeHooks';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppRoutes } from '../constants/routes';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  function onLogin(): void {
    navigate(AppRoutes.LOGIN);
  }

  function onSignOut(): void {
    dispatch(signOut());
    navigate(AppRoutes.LOGIN);
  }

  function onRegistration(): void {
    navigate(AppRoutes.REGISTRATION);
  }
  return (
    <>
      {isLogin ? (
        <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onSignOut}>
          <LogoutIcon sx={{ fontSize: fontSizeIcon, marginRight: '5px' }} />
          {t('auth.signOut')}
        </Button>
      ) : (
        <>
          <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onLogin}>
            <PersonIcon sx={{ fontSize: fontSizeIcon, marginRight: '5px' }} />
            {t('auth.signIn')}
          </Button>
          <Button color="inherit" sx={{ fontSize: fontSize }} onClick={onRegistration}>
            <LockOpenIcon sx={{ fontSize: fontSizeIcon, marginRight: '5px' }} />
            {t('auth.signUp')}
          </Button>
        </>
      )}
    </>
  );
};

export default AuthButtonsContainer;
