
import axios from 'axios';
import { store } from '@/app/store'; // Import your Redux store

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://2929-154-208-40-121.ngrok-free.app/', // Replace with your API base URL
});

// Add a request interceptor to inject the custom header dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState(); // Get the latest state
    // const apiKey = `Bearer ${state.auth.accessToken}` || state.auth.apiKey; // Use header slice or fallback to auth slice
    const apiKey = state.accessToken === "" ? state.apiKey : `Bearer ${state.accessToken}` ;
    console.log(apiKey)
    // Set the Authorization header with the dynamic API key
    if (apiKey) {
      config.headers['Authorization'] = apiKey;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
