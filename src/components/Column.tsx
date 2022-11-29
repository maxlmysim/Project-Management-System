import React, { FC, useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { IColumnResponse } from '../types/responseTypes';
import AddButton from './Buttons/AddButton';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TooltipButton from './TooltipButton';

interface IColumnProps {
  column: IColumnResponse;
}

const style = {
  maxWidth: 275,
  width: 1,
  minHeight: 100,
  cursor: 'pointer',
  flexShrink: 0,
  overflow: 'visible',
};

const styleContent = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  flexShrink: 0,
};

const Column: FC<IColumnProps> = ({ column }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };
  const closeShowOptions = () => {
    setShowOptions(false);
  };
  return (
    <Card sx={style} onClick={(): void => {}}>
      <CardContent sx={styleContent}>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          sx={{ fontSize: '1.6rem', width: '100%' }}
          onBlur={closeShowOptions}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '15%',
              right: '5%',
              zIndex: 1,
            }}
          >
            <TooltipButton
              title=""
              handler={toggleShowOptions}
              icon={<MoreVertIcon />}
              backgroundColor="transparent"
            />
            {showOptions && (
              <>
                <TooltipButton title="Описание" handler={() => {}} icon={<SearchIcon />} />
                <TooltipButton title="Изменить" handler={() => {}} icon={<EditIcon />} />
                <TooltipButton title="Удалить" handler={() => {}} icon={<DeleteIcon />} />
              </>
            )}
          </Box>
          {column.title}
        </Button>
        <AddButton type="small" onClick={(): void => {}}>
          {'Добавить задачу'}
        </AddButton>
        <Typography>{column.order}</Typography>
      </CardContent>
    </Card>
  );
};

export default Column;
