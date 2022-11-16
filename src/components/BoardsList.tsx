import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Pagination,
  styled,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import muiTheme from '../constants/muiTheme';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { boardSelector, getAllBoards } from '../store/boardSlice';
import { showModalWindow } from '../store/modalSlice';
import { ADD_BOARD } from '../constants/modalField';

const GridContainer = styled('div')`
  display: grid;
  gap: 1rem;
  width: 100%;
  justify-items: center;

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
  const { boards } = useAppSelector(boardSelector);

  const [isShowPaginator, setIsShowPaginator] = useState(false);

  const addNewBoard = (): void => {
    dispatch(showModalWindow(ADD_BOARD));
  };

  useEffect(() => {
    dispatch(getAllBoards());
  }, []);

  return (
    <Container sx={{ p: '1rem' }}>
      <GridContainer>
        {boards.map((board) => (
          <Card key={board._id} sx={{ maxWidth: 275, width: 1, minHeight: 100, cursor: 'pointer' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: '2.4rem' }}
                variant="h5"
                component="h4"
                gutterBottom
                color="#1565c0"
                fontWeight="bold"
              >
                {board.title}
              </Typography>
              <Typography sx={{ mb: 0.5 }} color="text.secondary">
                {board.owner}
              </Typography>
            </CardContent>
            <Divider variant="middle" sx={{ m: '0 1rem 1rem' }} color="#696565" />
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" color="warning">
                <EditIcon /> Изменить
              </Button>
              <Button variant="contained" color="warning">
                <DeleteIcon /> Удалить
              </Button>
            </CardActions>
          </Card>
        ))}
        <Button
          variant="contained"
          sx={{
            maxWidth: 275,
            width: 1,
            minHeight: '140px',
            fontSize: '2rem',
            padding: 'auto',
          }}
          onClick={addNewBoard}
        >
          <AddIcon fontSize="large" />
          Добавить доску
        </Button>
      </GridContainer>
      {isShowPaginator && (
        <Pagination count={Math.floor(boards.length / 12)} size="large" color="primary" />
      )}
    </Container>
  );
};

export default BoardsList;
