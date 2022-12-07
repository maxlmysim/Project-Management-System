import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import TooltipButton from './TooltipButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { setCurrentColumn } from '../store/columnSlice';
import { showModalWindow } from '../store/modalSlice';
import { DELETE_COLUMN, EDIT_COLUMN } from '../constants/modalField';
import { useAppDispatch } from '../hooks/storeHooks';
import { IColumnResponse } from 'types/columnTypes';

const styleBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '15%',
  right: '5%',
  zIndex: 1,
};

const ColumnHeader: FC<IColumnResponse> = (column) => {
  const dispatch = useAppDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const onDeleteColumn = (): void => {
    dispatch(setCurrentColumn(column));
    dispatch(showModalWindow(DELETE_COLUMN));
    closeShowOptions();
  };
  const onEditColumn = (): void => {
    dispatch(setCurrentColumn(column));
    dispatch(showModalWindow(EDIT_COLUMN(column.title)));
    closeShowOptions();
  };
  const toggleShowOptions = (): void => {
    setShowOptions(!showOptions);
  };
  const closeShowOptions = (): void => {
    if (showOptions) setShowOptions(false);
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      size="medium"
      sx={{ fontSize: '1.6rem', width: '100%' }}
    >
      <Box sx={styleBox} onMouseLeave={closeShowOptions}>
        <TooltipButton title="" handler={toggleShowOptions} icon={<MoreVertIcon />} />
        {showOptions && (
          <>
            <TooltipButton
              title="Описание"
              handler={(): void => {}}
              backgroundColor="rgba(0,0,0,0.7)"
              icon={<SearchIcon />}
            />
            <TooltipButton
              title="Изменить"
              handler={onEditColumn}
              backgroundColor="rgba(0,0,0,0.7)"
              icon={<EditIcon />}
            />
            <TooltipButton
              title="Удалить"
              handler={onDeleteColumn}
              backgroundColor="rgba(0,0,0,0.7)"
              icon={<DeleteIcon />}
            />
          </>
        )}
      </Box>
      {column.title}
    </Button>
  );
};

export default ColumnHeader;
