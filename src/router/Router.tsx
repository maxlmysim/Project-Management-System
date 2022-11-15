import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../constants/routes';
import WelcomePage from '../pages/WelcomePage';
import Registration from '../pages/Registration';
import Profile from '../pages/Profile';
import Login from 'pages/Login';

interface props {
  isLogin: boolean;
}

const Router: FC<props> = ({ isLogin }) => {
  return (
    <Routes>
      {isLogin ? (
        <>
          <Route path={AppRoutes.WELCOME} element={<WelcomePage />} />
          <Route path={AppRoutes.PROFILE} element={<Profile />} />
        </>
      ) : (
        <>
          <Route path={AppRoutes.WELCOME} element={<WelcomePage />} />
          <Route path={AppRoutes.LOGIN} element={<Login />} />
          <Route path={AppRoutes.REGISTRATION} element={<Registration />} />
        </>
      )}
      <Route path="*" element={<Navigate to={AppRoutes.WELCOME} />} />
    </Routes>
  );
};

export default Router;
