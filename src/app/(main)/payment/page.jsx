'use client';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import BackArrowBtn from "@/app/customComponents/BackArrowBtn";
import { useTranslations } from 'next-intl';

function Payment() {
  const t = useTranslations('main.bills_page.open-bills');
  const link = useSelector((state) => state.paymentURl);
  const iframeRef = useRef(null);
  const router = useRouter();




  return (
    <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white sm:px-2'>
      <BackArrowBtn link="../bills" title={t('payment')} />
      <div className='mt-7'>
        <iframe
          ref={iframeRef}
          src={link}
          width="600"
          height="400"
          title="Embedded Website"
          className="w-full h-[600px] md1:h-[400px]"
        />
      </div>
    </div>
  );
}

export default Payment;
