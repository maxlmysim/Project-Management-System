import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService, User } from '../api/authService';
import { AxiosError } from 'axios';
import { TOKEN } from '../constants/authorization';
import { RootState } from './store';

interface AuthState {
  isLogin: boolean;
  login: string;
  userId: string;
  userName: string;
}

const initialState: AuthState = {
  isLogin: false,
  login: '',
  userId: '',
  userName: '',
};

export const signIn = createAsyncThunk('users/singIn', async (user: User, { rejectWithValue }) => {
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
});

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    signOut(state: AuthState) {
      state.isLogin = false;
      state.login = '';
      state.userId = '';
      state.userName = '';
      localStorage.removeItem(TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogin = true;
      state.userId = action.payload.userId;
      state.userName = action.payload.name;
      state.login = action.payload.login;
      localStorage.setItem(TOKEN, action.payload.token);
    });
  },
});

export const { signOut } = authSlice.actions;

export const authReducers = authSlice.reducer;

export const authSelector = (state: RootState): AuthState => state.authStore;
