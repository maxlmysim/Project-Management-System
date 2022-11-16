import React from 'react';
import { useParams } from 'react-router-dom';

const Board = () => {
  const params = useParams();
  console.log(params);
  return <div></div>;
};

export default Board;
