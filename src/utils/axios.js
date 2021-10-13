import axios from 'axios';
import { apiConfig } from 'src/config';

const axiosInstance = axios.create({
  baseURL: apiConfig.api_host,
  timeout: 4000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
);

export * from 'axios';

export default axiosInstance;
