export const API_URL = 'https://projectmanagement.herokuapp.com/';
export const TOKEN = 'token';

export interface AuthState {
  userId: string;
  userName: string;
  login: string;
}

export const initialState: AuthState = {
  userId: '',
  userName: '',
  login: '',
};
