import React, { FC } from 'react';
import { Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

interface props {
  children: React.ReactNode;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  sx?: SxProps<Theme>;
  gap?: number;
}

const CenteringContainer: FC<props> = ({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  wrap = 'nowrap',
  direction = 'row',
  sx = {},
  gap = 0,
}) => {
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexDirection: direction,
        flexWrap: wrap,
        gap: gap,
      }}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default CenteringContainer;
