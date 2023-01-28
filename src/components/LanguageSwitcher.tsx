import React, { FC, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

interface props {
  fontSize?: string;
}

const LanguageSwitcher: FC<props> = ({ fontSize = '1.8rem' }) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [currenLanguage, setCurrenLanguage] = useState(
    i18n.resolvedLanguage === 'ru' ? 'ru' : 'en'
  );

  const openMenuLanguage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenuLanguage = (): void => {
    setAnchorEl(null);
  };

  const changeLanguage = async (language: string): Promise<void> => {
    setAnchorEl(null);
    setCurrenLanguage(language);
    await i18n.changeLanguage(language);
  };

  return (
    <>
      <Button color="inherit" sx={{ fontSize: fontSize }} onClick={openMenuLanguage}>
        <LanguageIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
        {currenLanguage}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={closeMenuLanguage}>
        <MenuItem
          sx={{ fontSize: fontSize }}
          onClick={async (): Promise<void> => await changeLanguage('ru')}
        >
          RU
        </MenuItem>
        <MenuItem
          sx={{ fontSize: fontSize }}
          onClick={async (): Promise<void> => await changeLanguage('en')}
        >
          EN
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
