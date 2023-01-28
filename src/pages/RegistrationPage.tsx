import React, { FC, useEffect } from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AuthField from '../components/AuthField';
import { authSelector, signUp } from 'store/authSlice';
import { registrationFieldList } from '../constants/modalField';
import { useAppSelector } from '../hooks/storeHooks';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../constants/routes';
import Loader from '../components/Loader';
import { useTranslation } from 'react-i18next';

const RegistrationPage: FC = () => {
  const { isLogin } = useAppSelector(authSelector);
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    isLogin && navigate(AppRoutes.WELCOME);
  }, [isLogin]);
  return isLogin ? (
    <Loader />
  ) : (
    <Container component="main">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }}
      >
        <Avatar sx={{ backgroundColor: 'rgb(156, 39, 176);' }}>
          <PersonAddIcon sx={{ width: '70%', height: 'auto' }} />
        </Avatar>
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center', margin: '0 auto 1rem' }}>
          {t('auth.signUp')}
        </Typography>
        <AuthField fields={registrationFieldList} action={signUp} buttonText={t('auth.signUp')} />
      </Box>
    </Container>
  );
};

export default RegistrationPage;
