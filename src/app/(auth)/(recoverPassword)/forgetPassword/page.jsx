"use client"

import { useState } from "react";
import Image from "next/image";
import { useMutation} from '@tanstack/react-query';
import axiosInstance from '../../../../lib/axiosInstance';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import {addEmail} from '../../../slices/authSlice';
import LangSwitch from "@/app/customComponents/langSwitch";
import { useTranslations } from 'next-intl';

// Function for reset password
const resetPassword = async (User) => {
  const response = await axiosInstance.post('/api/reset/password/', User);
  console.log(response)
  return response.data;
};

function ForgetPassword() {
    const t = useTranslations('auth');
    const dispatch = useDispatch();
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: ""
    });
    const [invalidEmail , setinvalidEmail ] = useState("")
    // Mutation hook for reset password
    const mutation = useMutation({
      mutationFn: resetPassword,
      onSuccess: (response) => {
        dispatch(addEmail(formData.email));
        console.log("Response", response);
        router.push('/verification');
      },
      onError: (error) => {
          // This function runs if the mutation fails

          setinvalidEmail(error.response.data.email)

      },
    });
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
  
        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue
        }));
    }
    const formSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ email: formData.email});
    }
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px] sm:bg-white'>
      <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto my-4 flex-auto sm:max-w-full sm:h-full sm:py-0'>
          <div className='flex flex-col justify-center items-center max-h-full w-full overflow-y-auto bg-white py-11 px-[34px] rounded-8 sm:py-5 xs:px-5'>
            <div className="w-[170px] mx-auto mb-5">
                <LangSwitch />
            </div>
            <h2 className="text-h2 text-heading text-center mb-10">{t('forget_password_page.forget_password')}</h2>
              <Image
                  src="/images/password.png"
                  alt=""
                  className="mx-auto mb-[30px]"
                  width={134}
                  height={134}
              />
              <div className="max-w-[300px]">
                
                <h3 className="text-[18px] font-medium leading-[22px] text-heading mb-[14px] text-center">{t('forget_password_page.title')}</h3>
                <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]">{t('forget_password_page.sub_title')}</h4>
              </div>
              <form action="" className="w-full" onSubmit={formSubmit}>
                  <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
                      <input 
                          type="email" 
                          name="email"
                          placeholder={t('email')} 
                          className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none text-center border border-[#C6C6C6] rounded-8 sm:px-1"
                          onChange={handleInput}
                          value={formData.email}
                      />
                  </div>
                  <p className={`${invalidEmail !== "" ? "block" : "hidden"} text-[#F73737] text-xs font-medium -mt-4 mb-4`} >This Email is not registered</p>
                  <button href="submit" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 w-full text-center">{t('forget_password_page.send')}</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default ForgetPassword