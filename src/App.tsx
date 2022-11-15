import React, { FC, useEffect } from 'react';
import './App.module.css';
import Header from './components/Header';
import Footer from 'components/Footer/Footer';
import style from './App.module.css';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { authSelector, getMyUserData } from './store/authSlice';
import { welcomeSelector } from './store/welcomeSlice';
import Loader from './components/Loader';
import Router from './router/Router';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoadingPage } = useAppSelector(welcomeSelector);
  const { isLogin } = useAppSelector(authSelector);

  useEffect(() => {
    dispatch(getMyUserData());
  }, []);

  return (
    <div className={style.mainContainer}>
      {isLoadingPage ? (
        <Loader />
      ) : (
        <>
          <Header isLogin={isLogin} />
          <Router isLogin={isLogin} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
