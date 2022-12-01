import React, { FC } from 'react';
import Loader from './Loader';
import AddButton from './Buttons/AddButton';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { loaderSelector } from '../store/loaderSlice';
import { columnSelector } from '../store/columnSlice';
import { showModalWindow } from '../store/modalSlice';
import { ADD_COLUMN } from '../constants/modalField';
import Column from './Column';
import CenteringContainer from './СenteringСontainer';
import { Box } from '@mui/material';

const ColumnList: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(loaderSelector);
  const { columns } = useAppSelector(columnSelector);

  const onAddColumn = (): void => {
    dispatch(showModalWindow(ADD_COLUMN));
  };

  return (
    <Box sx={{ position: 'relative', flexGrow: 1 }}>
      <CenteringContainer
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="1rem"
        style={{
          width: '100%',
          overflow: 'auto',
          position: 'absolute',
          maxHeight: '100%',
          height: '100%',
          paddingBottom: '0.5rem',
        }}
      >
        {isLoading ? (
          <Loader color="#ffffff" />
        ) : (
          <>
            {columns.map((column, index) => (
              <Column key={index} column={column} />
            ))}
            {<AddButton onClick={onAddColumn}>{'Добавить список'}</AddButton>}
          </>
        )}
      </CenteringContainer>
    </Box>
  );
};

export default ColumnList;
