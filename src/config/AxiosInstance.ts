import axios from "axios";
import { BASE_API } from "./HttpConfigs";

const AxiosInstance = axios.create({
  baseURL: BASE_API,
});

// Request interceptor
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
