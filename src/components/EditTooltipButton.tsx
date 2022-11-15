import React, { FC } from 'react';
import { IconButton, styled, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Title = styled('span')`
  font-size: 1.2rem;
`;

interface props {
  title: string;
  sizeIcon?: 'large' | 'small' | 'medium';
  color?: string;
  handler: () => void;
}

const EditTooltipButton: FC<props> = ({
  title,
  handler,
  color = 'rgb(237, 108, 2)',
  sizeIcon = 'large',
}) => {
  return (
    <Tooltip title={<Title>{title}</Title>} placement="right-end" onClick={handler}>
      <IconButton sx={{ color: color }} aria-label="upload picture" component="label">
        <EditIcon color="inherit" fontSize={sizeIcon} />
      </IconButton>
    </Tooltip>
  );
};

export default EditTooltipButton;
