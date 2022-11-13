import React, { FC } from 'react';
import style from './Footer.module.css';
import { ReactComponent as LogoSchool } from '../../assets/logo/rs_school.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

const GitHubIconStyle = {
  fontSize: '2rem',
};

const Footer: FC = () => {
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
    </div>
  );
};

export default Footer;
