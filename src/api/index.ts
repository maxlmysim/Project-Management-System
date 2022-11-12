import axios from 'axios';
import { TOKEN } from '../constants/authorization';

export const api = axios.create({
  baseURL: 'https://projectmanagement.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
  },
});
