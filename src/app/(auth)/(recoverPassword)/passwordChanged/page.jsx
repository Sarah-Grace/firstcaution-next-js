"use client"

import Image from "next/image";
import { useTranslations } from 'next-intl';

function PasswordChanged() {
  const t = useTranslations('auth.password_changed');

  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px] sm:bg-white'>
      <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto py-4 flex-auto sm:max-w-full sm:h-full sm:py-0'>
          <div className='overflow-y-auto overflow-x-hidden bg-white py-11 px-[34px] rounded-8 xs:px-5'>
            <Image
                src="/images/confirmation.png"
                alt=""
                className="mx-auto mb-[30px]"
                width={134}
                height={134}
            />
            <div className="max-w-[300px] mx-auto">
              <h3 className="text-[18px] font-medium leading-[22px] text-heading mb-[14px] text-center">{t('title')}</h3>
              <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]"> {t('sub_title')}</h4>
              <a href="/login" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 w-full text-center">{t('go_to_signin')}</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PasswordChanged