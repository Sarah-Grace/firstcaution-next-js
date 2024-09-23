import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://8fa4-154-208-40-121.ngrok-free.app/', // Replace with your API base URL
  headers: { 'Authorization': 'Api-Key HOnVzHkx.IW0KBoWpwjGfBSF19xfMyKxS8kfwUVeo',
   },
});

export default axiosInstance;