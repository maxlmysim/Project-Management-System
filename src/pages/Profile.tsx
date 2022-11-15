import React, { FC } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { authSelector } from '../store/authSlice';
import EditTooltipButton from '../components/EditTooltipButton';
import CenteringContainer from '../components/СenteringСontainer';
import { showModalWindow } from '../store/modalSlice';
import { EDIT_LOGIN, EDIT_NAME } from '../constants/modalField';

const Profile: FC = () => {
  const { login, name } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  const openEditName = (): void => {
    dispatch(showModalWindow(EDIT_NAME));
  };
  const openEditLogin = (): void => {
    dispatch(showModalWindow(EDIT_LOGIN));
  };

  return (
    <div style={{ backgroundColor: 'rgb(66, 165, 245)', flexGrow: 1, color: 'white' }}>
      <Typography variant="h3" component="h3" align="center" margin="2rem auto">
        Профиль
      </Typography>
      <CenteringContainer>
        <Card sx={{ maxWidth: 700, width: 1 }}>
          <CardContent>
            <Typography variant="h4" component="h4" fontWeight="bold" gutterBottom>
              Имя: {name} <EditTooltipButton title="edit" handler={openEditName} />
            </Typography>
            <Typography variant="h4" component="h4" fontWeight="bold" gutterBottom>
              Логин: {login} <EditTooltipButton title="edit" handler={openEditLogin} />
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

export default Profile;
