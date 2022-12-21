import React, { FC, useLayoutEffect } from 'react';
import './App.module.css';
import Header from './components/Header';
import Footer from 'components/Footer/Footer';
import style from './App.module.css';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { authSelector, getMyUserData } from './store/authSlice';
import { welcomeSelector } from './store/welcomeSlice';
import Loader from './components/Loader';
import AppRouter from './router/Router';
import { useNavigate } from 'react-router-dom';
import { setNavigate } from 'store/redirectSlice';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoadingPage } = useAppSelector(welcomeSelector);
  const { isLogin } = useAppSelector(authSelector);

  useLayoutEffect(() => {
    dispatch(setNavigate(navigate));
    dispatch(getMyUserData());
  }, []);

  return (
    <div className={style.mainContainer}>
      {isLoadingPage ? (
        <Loader />
      ) : (
        <>
          <Header isLogin={isLogin} />
          <AppRouter isLogin={isLogin} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
