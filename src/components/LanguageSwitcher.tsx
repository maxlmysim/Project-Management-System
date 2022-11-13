import React, { FC, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

interface props {
  fontSize?: string;
}

const LanguageSwitcher: FC<props> = ({ fontSize = '1.8rem' }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [currenLanguage, setCurrenLanguage] = useState('RU');

  const openMenuLanguage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenuLanguage = (): void => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: string): void => {
    setAnchorEl(null);
    setCurrenLanguage(language);
  };

  return (
    <>
      <Button color="inherit" sx={{ fontSize: fontSize }} onClick={openMenuLanguage}>
        <LanguageIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
        {currenLanguage}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={closeMenuLanguage}>
        <MenuItem sx={{ fontSize: fontSize }} onClick={(): void => changeLanguage('RU')}>
          RU
        </MenuItem>
        <MenuItem sx={{ fontSize: fontSize }} onClick={(): void => changeLanguage('EN')}>
          EN
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
