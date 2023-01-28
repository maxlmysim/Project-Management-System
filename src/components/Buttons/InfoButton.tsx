import React, { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { IButton } from './types';
import { useTranslation } from 'react-i18next';

const InfoButton: FC<IButton> = ({ onClick, type = 'full', variant = 'contained' }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'actions' });
  return (
    <Button color="warning" onClick={onClick} variant={variant}>
      <SearchIcon />
      {type === 'full' ? t('info') : ''}
    </Button>
  );
};

export default InfoButton;
