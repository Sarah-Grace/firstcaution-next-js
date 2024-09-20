import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.62:8000', // Replace with your API base URL
  headers: { 'Authorization': 'Api-Key HOnVzHkx.IW0KBoWpwjGfBSF19xfMyKxS8kfwUVeo',
   },
});

export default axiosInstance;