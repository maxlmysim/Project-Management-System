import React, { FC, useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { authSelector } from '../store/authSlice';
import TooltipButton from '../components/TooltipButton';
import CenteringContainer from '../components/СenteringСontainer';
import { showModalWindow } from '../store/modalSlice';
import { DELETE_USER, EDIT_LOGIN, EDIT_NAME } from '../constants/modalField';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../constants/routes';
import Loader from '../components/Loader';

const ProfilePage: FC = () => {
  const { isLogin } = useAppSelector(authSelector);
  const { login, name } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openEditName = (): void => {
    dispatch(showModalWindow(EDIT_NAME));
  };

  const openEditLogin = (): void => {
    dispatch(showModalWindow(EDIT_LOGIN));
  };

  const openDeleteUserModal = (): void => {
    dispatch(showModalWindow(DELETE_USER));
  };

  useEffect(() => {
    !isLogin && navigate(AppRoutes.LOGIN);
  }, [isLogin]);

  return !isLogin ? (
    <Loader />
  ) : (
    <div style={{ backgroundColor: 'rgb(66, 165, 245)', flexGrow: 1, color: 'white' }}>
      <Typography variant="h3" component="h3" align="center" margin="2rem auto">
        Профиль
      </Typography>
      <CenteringContainer>
        <Card sx={{ maxWidth: 700, width: 1 }}>
          <CardContent>
            <Typography variant="h4" component="h4" fontWeight="bold" gutterBottom>
              Имя: {name}
              <TooltipButton title="edit" handler={openEditName} icon={<EditIcon />} />
            </Typography>
            <Typography variant="h4" component="h4" fontWeight="bold" gutterBottom>
              Логин: {login}{' '}
              <TooltipButton title="edit" handler={openEditLogin} icon={<EditIcon />} />
            </Typography>
            <Button
              variant="contained"
              color="warning"
              style={{ fontSize: '1.5rem' }}
              onClick={openDeleteUserModal}
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

export default ProfilePage;
