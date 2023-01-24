import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://getgenie.com/xpeed/',
  // baseURL: 'http://localhost/',
});