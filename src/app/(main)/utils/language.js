// utils/auth.js
import Cookies from 'js-cookie';

export const setLanguage= (lang) => {
  Cookies.set('language', lang, { expires: 1  }); 
};
export const getLanguage= () => {
  return Cookies.get('language'); 
};
// This function can be called when the user change language
export const userLanguage =  (lang) => {
    setLanguage(lang); // Set the language in cookies
};
// Remove token by removing the cookie
export const removeLanguage = () => {
    Cookies.remove('language');
};
