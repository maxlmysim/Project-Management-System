import React, { FC } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { IButton } from './types';
import { useTranslation } from 'react-i18next';

const EditButton: FC<IButton> = ({ onClick, type = 'full', variant = 'contained' }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'actions' });
  return (
    <Button variant={variant} color="warning" onClick={onClick}>
      <EditIcon /> {type === 'full' ? t('edit') : ''}
    </Button>
  );
};

export default EditButton;
