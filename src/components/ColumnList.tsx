import React, { FC, useEffect } from 'react';
import Loader from './Loader';
import AddButton from './Buttons/AddButton';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { loaderSelector } from '../store/loaderSlice';
import { columnSelector, getAllColumnsByBoard } from '../store/columnSlice';
import { showModalWindow } from '../store/modalSlice';
import { ADD_COLUMN } from '../constants/modalField';
import Column from './Column';
import CenteringContainer from './СenteringСontainer';
import { useParams } from 'react-router-dom';

const ColumnList: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(loaderSelector);
  const { columns } = useAppSelector(columnSelector);

  const onAddColumn = (): void => {
    dispatch(showModalWindow(ADD_COLUMN));
  };

  const { idBoard } = useParams();
  useEffect(() => {
    if (idBoard) {
      dispatch(getAllColumnsByBoard(idBoard));
    }
  }, []);

  return (
    <CenteringContainer
      justifyContent="flex-start"
      alignItems="flex-start"
      gap="1rem"
      flex="1 1"
      style={{ padding: '1rem', width: '100%' }}
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
  );
};

export default ColumnList;
