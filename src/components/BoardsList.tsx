import React, { FC, useLayoutEffect } from 'react';
import { Container, Pagination, styled } from '@mui/material';
import muiTheme from '../constants/muiTheme';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { boardSelector, getAllBoards, setCurrentPageNum } from '../store/boardSlice';
import { showModalWindow } from '../store/modalSlice';
import { ADD_BOARD } from '../constants/modalField';
import Board from './Board';
import { loaderSelector } from '../store/loaderSlice';
import Loader from './Loader';
import AddButton from './Buttons/AddButton';

const ContainerStyle = {
  m: '1rem',
  p: '1rem',
  position: 'relative',
  height: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const GridContainer = styled('div')`
  display: grid;
  gap: 1rem;
  width: 100%;
  justify-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: ${muiTheme.breakpoints.values.xs}px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: ${muiTheme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${muiTheme.breakpoints.values.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${muiTheme.breakpoints.values.lg}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: ${muiTheme.breakpoints.values.xl}px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const BoardsList: FC = () => {
  const dispatch = useAppDispatch();
  const { boards, currentPageNum } = useAppSelector(boardSelector);
  const { isLoading } = useAppSelector(loaderSelector);
  const boardsToShow = boards.slice(12 * (currentPageNum - 1), 12 * currentPageNum);
  const lastPage = Math.floor(boards.length / 12) + 1;
  const isShowAddBoard = lastPage === currentPageNum;

  useLayoutEffect((): void => {
    dispatch(getAllBoards());
  }, []);

  const addNewBoard = (): void => {
    dispatch(showModalWindow(ADD_BOARD));
  };
  const handlePage = (event: React.ChangeEvent<unknown>, page: number): void => {
    dispatch(setCurrentPageNum(page));
  };

  return (
    <Container sx={ContainerStyle}>
      {isLoading ? (
        <Loader color="#ffffff" />
      ) : (
        <>
          <GridContainer>
            {boardsToShow.map((board) => (
              <Board board={board} key={board._id} />
            ))}
            {isShowAddBoard && <AddButton onClick={addNewBoard}>{'Добавить доску'}</AddButton>}
          </GridContainer>
          {lastPage > 1 && (
            <Pagination
              count={lastPage}
              size="large"
              color="primary"
              shape="rounded"
              onChange={handlePage}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default BoardsList;
