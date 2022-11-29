import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

interface ICloseButton {
  handleClose: () => void;
}

const CloseButton: FC<ICloseButton> = ({ handleClose }) => {
  return (
    <Button
      variant="contained"
      color="warning"
      type="submit"
      style={{ fontSize: ' 1.6rem' }}
      startIcon={<CloseIcon />}
      onClick={handleClose}
    >
      Закрыть
    </Button>
  );
};

export default CloseButton;
