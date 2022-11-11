import React, { FC } from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { styled, Typography } from '@mui/material';

const Content = styled('div')`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  text-align: center;
  height: 100%;
  padding: 1.5rem;

  svg {
    width: 50%;
    height: auto;
    margin: 0 auto 2.5rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const Advantage: FC<{ text: string }> = ({ text }) => {
  return (
    <Content>
      <BusinessCenterIcon color="primary" />
      <Typography component="p" variant="h4">
        {text}
      </Typography>
    </Content>
  );
};

export default Advantage;
