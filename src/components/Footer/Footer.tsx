import React, { FC, useEffect } from 'react';
import style from './Footer.module.css';
import { ReactComponent as LogoSchool } from '../../assets/logo/rs_school.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { alertSelector, closeAlert } from '../../store/alertSlice';
import Notification from './Notification';

const GitHubIconStyle = {
  fontSize: '2rem',
};

const Footer: FC = () => {
  const dispatch = useAppDispatch();
  const { isShow, timeout, content } = useAppSelector(alertSelector);
  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => dispatch(closeAlert()), timeout);
      return () => clearTimeout(timer);
    }
  }, [isShow]);
  return (
    <div className={style.footer}>
      <div className={style.footerCarsContainer}>
        <div className="footer-card-item">
          maxlmysim <GitHubIcon sx={GitHubIconStyle} />
        </div>
        <div className="footer-card-item">
          jocker-py <GitHubIcon sx={GitHubIconStyle} />
        </div>
        <div className="footer-card-item">© 2022</div>
        <div className="footer-card-item">
          <LogoSchool className={style.logoSchool} />
        </div>
      </div>
      {isShow && <Notification isShow={isShow} content={content} />}
    </div>
  );
};

export default Footer;
