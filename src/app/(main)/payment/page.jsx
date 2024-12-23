'use client';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import BackArrowBtn from "@/app/customComponents/BackArrowBtn";
import { useTranslations } from 'next-intl';
import Preloader from '@/app/customComponents/Preloader';
import { useMutation} from '@tanstack/react-query';
import axiosInstance from '@/lib/axiosInstance';
import { useDispatch } from "react-redux";
import {resetPaymentToken, resetPaymentUrl} from '@/app/slices/authSlice';

const paymentSuccess = async (paymentInfo) => {
  const response = await axiosInstance.post('/api/payment-status/', paymentInfo);
  return response.data;
};
function Payment() {
  const dispatch = useDispatch();
  const t = useTranslations('main.bills_page.open-bills');

  const link = useSelector((state) => `${state.paymentURl}`);
  const [iframeSrc, setIframeSrc] = useState("");
  const invoiceId = useSelector((state) => `${state.invoiceId}`);
  const paymentToken = useSelector((state) => `${state.paymentToken}`);
  // const link = "http://localhost:3000/payment-abort"

  const mutation = useMutation({
    mutationFn: paymentSuccess,
    onSuccess: (response) => {
      dispatch(resetPaymentToken())
    },
    onError: (error) => {

    },  
  });
  
  const email = useSelector((state) => state.userEmail);
  useEffect(() => {

    // Add a unique query parameter to force fresh loading
    const timeout = setTimeout(() => {
      if(link !== ""){
        setIframeSrc(`${link}?t=${Date.now()}`);
      }
    }, 5000); // 5000 ms = 5 seconds

    const handleMessage = (event) => {
      // Validate the origin for security
      // if (event.origin !== 'https://your-iframe-origin.com') return;
      if (event.data?.redirectTo) {
        setIframeSrc(event.data.redirectTo); // Update iframe to the new URL
      }
      const { status, path } = event.data;
      if (status === 'abort' && path === '/payment-abort') {
        console.log('Transaction was aborted!');

        // Navigate or handle the abort logic
      } else if (status === 'success' && path === '/success-payment') {
        console.log('Transaction success!');
        mutation.mutate({ token: paymentToken , invoice_id: invoiceId});


        // Navigate or handle the abort logic
      } else if (status === 'fail' && path === '/payment-fail') {
        console.log('Transaction was failed!');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };

  }, [link]);



  return (
    <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white sm:px-2'>
      <BackArrowBtn link="../bills" title={t('payment')} />
      {/* Back arrow */}
      {/* <div className="flex gap-[21px] items-center">
          <button 
              onClick={() => {
                window.location.href = '../bills';
              }}
              className="text-heading"
          >
              <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
              </span>
          </button>
        <h2 className="text-h2 text-heading mb-0">{t('payment')}</h2>
      </div> */}
      <div className='mt-7'>
        {iframeSrc === "" ? <Preloader /> : <iframe
          src={iframeSrc}
          width="600"
          height="400"
          title="Embedded Website"
          className="w-full h-[600px] md1:h-[400px]"
          allow="payment" // Optional: allow payment features
        />}
      </div>
    </div>
  );
}

export default Payment;



// 'use client'
// import React from 'react'
// import { useSelector } from 'react-redux';

// function Payment() {
  
//   const link = useSelector((state) => `${state.paymentURl}`);
//   const openPopup = () => {
//     const width = 600;
//     const height = 800;
//     const left = (window.screen.width - width) / 2;
//     const top = (window.screen.height - height) / 2;

//     window.open(
//       link,
//       "apiPopup",
//       `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars`
//     );
//   };
//   return (
//     <button
//       onClick={openPopup}
//       className="px-4 py-2 bg-blue-500 text-white rounded"
//     >
//       Open API Link in Popup
//     </button>
//   );
// }

// export default Payment
