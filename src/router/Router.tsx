import React, { FC } from 'react';
import WelcomePage from '../pages/WelcomePage';
import Registration from '../pages/Registration';
import { AppRoutes } from '../constants/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Boards from '../pages/Boards';
import Board from '../pages/Board';

interface props {
  isLogin: boolean;
}

const Router: FC<props> = ({ isLogin }) => {
  return (
    <Routes>
      <Route path={AppRoutes.WELCOME} element={<WelcomePage />} />
      {isLogin ? (
        <>
          <Route path={AppRoutes.PROFILE} element={<Profile />} />
          <Route path={AppRoutes.BOARDS} element={<Boards />} />
          <Route path={AppRoutes.BOARDS + '/:idBoard'} element={<Board />} />;
        </>
      ) : (
        <>
          <Route path={AppRoutes.LOGIN} element={<Login />} />
          <Route path={AppRoutes.REGISTRATION} element={<Registration />} />
        </>
      )}
      <Route path="*" element={<Navigate to={AppRoutes.WELCOME} />} />
    </Routes>
  );
};

export default Router;
