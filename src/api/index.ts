import axios from 'axios';
import { API_URL, TOKEN } from '../constants/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
  },
});
