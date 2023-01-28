import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IModalContent, ModalActionKeys } from '../types/formTypes';
import { IFieldPropsInfo, IFieldPropsInput } from '../constants/modalField';

interface IModalState {
  isShowModal: boolean;
  modalTitle: string;
  action: ModalActionKeys;
  fieldProps: IFieldPropsInput[];
  isLoading: boolean;
  fieldsInfo?: IFieldPropsInfo | null;
  isHideConfirmButton?: boolean;
}

const initialState: IModalState = {
  modalTitle: '',
  action: 'editName',
  isShowModal: false,
  fieldProps: [],
  isLoading: false,
  fieldsInfo: null,
  isHideConfirmButton: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModalWindow(state: IModalState, { payload: content }: PayloadAction<IModalContent>) {
      state.isShowModal = true;
      state.modalTitle = content.modalTitle;

      if (content.fieldsInput) {
        state.fieldProps = content.fieldsInput;
      }
      if (content.action) {
        state.action = content.action;
      }
      if (content.isHideConfirmButton) {
        state.isHideConfirmButton = content.isHideConfirmButton;
      }
    },
    closeModalWindow(state: IModalState) {
      state.isShowModal = false;
      state.fieldProps = [];
      state.isLoading = false;
      state.fieldsInfo = undefined;
      state.isHideConfirmButton = false;
    },
    confirmModalAction(state: IModalState) {
      state.isLoading = true;
    },
    addFieldsInfoModal(state: IModalState, { payload: content }: PayloadAction<IFieldPropsInfo>) {
      state.fieldsInfo = content;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const { showModalWindow, closeModalWindow, confirmModalAction, addFieldsInfoModal } =
  modalSlice.actions;

export const modalSelector = (state: RootState): IModalState => state.modalStore;
