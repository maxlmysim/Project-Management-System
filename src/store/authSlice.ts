import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService, NewUser, User } from '../api/authService';
import { AxiosError } from 'axios';
import { TOKEN, USER_ID } from '../constants/api';
import { RootState } from './store';
import { userService } from '../api/userService';

interface AuthState {
  isLogin: boolean;
  login: string;
  userId: string;
  userName: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  isLogin: false,
  login: '',
  userId: '',
  userName: '',
  isLoading: false,
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

export const signUp = createAsyncThunk(
  'users/singUp',
  async (newUser: NewUser, { rejectWithValue }) => {
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

export const getUser = createAsyncThunk(
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

export const getMyData = createAsyncThunk('users/getMyData', async (_, { rejectWithValue }) => {
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
      localStorage.removeItem(USER_ID);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogin = true;
      state.userId = action.payload.userId;
      state.userName = action.payload.name;
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
    });
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getMyData.fulfilled, (state, action) => {
      state.isLogin = true;
      state.userId = action.payload._id;
      state.userName = action.payload.name;
      state.login = action.payload.login;
    });
    builder.addCase(getMyData.rejected, (state) => {
      state.isLogin = false;
      state.login = '';
      state.userId = '';
      state.userName = '';
    });
  },
});

export const { signOut } = authSlice.actions;

export const authReducers = authSlice.reducer;

export const authSelector = (state: RootState): AuthState => state.authStore;
