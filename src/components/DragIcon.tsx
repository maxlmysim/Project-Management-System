import React, { FC } from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { Property } from 'csstype';

interface IProps<TLength = (string & object) | 0> {
  position?: Property.Position | undefined;
  top?: Property.Top<TLength> | undefined;
  left?: Property.Left<TLength> | undefined;
  bottom?: Property.Bottom<TLength> | undefined;
  right?: Property.Right<TLength> | undefined;
  color?: Property.Color | undefined;
  size?: Property.FontSize<TLength> | undefined;
}

const DragIcon: FC<IProps> = ({ size, bottom, top, right, position, left, color }) => {
  const styleDragIcon: SxProps<Theme> = {
    fontSize: size,
    color: color,
    position: position,
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    transform: 'translate(-50%, -50%)',
    zIndex: 5,
  };
  return <DragIndicatorIcon sx={styleDragIcon} />;
};

export default DragIcon;
