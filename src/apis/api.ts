import axios from 'axios';
import { localStorageKey } from '@/constants/localStorageKey';

const API_TIMEOUT = 30000; // 30s
const BASE_URL = 'https://pokeapi.co/api/v2';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  withCredentials: false,
});

// authorization 토큰
api.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem(localStorageKey.JWT_TOKEN);

    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
