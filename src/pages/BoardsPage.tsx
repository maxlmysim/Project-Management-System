import React, { FC } from 'react';
import { Grid } from '@mui/material';
import CenteringContainer from '../components/СenteringСontainer';
import BoardsList from '../components/BoardsList';
import Title from '../components/Title';
import { useTranslation } from 'react-i18next';

const styleGrid = { backgroundColor: 'rgb(66, 165, 245)', flex: '1', display: 'flex' };

const BoardsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Grid component="main" style={styleGrid}>
      <CenteringContainer direction="column">
        <Title>{t('fields.board.title')}</Title>
        <BoardsList />
      </CenteringContainer>
    </Grid>
  );
};

export default BoardsPage;
