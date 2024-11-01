"use client"

import Image from "next/image";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../../../lib/axiosInstance'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useGlobalMethods } from '@/hooks/useGlobalMethods';
  
const verifyOtp = async (otp) => {
  const response = await axiosInstance.post('/api/confirm/otp/', otp);
  //console.log(response)
  return response.data;
};

function Verification() {
  
  const [isProcessing, setIsProcessing] =useState(false);
  const { errorTranslate } = useGlobalMethods();
  const t = useTranslations('auth');
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const email = useSelector((state) => state.userEmail);
  const formSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, otp});
    setIsProcessing(true) 
  }
  const [errorOtp, setErrorOtp] =useState("");

  // Mutation hook 
  const mutation = useMutation({
    mutationFn: verifyOtp,
    onSuccess: (response) => {
      router.push('/newPassword');
    },
    onError: (error) => {
      // This function runs if the mutation fails
      // error.response.data.otp !== undefined ? setErrorOtp(error.response.data.otp): setErrorOtp("");
      // console.log( error.response.data.otp);

      if(error.response.data.otp === "Invalid OTP" ) {
        setErrorOtp(error.response.data.otp);
      } else if(error.response.data.otp[0]) {
        setErrorOtp(error.response.data.otp[0]);
      } else {
        setErrorOtp("")
      }
      setIsProcessing(false)
    },
  });
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px] sm:bg-white'>
    <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto py-4 flex-auto sm:max-w-full sm:h-full sm:py-0'>
        <div className='overflow-y-auto overflow-x-hidden bg-white py-11 px-[34px] rounded-8 xs:px-5'>

          <h2 className="text-h2 text-heading text-center mb-10">{t('verification')}</h2>
            <Image
                src="/images/password.png"
                alt=""
                className="mx-auto mb-[30px]"
                width={134}
                height={134}
            />
            <div className="max-w-[310px] mx-auto">
              
              <h3 className="text-[18px] font-medium leading-[22px] text-heading mb-[14px] text-center">{t('verification_page.title')}</h3>
              <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]">{t('verification_page.sub_title')}</h4>
            </div>
            <form action="" className="w-full" onSubmit={formSubmit}>
                <div className="relative flex w-full mb-9 justify-center">
                <InputOTP maxLength={5} value={otp} onChange={(value) => setOtp(value)} >
                  <InputOTPGroup>
                      <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={0} />
                      <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={1} />
                      <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={2} />
                      <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={3} />
                      <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={4} />
                  </InputOTPGroup>
                </InputOTP> 
                </div>
                {errorOtp && <p className="mb-3 -mt-3 text-red-600 text-xs">{errorTranslate(errorOtp)}</p>}
                <button href="submit" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 w-full">
                  {
                    isProcessing 
                    ?      
                      <div className="flex justify-center items-center">  
                        <svg width="16" height="16" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                            </path>
                        </svg>
                        {t('loading')}
                      </div>
                    :
                    t('verify')
                  }
                </button>
            </form>
        </div>
    </div>
  </div>
  )
}

export default Verification