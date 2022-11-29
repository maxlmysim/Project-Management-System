import React, { FC } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { IColumnResponse } from '../types/responseTypes';
import AddButton from './Buttons/AddButton';
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import InfoButton from './Buttons/InfoButton';

interface IColumnProps {
  column: IColumnResponse;
}

const style = {
  maxWidth: 275,
  width: 1,
  minHeight: 100,
  cursor: 'pointer',
  flexShrink: 0,
  position: 'relative',
};

const Column: FC<IColumnProps> = ({ column }) => {
  return (
    <Card sx={style} onClick={(): void => {}}>
      <CardContent>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ fontSize: '1.6rem', width: '100%' }}
        >
          {column.title}
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InfoButton type="small" onClick={(): void => {}} />
          <EditButton type="small" onClick={(): void => {}} />
          <DeleteButton type="small" onClick={(): void => {}} />
          <AddButton type="small" onClick={(): void => {}} />
        </Box>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          {column.order}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Column;
