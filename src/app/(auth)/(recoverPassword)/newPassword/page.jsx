"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useMutation} from '@tanstack/react-query';
import axiosInstance from '../../../../lib/axiosInstance';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

// Function for reset password
const newPassword = async (Password) => {
  const response = await axiosInstance.post('/api/reset/password/complete/', Password);
  //console.log(response)
  return response.data;
};

function NewPassword() {
  const [isProcessing, setIsProcessing] =useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [showpasswordIcon, setShowPasswordIcon] = useState(false);
  const [showConfirmPasswordIcon, setShowConfirmPasswordIcon] = useState(false);
  const t = useTranslations('auth');
    const router = useRouter();
    const email = useSelector((state) => state.userEmail);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    const [ isDiffPassword , setIsSamePassword ] = useState(false);
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
  
        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue
        }));

    }
    useEffect(()=> {
      formData.password === "" ? setShowPasswordIcon(false) : setShowPasswordIcon(true)
      formData.confirmPassword === "" ? setShowConfirmPasswordIcon(false) : setShowConfirmPasswordIcon(true)
    }, [formData])

    // Mutation hook for reset password
    const mutation = useMutation({
      mutationFn: newPassword,
      onSuccess: (response) => {

        router.push('/passwordChanged');
      },
      onError: (error) => {
        setIsProcessing(false)
      },
    });
    const formSubmit = (e) => {
        e.preventDefault();
        if(formData.password === formData.confirmPassword) {
          setIsSamePassword(false);
          setIsProcessing(true)
          mutation.mutate({ email: email, password: formData.password});
        } else {
          setIsSamePassword(true);
        }
    }
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)]  bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px] sm:bg-white'>
      <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto py-4 flex-auto sm:max-w-full sm:h-full sm:py-0'>
          <div className='overflow-y-auto overflow-x-hidden bg-white py-11 px-[34px] rounded-8 xs:px-5'>

            <h2 className="text-h2 text-heading text-center mb-10">{t('new_password_page.new_password')}</h2>
              <Image
                  src="/images/password.png"
                  alt=""
                  className="mx-auto mb-[30px]"
                  width={134}
                  height={134}
              />
              <div className="max-w-[310px] mx-auto">
                
                <h3 className="text-[18px] font-medium leading-[22px] text-heading mb-[14px] text-center">{t('new_password_page.create_new_password')}</h3>
              </div>
              <form action="" className="w-full" onSubmit={formSubmit}>
                <div className={`bg-[#f6f6f6] rounded-6 relative flex w-full mb-6  ${isDiffPassword && "bg-[#FFF4F4] border border-[#F73737]"}`}>
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      name="password"
                      placeholder={t('password')}
                      className={`leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none  ${showpasswordIcon ? 'text-left' : 'text-center'}`}
                      onChange={handleInput}
                      value={formData.password}
                    />
                    {
                      showpasswordIcon && 
                      <button type="button" onClick={togglePassword} className="absolute right-[10px] bg-none border-0 cursor-pointer top-1/2 -translate-y-1/2 text-sm text-[#909090]">
                        {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                      </button>
                    }
                </div>   
                <div className={`bg-[#f6f6f6] rounded-6 relative flex w-full mb-6  ${isDiffPassword && "bg-[#FFF4F4] border border-[#F73737]"}`}>
                    <input 
                      type={showConfirmPassword ? 'text' : 'password'}  
                      name="confirmPassword"
                      placeholder={t('new_password_page.confirm_password')} 
                      className={`leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none  ${showConfirmPasswordIcon ? 'text-left' : 'text-center'}`}
                      onChange={handleInput}
                      value={formData.confirmPassword}
                    />
                    {
                      showConfirmPasswordIcon && 
                      <button type="button" onClick={toggleConfirmPassword} className="absolute right-[10px] bg-none border-0 cursor-pointer top-1/2 -translate-y-1/2 text-sm text-[#909090]">
                        {showConfirmPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                      </button>
                    }
                </div>
                <div>

                </div>
                <p className={`${isDiffPassword ? "block" : "hidden"} text-[#F73737] text-xs font-medium -mt-4 mb-4`} >Password and Confirm Password are not same </p>
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
                    t('new_password_page.confirm')
                  }
                </button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default NewPassword