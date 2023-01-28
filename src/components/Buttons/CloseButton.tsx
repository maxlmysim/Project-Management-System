import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ICloseButton {
  handleClose: () => void;
}

const CloseButton: FC<ICloseButton> = ({ handleClose }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'actions' });
  return (
    <Button
      variant="contained"
      color="warning"
      type="submit"
      style={{ fontSize: ' 1.6rem' }}
      startIcon={<CloseIcon />}
      onClick={handleClose}
    >
      {t('close')}
    </Button>
  );
};

export default CloseButton;
