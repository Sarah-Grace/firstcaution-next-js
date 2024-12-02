'use client'
import { useSelector } from 'react-redux';
import BackArrowBtn from "@/app/customComponents/BackArrowBtn";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
 
function Payment() {
    const link = useSelector((state) => state.paymentURl);
    const router = useRouter();

    // useEffect(() => {
    //   // Listen for messages from the iframe
    //   const handleMessage = (event) => {
    //     if (!event.origin.includes('saferpay.com')) return;  // Check if the message is from Saferpay

    //     const { status } = event.data;
    //     console.log(status);
        
    //     if (status === 'success') {
    //       alert('Payment Successful');
    //       router.push('/bills');
    //     } else if (status === 'fail') {
    //       alert('Payment Failed. Please try again.');
    //       router.push('/bills');
    //     } else if (status === 'cancel') {
    //       alert('Payment was canceled.');
    //       router.push('/bills');
    //     }
    //   };

    //   window.addEventListener('message', handleMessage);
    //   return () => window.removeEventListener('message', handleMessage);
    // }, []);
  
    return (
      <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white sm:px-2'>
        <BackArrowBtn link="../bills" title="payment" />
        <div className='mt-7'>
          <iframe
            src={link}
            width="600"
            height="400"
            title="Embedded Website"
            className="w-full h-[600px] md1:h-[400px]"
            onError={() => alert('Failed to load payment iframe. Please try again later.')}
          />
        </div>
      </div>
    );
}

export default Payment;
