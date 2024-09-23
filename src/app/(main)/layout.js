'use client'
import Sidebar from "../customComponents/sidebar"
import SiteHeader from "../customComponents/siteHeader";
import { useEffect, useRef } from 'react';
import { startSession, endSession, isSessionActive } from '../(main)/utils/session';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import {resetAll} from '../slices/authSlice';

export default function MainLayout({children}) {
    const dispatch = useDispatch();
    const timeoutRef = useRef(null);
    const router = useRouter(); // Get the router instance
  
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
  
      timeoutRef.current = setTimeout(() => {
        endSession();  // End the session after 5 minutes of inactivity
        alert('Session expired due to inactivity.');
        logout()
      }, 5 * 60 * 1000);  // 5 minutes in milliseconds
    };
  
    const handleUserActivity = () => {
      if (!isSessionActive()) {
        startSession();  // Start a new session if there is activity
      }
      resetTimeout();
    };
    const logout= () => {
        router.push('/login');  // Navigate to login page or another route
        dispatch(resetAll())
    }
    useEffect(() => {
      // Start the session on page load
      startSession();
  
      // Attach event listeners to detect user activity
      window.addEventListener('mousemove', handleUserActivity);
      window.addEventListener('keydown', handleUserActivity);
  
      return () => {
        // Clean up listeners on unmount
        clearTimeout(timeoutRef.current);
        window.removeEventListener('mousemove', handleUserActivity);
        window.removeEventListener('keydown', handleUserActivity);
      };
    });
    return (
        <div>
            <Sidebar logout={logout} />
            <main>
                <div className="ml-[250px] lg:ml-0 sticky top-0 z-10">
                <SiteHeader />
                </div>
                <div className="bg-[#f5f7fa] site-main-section px-10 pt-[30px] ml-[250px] lg:ml-[50px] xs:px-1">
                    {children}
                </div>
            </main>
        </div>
    );
}