'use client'; // Required for browser-based session management
import Cookies from 'js-cookie';

const SESSION_KEY = 'session_active';
const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes

// Create a session by setting a cookie
export const startSession = () => {
  Cookies.set(SESSION_KEY, true, { expires: 1 / 288 }); // 5 minutes (1 day = 288 five-minute segments)
};

// End the session by removing the cookie
export const endSession = () => {
  Cookies.remove(SESSION_KEY);
  Cookies.remove("language")
};

// Check if session is active
export const isSessionActive = () => {
  return Cookies.get(SESSION_KEY);
};
