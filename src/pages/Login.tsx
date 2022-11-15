import React, { FC } from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthField from '../components/AuthField';
import { signIn } from '../store/authSlice';
import { signInFieldList } from '../constants/modalField';

const Login: FC = () => {
  return (
    <Container component="main">
      <Box alignItems="center" sx={{ display: 'flex', flexDirection: 'column', marginTop: '3rem' }}>
        <Avatar sx={{ backgroundColor: 'rgb(156, 39, 176);' }}>
          <LockOutlinedIcon sx={{ width: '70%', height: 'auto' }} />
        </Avatar>
        <Typography variant="h3" component="h3" align="center" sx={{ margin: '0 auto 1rem' }}>
          Вход
        </Typography>
        <AuthField fields={signInFieldList} action={signIn} buttonText="Войти" />
      </Box>
    </Container>
  );
};

export default Login;
