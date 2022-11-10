import React, { FC } from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import style from './App.module.css';

const App: FC = () => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
