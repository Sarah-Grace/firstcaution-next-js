// utils/auth.js
import Cookies from 'js-cookie';

export const setAuthToken = (token) => {
  // Set a cookie with the token and configure it to expire in 1 hour
  Cookies.set('token', token, { expires: 1 / 24 }); // 1 hour in days
};

// This function can be called when the user logs in
export const authUserToken =  (token) => {// Your API call
  if (token) {
    setAuthToken(token); // Set the token in cookies
    // Dispatch login action to your Redux store or handle state as needed
  }
};
// Remove token by removing the cookie
export const removeToken = () => {
  console.log("Remove Token")
    Cookies.remove('token');
};
