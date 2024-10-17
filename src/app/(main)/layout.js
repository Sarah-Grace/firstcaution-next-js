'use client'
import Sidebar from "../customComponents/sidebar"
import SiteHeader from "../customComponents/siteHeader";
import { useEffect, useRef, useState, createContext } from 'react';
import { startSession, endSession, isSessionActive } from '../(main)/utils/session';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { resetAll } from "@/app/slices/authSlice";
import { removeToken } from "./utils/auth";
import { removeLanguage } from "./utils/language";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';



// Create context to pass the handler
export const MainLayoutContext = createContext();
export default function MainLayout({children}) {

    
    const [title, setTitle] = useState('');

    // it will update title on lanuage switch
    const handleTitleChange = () => {
      setTitle();
    };
  
    const pathname = usePathname()
    const t = useTranslations('main.sidebar_and_header');
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
        dispatch(resetAll());
        removeToken();
        removeLanguage();
    }
    useEffect(() => {
      document.title = "Myfirst by Firstcaution";
      // Start the session on page load
      startSession();
  
      // Attach event listeners to detect user activity
      window.addEventListener('mousemove', handleUserActivity);
      window.addEventListener('keydown', handleUserActivity);
  
      switch(pathname) {
        case '/home':
            setTitle(t('overview'))
            break;
        case '/contracts':
        case '/contracts/contractDetail':
            setTitle(t('my_contracts'))
            break;
        case '/bills':
        case '/bills/billDetail':
        case '/bills/payBill':
        case '/bills/paymentPlan':
        case '/bills/paymentTerm':
        case '/bills/monthlyPayment':
            setTitle(t('my_bills'))
            break;     
        case '/deposit':
        case '/adjustDeposit':
            setTitle(t('my_deposit'))
            break; 
        case '/firstmoove':
            setTitle(FIRSTMOOVE_HEADER)
            break;
        case '/firstees':
            setTitle(t('Firstmoove'))
            break;
        case '/settings':
            setTitle(t('settings'))
            break;
    }

      return () => {
        // Clean up listeners on unmount
        clearTimeout(timeoutRef.current);
        window.removeEventListener('mousemove', handleUserActivity);
        window.removeEventListener('keydown', handleUserActivity);
      };
    },[pathname, title]);
    return (
        <div className="bg-white">
            <Sidebar logout={logout} />
            <main>
                <div className="ml-[250px] lg:ml-0 sticky top-0 z-10">
                <MainLayoutContext.Provider value={{ title, handleTitleChange }}>
                  <SiteHeader />
                </MainLayoutContext.Provider>
                </div>
                <div className="bg-[#f5f7fa] site-main-section px-10 pt-[30px] ml-[250px] lg:ml-10 xs:px-1 pb-7">
                    {children}
                </div>
            </main>
        </div>
    );
}