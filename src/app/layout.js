'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./customComponents/sidebar";
import SiteHeader from "./customComponents/siteHeader";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./store";

config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body className={inter.className}>
        
      
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {
        console.log("children",children)}
         {children}
          {/* <Sidebar />
          <main>
            <div className="ml-[250px] lg:ml-0 sticky top-0 z-10">
              <SiteHeader />
            </div>
            <div className="bg-[#f5f7fa] site-main-section px-10 pt-[30px] ml-[250px] lg:ml-[50px] xs:px-1">
              {children}
            </div>
          </main> */}
          </PersistGate>
          </Provider>
        </QueryClientProvider>
        
      </body>
    </html>
  );
}
