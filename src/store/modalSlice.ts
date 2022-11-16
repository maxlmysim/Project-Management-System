import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IFormContent, ModalActionKeys } from '../types/formTypes';
import { IFieldProps } from '../constants/modalField';

interface IModalState {
  isShowModal: boolean;
  modalTitle: string;
  action: ModalActionKeys;
  fieldProps: IFieldProps[];
  isLoading: boolean;
}

const initialState: IModalState = {
  modalTitle: '',
  action: 'editName',
  isShowModal: false,
  fieldProps: [],
  isLoading: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModalWindow(state: IModalState, { payload: content }: PayloadAction<IFormContent>) {
      console.log(content);
      state.isShowModal = true;
      state.fieldProps = content.fields;
      state.modalTitle = content.modalTitle;
      state.action = content.action;
    },
    closeModalWindow(state: IModalState) {
      state.isShowModal = false;
      state.fieldProps = [];
      state.isLoading = false;
    },
    confirmModalAction(state: IModalState) {
      state.isLoading = true;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const { showModalWindow, closeModalWindow, confirmModalAction } = modalSlice.actions;

export const modalSelector = (state: RootState): IModalState => state.modalStore;
