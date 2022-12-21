import React, { FC } from 'react';
import { Alert, Fade } from '@mui/material';
import { IAlertContent } from '../../store/alertSlice';

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
  return (
    <Fade in={isShow} {...{ timeout: 500 }}>
      <Alert sx={alertStyle} variant="filled" severity={content.type}>
        {content.message}
      </Alert>
    </Fade>
  );
};

export default Notification;
