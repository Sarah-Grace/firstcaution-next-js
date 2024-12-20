
import axios from 'axios';
import { store } from '@/app/store'; // Import your Redux store

// Create an Axios instance
const axiosInstance = axios.create({
  // baseURL: 'http://192.168.1.27:8000/', // Local API base URL
    baseURL: 'https://api.firstcaution.ch/', //API base URL for vercel
  headers: {
    'X-Frame-Options': 'SAMEORIGIN', // or 'DENY', depending on your needs
  }
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
