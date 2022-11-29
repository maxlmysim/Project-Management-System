import React, { FC } from 'react';
import WelcomePage from '../pages/WelcomePage';
import RegistrationPage from '../pages/RegistrationPage';
import { AppRoutes } from '../constants/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import BoardsPage from '../pages/BoardsPage';
import BoardPage from 'pages/BoardPage';
import NotFound from '../pages/NotFound';

interface props {
  isLogin: boolean;
}

const AppRouter: FC<props> = ({ isLogin }) => {
  return (
    <Routes>
      <Route path={AppRoutes.WELCOME} element={<WelcomePage />} />
      {isLogin ? (
        <>
          <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
          <Route path={AppRoutes.BOARDS} element={<BoardsPage />} />
          <Route path={AppRoutes.BOARDS + AppRoutes.ID_BOARDS} element={<BoardPage />} />;
        </>
      ) : (
        <>
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.REGISTRATION} element={<RegistrationPage />} />
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
