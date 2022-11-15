import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { FormContent, ModalActionKeys } from '../types/formTypes';
import { IFieldProps } from '../constants/modalField';

interface IModalState {
  isShowModal: boolean;
  modalTitle: string;
  action: ModalActionKeys;
  fieldProps: IFieldProps[];
}

const initialState: IModalState = {
  modalTitle: '',
  action: 'editName',
  isShowModal: false,
  fieldProps: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModalWindow(state: IModalState, { payload: content }: PayloadAction<FormContent>) {
      console.log(content);
      state.isShowModal = true;
      state.fieldProps = content.fields;
      state.modalTitle = content.modalTitle;
      state.action = content.action;
    },
    closeModalWindow(state: IModalState) {
      state.isShowModal = false;
      state.fieldProps = [];
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const { showModalWindow, closeModalWindow } = modalSlice.actions;

export const modalSelector = (state: RootState): IModalState => state.modalStore;
