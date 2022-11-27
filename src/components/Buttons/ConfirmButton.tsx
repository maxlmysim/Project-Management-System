import React, { FC } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import LoadingButton from '@mui/lab/LoadingButton';

interface IConfirmButton {
  isLoading: boolean;
}

const ConfirmButton: FC<IConfirmButton> = ({ isLoading }) => {
  return (
    <LoadingButton
      loadingPosition="start"
      startIcon={<DoneIcon />}
      variant="contained"
      color="success"
      type="submit"
      style={{ fontSize: ' 1.6rem' }}
      loading={isLoading}
    >
      Подтвердить
    </LoadingButton>
  );
};

export default ConfirmButton;
