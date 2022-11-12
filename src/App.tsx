import React, { FC } from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { AppRoutes } from './constants/routes';

const App: FC = () => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Routes>
        <Route path={AppRoutes.WELCOME} element={<WelcomePage />} />
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path={AppRoutes.REGISTRATION} element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
