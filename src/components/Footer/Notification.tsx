import React, { FC } from 'react';
import { Alert, Fade } from '@mui/material';
import { IAlertContent } from '../../store/alertSlice';
import { useTranslation } from 'react-i18next';

const alertStyle = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: '6%',
  right: '2%',
  width: 'max-content',
  fontSize: '2rem',
};

interface INotification {
  isShow: boolean;
  content: IAlertContent;
}

const Notification: FC<INotification> = ({ isShow, content }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'alert' });
  return (
    <Fade in={isShow} {...{ timeout: 500 }}>
      <Alert sx={alertStyle} variant="filled" severity={content.type}>
        {t(content.message)}
      </Alert>
    </Fade>
  );
};

export default Notification;
