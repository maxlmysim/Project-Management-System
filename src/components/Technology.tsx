import React, { FC } from 'react';
import { CardMedia, Link, styled, Typography } from '@mui/material';
import { ITechnology } from 'constants/welcomePageInfo';

const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  text-align: center;
  height: 100%;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }

  img {
    width: 60%;
    height: auto;
    margin: 0 auto 2.5rem;
  }

  p {
    margin-top: auto;
  }
`;

const Technology: FC<{ technology: ITechnology }> = ({ technology }) => {
  const { name, link, imgLink } = technology;
  return (
    <LinkStyled href={link} target="_blank">
      <CardMedia component="img" height="194" image={imgLink} alt={name} />
      <Typography variant="h4" component="p">
        {name}
      </Typography>
    </LinkStyled>
  );
};

export default Technology;
