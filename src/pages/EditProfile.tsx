import React, { FC } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useAppSelector } from '../hooks/storeHooks';
import { authSelector } from '../store/authSlice';
import EditTooltip from '../components/EditTooltip';
import CenteringContainer from '../components/СenteringСontainer';

const EditProfile: FC = () => {
  const { login, userName } = useAppSelector(authSelector);
  return (
    <div style={{ backgroundColor: 'rgb(66, 165, 245)', flexGrow: 1, color: 'white' }}>
      <Typography variant="h3" component="h3" align="center" margin="2rem auto">
        Профиль
      </Typography>
      <CenteringContainer>
        <Card sx={{ maxWidth: 700, width: 1 }}>
          <CardContent>
            <Typography variant="h4" component="h4" fontWeight="bold" gutterBottom>
              Имя: {userName} <EditTooltip title="edit" />
            </Typography>
            <Typography variant="h4" component="h4" fontWeight="bold" gutterBottom>
              Логин: {login} <EditTooltip title="edit" />
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'rgb(237, 108, 2)', color: 'white', fontSize: '1.5rem' }}
            >
              Удалить учетную запись
            </Button>
          </CardContent>
        </Card>
      </CenteringContainer>
      <Typography variant="h2" component="h3" align="center" margin="2rem auto" fontWeight="bold">
        Мои задачи
      </Typography>
    </div>
  );
};

export default EditProfile;
