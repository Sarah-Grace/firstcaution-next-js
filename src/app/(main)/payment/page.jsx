'use client';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import BackArrowBtn from "@/app/customComponents/BackArrowBtn";

function Payment() {
  const link = useSelector((state) => state.paymentURl);
  const iframeRef = useRef(null);
  const router = useRouter();

  const handleIframeLoad = () => {
    const currentUrl = iframeRef.current?.contentWindow?.location.href;
    console.log(currentUrl)
    if (currentUrl === "https://api.firstcaution.ch/api/payment-abort/") {
      router.push('/bills');
    }
  };

  return (
    <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white sm:px-2'>
      <BackArrowBtn link="../bills" title="payment" />
      <div className='mt-7'>
        <iframe
          ref={iframeRef}
          src={link}
          width="600"
          height="400"
          title="Embedded Website"
          className="w-full h-[600px] md1:h-[400px]"
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  );
}

export default Payment;
