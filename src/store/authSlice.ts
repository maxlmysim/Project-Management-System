import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from '../api/authService';
import { AxiosError } from 'axios';
import { TOKEN, USER_ID } from '../constants/api';
import { RootState, TypedThunkAPI } from './store';
import { userService } from '../api/userService';
import { AppFormTypes } from '../types/formTypes';
import {
  INewUser,
  ISignUpResponse,
  IUser,
  IResponseUserData,
  ISignInResponse,
} from 'types/userTypes';
import { closeModalWindow } from './modalSlice';
import { AppRoutes } from '../constants/routes';

interface IAuthState {
  isLogin: boolean;
  login: string;
  userId: string;
  name: string;
  isLoading: boolean;
}

const initialState: IAuthState = {
  isLogin: false,
  login: '',
  userId: '',
  name: '',
  isLoading: false,
};

export const signIn = createAsyncThunk<ISignInResponse, IUser, TypedThunkAPI>(
  'users/singIn',
  async (user: IUser, { rejectWithValue }) => {
    try {
      const response = await authService.signInUser(user);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

export const signUp = createAsyncThunk<ISignUpResponse, INewUser, TypedThunkAPI>(
  'users/singUp',
  async (newUser: INewUser, { rejectWithValue }) => {
    try {
      const response = await authService.signUpUser(newUser);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getUserData = createAsyncThunk<IResponseUserData, string, TypedThunkAPI>(
  'users/getUser',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await userService.getUser(userId);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getMyUserData = createAsyncThunk<IResponseUserData, void, TypedThunkAPI>(
  'users/getMyData',
  async (_, { rejectWithValue }) => {
    try {
      const userId = localStorage.getItem(USER_ID) || 'lorem';
      const response = await userService.getUser(userId);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

export const editLogin = createAsyncThunk<IResponseUserData, AppFormTypes, TypedThunkAPI>(
  'users/editLogin',
  async (data: AppFormTypes, { rejectWithValue, getState, dispatch }) => {
    try {
      const { userId, name } = getState().authStore;
      const { login, password } = data;
      const usedData = { name, login, password };

      const response = await userService.updateUser(userId, usedData);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    } finally {
      dispatch(closeModalWindow());
    }
  }
);

export const editName = createAsyncThunk<IResponseUserData, AppFormTypes, TypedThunkAPI>(
  'users/editName',
  async (data: AppFormTypes, { rejectWithValue, getState, dispatch }) => {
    try {
      const { userId, login } = getState().authStore;
      const { name, password } = data;
      const usedData = { name, login, password };

      const response = await userService.updateUser(userId, usedData);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    } finally {
      dispatch(closeModalWindow());
    }
  }
);

export const deleteUser = createAsyncThunk<IResponseUserData, void, TypedThunkAPI>(
  'users/deleteUser',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { userId } = getState().authStore;
      const response = await userService.deleteUser(userId);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    } finally {
      dispatch(closeModalWindow());
    }
  }
);

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    signOut(state) {
      state.isLogin = false;
      state.login = '';
      state.userId = '';
      state.name = '';
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(USER_ID);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogin = true;
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.login = action.payload.login;
      localStorage.setItem(TOKEN, action.payload.token);
      localStorage.setItem(USER_ID, action.payload.userId);
      state.isLoading = false;
    });
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(signUp.fulfilled, (state) => {
      state.isLoading = false;
      window.location.href = AppRoutes.LOGIN;
    });
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getMyUserData.fulfilled, (state, action) => {
      state.isLogin = true;
      state.userId = action.payload._id;
      state.name = action.payload.name;
      state.login = action.payload.login;
    });
    builder.addCase(editLogin.fulfilled, (state, action) => {
      state.login = action.payload.login;
      state.name = action.payload.name;
    });
    builder.addCase(editName.fulfilled, (state, action) => {
      state.login = action.payload.login;
      state.name = action.payload.name;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.isLogin = false;
      state.login = '';
      state.userId = '';
      state.name = '';
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(USER_ID);
    });
  },
});

export const { signOut } = authSlice.actions;

export const authReducers = authSlice.reducer;

export const authSelector = (state: RootState): IAuthState => state.authStore;
