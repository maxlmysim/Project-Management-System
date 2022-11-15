import React from 'react';
import AddBoardsButton from "../components/AddBoardsButton";
import {Avatar, Box, Container, Typography} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BoardsList from "./BoardsList";

const Boards = () => {
  return (
    <Container component="main">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }}
      >
        <Avatar sx={{ backgroundColor: 'rgb(156, 39, 176);' }}>
          <DashboardIcon sx={{ width: '70%', height: 'auto' }} />
        </Avatar>
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center', margin: '0 auto 1rem' }}>
          Доски
        </Typography>
        <AddBoardsButton onClick={()=>{}} />
      </Box>
      <BoardsList />
    </Container>
    );
};

export default Boards;