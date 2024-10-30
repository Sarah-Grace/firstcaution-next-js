'use client';

import Image from "next/image";
import Link from "next/link";
import { useMutation} from '@tanstack/react-query';
import axiosInstance from '../../../../lib/axiosInstance';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import {addUserInfo } from '../../../slices/authSlice';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import * as React from "react"
import DatePicker , { DateObject } from "react-multi-date-picker"
import LangSwitch from "@/app/customComponents/langSwitch";
import { useTranslations } from 'next-intl';
import { useGlobalMethods } from '@/hooks/useGlobalMethods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';


// Function to create a new user
const createUser = async (newUser) => {
    const response = await axiosInstance.post('/api/register/', newUser);
    //console.log(response)
    return response.data;
  };

// Define Zod schema for form validation
const formSchema = z.object({
  fname: z.string().min(1, 'Name is required'), // Name is required and cannot be empty
  lname: z.string().min(1, 'Name is required'), // Name is required and cannot be empty
  email: z.string().email('Invalid email address'), // Email must be valid
  password: z.string().min(8, 'Minimum 8 characters') // Password must be at least 8 chars
});
const passwordSchema = 
z.string().min(8, { message: "characters" }).regex(/[A-Z]/, { message: "uppercase" }).regex(/\d/, { message: "digit" });
function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const { errorTranslate } = useGlobalMethods();
  const t = useTranslations('auth');
  const vt = useTranslations('validation')
    const dispatch = useDispatch();
    const router = useRouter();
    const [emailError, setEmailError] = useState("");
    // State for form inputs
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const today = new DateObject();
  const maxDob = new DateObject();
  maxDob.setYear(today.year - 16);
  const [date, setDate] = useState(null);


  // State for validation errors
  const [errors, setErrors] = useState({});
  const [dateError, setDateError] = useState("")
  const [passwordError, setPasswordError] = useState(['characters', 'uppercase', 'digit'])
  const [isMissing, setIsMissing] = useState({
      uppercase: false,
      characters: false,
      digit: false
  })
  const [passwordStatus, setPasswordStatus] = useState({
    uppercase: "text-grey-2 bg-[#F8F6F6]",
    characters: "text-grey-2 bg-[#F8F6F6]",
    digit: "text-grey-2 bg-[#F8F6F6]"
  })
  const setPasswordStatusValue = (value, prop) => {
    setPasswordStatus((prevData) => ({
      ...prevData,
      [prop]: value
    }))
    setIsMissing((prev) => ({
      ...prev,
      [prop]: false
    }))
  }
  const passwordValidationState = (errorArray ) => {
    if (errorArray && errorArray.length > 0) {
      // style for minimum characters 
      errorArray.includes('characters') 
      ?
        setPasswordStatusValue("text-grey-2 bg-[#F8F6F6]", "characters")
      :
        setPasswordStatusValue("text-[#0BA212] bg-[#ACFFDC] bg-opacity-25" , "characters")
      // style for uppercase
      errorArray.includes('uppercase')
      ?
        setPasswordStatusValue("text-grey-2 bg-[#F8F6F6]", "uppercase")
      :
        setPasswordStatusValue("text-[#0BA212] bg-[#ACFFDC] bg-opacity-25" , "uppercase")
      // style for digit
      errorArray.includes('digit')
      ?
        setPasswordStatusValue("text-grey-2 bg-[#F8F6F6]", "digit")
      :
        setPasswordStatusValue("text-[#0BA212] bg-[#ACFFDC] bg-opacity-25" , "digit")
    } else {
      
    }

  }
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "password") {
      const resultPassword = passwordSchema.safeParse(value);
      if (!resultPassword.success) {
        // Handle validation errors
        const errors = resultPassword.error.format();
        setPasswordError(errors._errors);
        console.log(errors._errors)
        passwordValidationState(errors._errors)
      } else {
        console.log(passwordError.uppercase);
        setPasswordError([])
        setIsMissing({
          uppercase: false,
          characters: false,
          digit: false
        })
        setPasswordStatus((prevData) => ({
          ...prevData,
          characters: "text-[#0BA212] bg-[#ACFFDC] bg-opacity-25",
          uppercase: "text-[#0BA212] bg-[#ACFFDC] bg-opacity-25",
          digit: "text-[#0BA212] bg-[#ACFFDC] bg-opacity-25"
        }));
        console.log(passwordStatus.uppercase)
      }
    }
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    
    
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMissing({
      uppercase: false,
      characters: false,
      digit: false
    })
    passwordError.includes("uppercase") && setIsMissing((prev) => ({ ...prev, uppercase: true  }))
    passwordError.includes("characters") &&setIsMissing((prev) => ({ ...prev, characters: true }))
    passwordError.includes("digit") && setIsMissing((prev) => ({ ...prev, digit: true }))
    if(date === null) {
      setDateError("Select Date of Birth")
    }else if(date !== null){
      setDateError("")
      if( !passwordError.includes("uppercase") && !passwordError.includes("characters") &&  !passwordError.includes("digit")) {
        
        mutation.mutate({ email: formData.email, password: formData.password, first_name: formData.fname, last_name: formData.lname, date_of_birth: date.format("YYYY-MM-DD"), "platform": "internal_user"})
      }
    } 
  };

    // Mutation hook for creating a user
    const mutation = useMutation({
      mutationFn: createUser,
      onSuccess: (response) => {
        dispatch(addUserInfo( { userEmail: response.email, userName: response.username} ));
        console.log("Response",response);
        router.push('/registerVerification');
      },
      onError: (error) => {
        // This function runs if the mutation fails
        setEmailError("")
        error.response.data.msg === "Failed to communicate with external service." && router.push('../communicationFailed');
        console.log(error.response.data.email[0])
        setEmailError(error.response.data.email[0]);

        // error.response.data=== "Failed to communicate with external service" && router.push('/communicationFailed');
      },
    });
  
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px] sm:bg-white'>
        <div className='flex flex-col justify-center max-w-[500px] h-full mx-auto py-4 flex-auto sm:max-w-full sm:h-full sm:py-0'>
            <div className='overflow-y-auto overflow-x-hidden bg-white py-11 px-[34px] rounded-8 xs:px-5'>
                
                <Image
                    src="/images/logos/logo.png"
                    alt=""
                    className="mx-auto mb-[30px]"
                    width={167}
                    height={52}
                />
                <h2 className="text-h2 text-heading text-center mb-2">{t('register_page.title')}</h2>
                <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]">{t('register_page.sub_title')}</h4>
                <div className="w-[170px] mx-auto -mt-[46px] mb-5">
                    <LangSwitch />
                </div>
                <form action="" className="w-full" onSubmit={handleSubmit}>
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
                        <span className="w-[50px] flex-[0_0_50px] justify-center  py-0 flex items-center">
                            <Image
                                src="/images/icons/user-icon.png"
                                alt=""
                                className="w-[20px] h-[20px]"
                                width={20}
                                height={20}
                            />
                        </span>
                        <input 
                            type="text" 
                            name="fname"
                            placeholder={t('register_page.first_name')} 
                            value={formData.fname}
                            onChange={handleChange}
                            className="leading-[50px] py-0 pl-[5px] pr-4 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            required
                        />
                    </div>
                    {/* {errors.fname && <p className="mb-3 -mt-3 text-red-600 text-xs">{errors.fname}</p>} */}
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
                        <span className="w-[50px] flex-[0_0_50px] justify-center py-0 flex items-center">
                            <Image
                                src="/images/icons/user-icon.png"
                                alt=""
                                className="w-[20px] h-[20px]"
                                width={20}
                                height={20}
                            />
                        </span>
                        <input 
                            type="text" 
                            name="lname"
                            placeholder={t('register_page.last_name')} 
                            value={formData.lname}
                            onChange={handleChange}
                            className="leading-[50px] py-0 pl-[5px] pr-4 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            required
                        />
                    </div>
                    {/* {errors.lname && <p className="mb-3 -mt-3 text-red-600 text-xs">{errors.lname}</p>} */}
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
                        <span className="w-[50px] flex-[0_0_50px] justify-center py-0 flex items-center">
                            <Image
                                src="/images/icons/email-icon.png"
                                alt=""
                                className="w-[20px] h-[16px]"
                                width={20}
                                height={16}
                            />
                        </span>
                        <input 
                            type="email" 
                            name="email"
                            placeholder={t('email')} 
                            value={formData.email}
                            onChange={handleChange}
                            className="leading-[50px] py-0 pl-[5px] pr-4 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            required
                       />
                    </div>
                    {emailError  && <p className="mb-3 -mt-3 text-red-600 text-xs">{errorTranslate(emailError)}</p>}
                    {/* <div>
                        {errors.email && <p className="mb-3 -mt-3 text-red-600 text-xs">{errors.email}</p>}
                    </div> */}
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full">
                        <span className="w-[50px] flex-[0_0_50px] justify-center py-0 flex items-center">
                            <Image
                                src="/images/icons/password.png"
                                alt=""
                                className="w-[16px] h-[22px]"
                                width={16}
                                height={22}
                            />
                        </span>
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder={t('register_page.password')} 
                            value={formData.password}
                            onChange={handleChange}
                            className="leading-[50px] py-0 pl-[5px] pr-[30px] text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none xs:pr-[5px]"
                            
                        />
                        <button type="button" onClick={togglePassword} className="absolute right-[10px] bg-none border-0 cursor-pointer top-1/2 -translate-y-1/2 text-sm text-[#909090]">
                          {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-3 my-3">
                      <p className={`text-xs ${passwordStatus.characters}  px-2 leading-[18px] rounded-2xl ${isMissing.characters && 'text-red-600 bg-red-200'}`}>
                        <span className="pr-[5px]">
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        {vt('password.minimum_characters')}
                      </p>
                      <p className={`text-xs  ${passwordStatus.uppercase} px-2 leading-[18px] rounded-2xl ${isMissing.uppercase && 'text-red-600 bg-red-200'}`}>
                        <span className="pr-[5px]">
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        {vt('password.uppercase')}
                      </p>
                      <p className={`text-xs ${passwordStatus.digit} px-2 leading-[18px] rounded-2xl ${isMissing.digit && 'text-red-600 bg-red-200'}`}>
                        <span className="pr-[5px]">
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        {vt('password.digit')}
                      </p>
                    </div>
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full">
                      <span className="w-[50px] flex-[0_0_50px] justify-center py-0 flex items-center">
                          <Image
                              src="/images/icons/calendar-icon.png"
                              alt=""
                              className="w-[16px] h-[16px]"
                              width={16}
                              height={16}
                          />
                      </span>
                        {/* <DatePicker
                          value={date}
                          onChange={setDate}
                          placeholder={t('register_page.dob')}
                        >
                        </DatePicker> */}
                        <DatePicker
                          format="DD.MM.YYYY"
                          value={date}
                          onChange={setDate}
                          placeholder={t('register_page.dob')}
                          minDate="1940/01/01"
                          maxDate={maxDob}
                          currentDate={maxDob}
                        >
                        </DatePicker>
                    </div> 
                    {dateError && <p className="my-3 text-red-600 text-xs">{errorTranslate(dateError)}</p>}
                    <h4 className="text-h4 font-normal text-center text-[#8B8D97] mb-[70px] mt-12">
                        <span>{t('register_page.have_account')} 
                        </span>
                        <Link 
                        href="/login"
                        className="text-primary pl-1"
                        >
                            {t('login')} 
                        </Link>
                    </h4>
                    <button  disabled={mutation.isLoading} className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4">
                    {mutation.isLoading ? 'Signing Up.....' : t('signup') }
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register