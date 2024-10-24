"use client"

import Image from "next/image";
import { useTranslations } from 'next-intl';
import BackArrowBtn from "@/app/customComponents/BackArrowBtn";

function CommunicationFailed() {
    const t = useTranslations('auth.communication_Failed');
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px] sm:bg-white'>
        <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto py-4 flex-auto sm:max-w-full sm:h-full sm:py-0'>
            <div className='overflow-y-auto overflow-x-hidden bg-white py-11 px-[34px] rounded-8 xs:px-5'>
                <div className="mb-[45px]">
                    <BackArrowBtn link="/register" title={t('go_back')} />
                </div>
                <Image
                    src="/images/warning.png"
                    alt=""
                    className="mx-auto mb-[30px]"
                    width={134}
                    height={134}
                />
                <div className="max-w-[310px] mx-auto">
                    <h3 className="text-[18px] font-medium leading-[22px] text-heading mb-[14px] text-center">{t('title')}</h3>
                    <h4 className="text-h4 font-normal text-[#8B8D97] text-center"> {t('sub_title_1')}</h4>
                    <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]"> {t('sub_title_2')}</h4>
                    <a href="#" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 w-full text-center">{t('contact_with_team')}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunicationFailed