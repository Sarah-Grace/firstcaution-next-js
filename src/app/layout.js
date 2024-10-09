'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React,{ useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./store";
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '../../messages/en.json'; // Statically import message
import frMessages from '../../messages/fr.json';
import deMessages from '../../messages/de.json'
import itMessages from '../../messages/it.json' 
import Cookies from 'js-cookie';
import Preloader from "@/app/customComponents/Preloader";


config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  // let locale = Cookies.get('language') || 'fr';
  const [locale , setLocale] =useState("fr");
  const [messages, setMessages] = useState(frMessages);
  useEffect(()=>{
      setLocale(Cookies.get('language') || 'fr');
      switch(locale) {
        case 'fr':
          setMessages(frMessages)
          console.log(messages)
          break;
        case 'en':
          setMessages(enMessages)
          console.log(messages)
          break;
          case 'de':
            setMessages(deMessages)
            console.log(messages)
            break;
          case 'it':
            setMessages(itMessages)
            console.log(messages)
            break;
      }

      const handleStart = () => setLoading(true);
      const handleComplete = () => setLoading(false);
  
      // Add listeners for route changes
      const handleBeforeUnload = () => setLoading(true); // Optional: show loader on navigation
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      // Cleanup
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
  },[locale])

  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-bgc-2`}>
      <NextIntlClientProvider  locale={locale}  messages={messages}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
              <>
              <>
                {loading ? <Preloader /> : <>{children}</>}
              </>
              </>
              </PersistGate>
          </Provider>
        </QueryClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
