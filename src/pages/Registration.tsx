import React, { FC } from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AuthField from '../components/AuthField';
import { signUp } from 'store/authSlice';
import { registrationFieldList } from '../constants/modalField';

const Registration: FC = () => {
  return (
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

export default Registration;
