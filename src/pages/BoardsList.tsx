import React from 'react';
import {Button, Card, CardActions, CardContent, Box, Typography, Pagination} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const styleBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  mb: 1,
  '& > :not(style)': {
    m: 1,
    width: 128,
    height: 128,
  },
  '& > :not(style):hover': {
    cursor: 'pointer',
  },
};

const BoardsList = () => {
  const boards = [
    {title: 'first', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:1},
    {title: 'second', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:2},
    {title: 'third', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:3},
    {title: 'first', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:4},
    {title: 'second', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:5},
    {title: 'third', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:6},
    {title: 'first', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:1},
    {title: 'second', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:2},
    {title: 'third', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:3},
    {title: 'first', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:4},
    {title: 'second', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:5},
    {title: 'third', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:6},
    {title: 'first', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:1},
    {title: 'second', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:2},
    {title: 'third', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:3},
    {title: 'first', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:4},
    {title: 'second', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:5},
    {title: 'third', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:6},
    {title: 'first', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:1},
    {title: 'second', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:2},
    {title: 'third', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:3},
    {title: 'first', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:4},
    {title: 'second', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:5},
    {title: 'third', description: 'First board First board First board First board First board First board First board First board First board First board First board First board', id:6}

  ]
  return (
    <div style={
      {display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <Box
        sx={styleBox}
      >
        {boards.slice(0, 12).map((board, index) =>
          <Card sx={{ minWidth: 275, background: 'background.paper' }}>
            <CardContent sx={{
              pb: 0,
              width: 1,
            }}>
              <Typography sx={{ fontSize: 14 }} variant="h5" component="div" gutterBottom>
                { (index + 1)  + '. '+ board.title.toUpperCase()}
              </Typography>
              <Typography sx={{ mb: 0.5}} color="text.secondary">
                description
              </Typography>
              <Typography variant="body2">
                {board.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><EditIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} /> Изменить</Button>
              <Button size="small"><DeleteIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} /> Удалить</Button>
            </CardActions>
          </Card>)}

      </Box>
      <Pagination count={Math.floor(boards.length / 12)} size='large' color="primary" />
    </div>
  );
};

export default BoardsList;