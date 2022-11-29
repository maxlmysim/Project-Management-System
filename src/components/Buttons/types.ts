import React from 'react';

export interface IButtonComponent extends IButton {
  children?: React.ReactNode;
}

export interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'contained' | 'text' | 'outlined';
  type?: 'full' | 'small';
}
