import React, { FC } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';

interface IConfirmButton {
  isLoading: boolean;
}

const ConfirmButton: FC<IConfirmButton> = ({ isLoading }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'actions' });
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
      {t('confirm')}
    </LoadingButton>
  );
};

export default ConfirmButton;
