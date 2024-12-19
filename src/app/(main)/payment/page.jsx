'use client';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import BackArrowBtn from "@/app/customComponents/BackArrowBtn";
import { useTranslations } from 'next-intl';
import Preloader from '@/app/customComponents/Preloader';

function Payment() {
  const t = useTranslations('main.bills_page.open-bills');
  const [iframeSrc, setIframeSrc] = useState("");
  const link = useSelector((state) => `${state.paymentURl}`);

  useEffect(() => {
    // Add a unique query parameter to force fresh loading
    const uniqueSrc = `${link}?t=${Date.now()}`;
    setIframeSrc(uniqueSrc);
  }, []);


  return (
    <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white sm:px-2'>
      <BackArrowBtn link="../bills" title={t('payment')} />
      <div className='mt-7'>
        {iframeSrc === "" ? <Preloader /> : <iframe
          src={iframeSrc}
          width="600"
          height="400"
          title="Embedded Website"
          className="w-full h-[600px] md1:h-[400px]"
        />}
      </div>
    </div>
  );
}

export default Payment;
