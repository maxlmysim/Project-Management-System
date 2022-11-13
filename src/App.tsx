import React, { FC } from 'react';
import './App.module.css';
import Header from './components/Header';
import Footer from 'components/Footer/Footer';
import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import { AppRoutes } from './constants/routes';
import Boards from './pages/Boards';
import NotFound from "./pages/NotFound";
import {useAppSelector} from "./hooks/storeHooks";
import {authSelector} from "./store/authSlice";

const App: FC = () => {
  const { isLogin, userId } = useAppSelector(authSelector);
  return (
    <div className={style.mainContainer}>
      <Header />
      <Routes>
        <Route path={AppRoutes.WELCOME} element={<WelcomePage />} />
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path={AppRoutes.REGISTRATION} element={<Registration />} />
        {/*<Route path={AppRoutes.PROFILE} element={isLogin ? <Profile /> : <NotFound/>}/>*/}
        {/*<Route path={AppRoutes.BOARDS} element={isLogin ? <Boards /> : <NotFound />}/>*/}
        <Route path={AppRoutes.PROFILE} element={<Profile />}/>
        <Route path={AppRoutes.BOARDS} element={<Boards />}/>
        <Route path={AppRoutes.NOTFOUND} element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
