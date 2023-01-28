import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
import TooltipButton from './TooltipButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { setCurrentColumn } from '../store/columnSlice';
import { addFieldsInfoModal, showModalWindow } from '../store/modalSlice';
import { DELETE_COLUMN, EDIT_COLUMN, SHOW_COLUMN_INFO } from '../constants/modalField';
import { useAppDispatch } from '../hooks/storeHooks';
import { IColumnResponse } from 'types/columnTypes';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import DragIcon from './DragIcon';
import { useTranslation } from 'react-i18next';

const styleBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '15%',
  right: '5%',
  zIndex: 99,
};

const Container = styled('div')`
  color: #fff;
  background-color: #9c27b0;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0px rgb(0 0 0 / 14%),
    0 1px 5px 0px rgb(0 0 0 / 12%);
  font-size: 1.6rem;
  width: 100%;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: grab;
`;

interface IProps {
  column: IColumnResponse;
  dragHandle?: DraggableProvidedDragHandleProps | undefined;
}

const ColumnHeader: FC<IProps> = ({ column, dragHandle }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translation', { keyPrefix: 'actions' });
  const [showOptions, setShowOptions] = useState(false);

  const closeShowOptions = (): void => {
    if (showOptions) setShowOptions(false);
  };

  const onShowInfo = (): void => {
    dispatch(setCurrentColumn(column));
    dispatch(addFieldsInfoModal({ title: column.title }));
    dispatch(showModalWindow(SHOW_COLUMN_INFO));
    closeShowOptions();
  };
  const onDeleteColumn = (): void => {
    dispatch(setCurrentColumn(column));
    dispatch(showModalWindow(DELETE_COLUMN));
    closeShowOptions();
  };
  const onEditColumn = (): void => {
    dispatch(setCurrentColumn(column));
    dispatch(showModalWindow(EDIT_COLUMN(column.title)));
    closeShowOptions();
  };
  const toggleShowOptions = (): void => {
    setShowOptions(!showOptions);
  };

  return (
    <Container {...dragHandle}>
      <DragIcon transform={'none'} position={'absolute'} left={'5%'} />
      {column.title}
      <Box sx={styleBox} onMouseLeave={closeShowOptions}>
        <TooltipButton title="" handler={toggleShowOptions} icon={<MoreVertIcon />} />
        {showOptions && (
          <>
            <TooltipButton
              title={t('info')}
              handler={onShowInfo}
              backgroundColor="rgba(0,0,0,0.7)"
              icon={<SearchIcon />}
            />
            <TooltipButton
              title={t('edit')}
              handler={onEditColumn}
              backgroundColor="rgba(0,0,0,0.7)"
              icon={<EditIcon />}
            />
            <TooltipButton
              title={t('delete')}
              handler={onDeleteColumn}
              backgroundColor="rgba(0,0,0,0.7)"
              icon={<DeleteIcon />}
            />
          </>
        )}
      </Box>
    </Container>
  );
};

export default ColumnHeader;
