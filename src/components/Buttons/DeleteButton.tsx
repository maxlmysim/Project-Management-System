import React, { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { IButton } from './types';
import { useTranslation } from 'react-i18next';

const DeleteButton: FC<IButton> = ({ onClick, type = 'full', variant = 'contained' }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'actions' });
  return (
    <Button variant={variant} color="warning" onClick={onClick}>
      <DeleteIcon /> {type === 'full' ? t('delete') : ''}
    </Button>
  );
};

export default DeleteButton;
