import axios from 'axios';
import { API_URL, TOKEN } from '../constants/api';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
  };
});
