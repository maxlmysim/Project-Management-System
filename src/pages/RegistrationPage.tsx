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

const RegistrationPage: FC = () => {
  const { isLogin } = useAppSelector(authSelector);
  const navigate = useNavigate();
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
          Регистрация
        </Typography>
        <AuthField fields={registrationFieldList} action={signUp} buttonText="Регистрация" />
      </Box>
    </Container>
  );
};

export default RegistrationPage;
