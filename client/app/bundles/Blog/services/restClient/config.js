import { AxiosRequestConfig } from 'axios';

const DEFAULT_API_CONFIG = {
  baseURL: 'http://localhost:3000',
  timeout: process.env.TIMEOUT,
  config: AxiosRequestConfig,
  apiVersion: 'v1',
  headers: {
    'Accept': 'application/json',
  },
};

export { DEFAULT_API_CONFIG };