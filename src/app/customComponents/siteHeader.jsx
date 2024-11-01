"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue, 
  } from "@/components/ui/select"
import { useContext } from 'react';
import { LayoutContext } from '../layout';
import Cookies from 'js-cookie';
import { MainLayoutContext } from '@/app/(main)/layout'; // Ensure correct import path
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from "@/lib/axiosInstance";
import { useSelector, useDispatch } from 'react-redux';
import { resetLanguage } from '../slices/authSlice'

const langupdate = async (lang) => {
    const response = await axiosInstance.put('/api/update-language/', lang);
    // //console.log(response)
    return response.data;
  };
function SiteHeader() {
    const {locale,handleLocale} = useContext(LayoutContext);
    const dispatch = useDispatch();
    const langFormRedux = useSelector((state) => state.language)
    const [selectedValue, setSelectedValue] = useState(Cookies.get('language'));
    // const [lang, setLang] = useState();
    const { title, handleTitleChange} = useContext(MainLayoutContext);
    const langList = [
        { code: "fr", name: "(FR) French" },
        { code: "it", name: "(IT) Italian" },
        { code: "de", name: "(DE) German" },
        { code: "en", name: "(EN) English" }
    ]
    const setLanguage =  (value) => {
        handleLocale(value); // handling locale value using context hook
        handleTitleChange();
        setSelectedValue(value);
        langApiCall(value)
    }
    const langApiCall = (langCode) =>  {
        let lang = ""
        switch(langCode) {
            case "de":
                lang = "German"
                break;
            case "fr":
                lang ="French"
                break;
            case "en":
                lang = "English"
                break;
            case "it":
                lang ="Italian"
                break;
        }
        mutation.mutate({ language: lang});
    }

      // Mutation hook 
  const mutation = useMutation({
    mutationFn: langupdate,
    onSuccess: (response) => {
        console.log("success",response)
        handleTitleChange();
        setSelectedValue(langFormRedux);
        dispatch(resetLanguage())
    },
    onError: (error) => {
        
    },
  });
  useEffect(()=>{
    if(langFormRedux !== "" ){
        // setLanguage(langFormRedux)
        handleLocale(langFormRedux); // handling locale value using context hook
        // handleTitleChange();
        // setSelectedValue(langFormRedux);
        langApiCall(langFormRedux)
        
    }
    
  },[])
  return (
    <div className="h-[102px] w-full bg-white border-b border-[#E6EFF5] flex items-center justify-between px-10 tablet:px-[12px] tablet:h-[76px]">
        <Link href='/home' className='lg:block hidden '>
            <Image
                src="/images/logos/logo.png"
                width={167}
                height={52}
                alt=""
                className="h-[52px] w-[167px] tablet:w-[90px] tablet:h-[28px]"
            />
        </Link>
        <h1 className='text-h1 tablet:text-[18px] text-content md:hidden'>{title}</h1>
        <div className='flex justify-center items-center gap-8'>
            <div className='flex justify-center items-center w-[171px]'>
                <Select onValueChange= {(value)=> {setLanguage(value)}} value={selectedValue}>
                    <SelectTrigger className="border border-[#DFEAF2] rounded-8 text-[#909090] focus:shadow-none focus:ring-0">
                        { langList.filter(lang => lang.code === locale ).map((l)=>l.name)}
                    </SelectTrigger>
                    <SelectContent>
                        {langList.map((lang,index)=> {
                            return (
                                <SelectItem 
                                    key={index} 
                                    value={lang.code}
                                    className="text-heading text-left p-0 px-[27px] text-base leading-[50px] w-[200px] data-[state=checked]:bg-[#E8F1FF] data-[state=checked]:text-heading md:text-[12px]"
                                    >
                                    {lang.name}
                                </SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
            </div>
            <div className='w-50px h-50px tablet:w-10 tablet:h-10 rounded-full bg-[#F5F5F5] flex justify-center items-center lg:hidden'>
                <Image
                    src="/images/icons/notifications.svg"
                    alt=""
                    width={25}
                    height={25}
                    className='h-[25px] w-[25px]'
                />
            </div>
            <div className='rounded-full border border-primary md:hidden'>
                <Image
                    src="/images/icons/user-profile.png"
                    alt=""
                    width={58}
                    height={58}
                    className='h-[58px] w-[58px] tablet:h-[50px] tablet:w-[50px]'
                />
            </div>
        </div>
   </div>
  )
}

export default SiteHeader