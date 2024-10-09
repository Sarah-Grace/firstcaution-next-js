"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {userLanguage} from "@/app/(main)/utils/language";
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';

function SiteHeader() {
    const t = useTranslations('main.sidebar_and_header');
    const pathname = usePathname()
    const [title, setTitle] = useState('');
    const langList = [
        { code: "fr", name: "(FR) French" },
        { code: "it", name: "(IT) Italian" },
        { code: "ge", name: "(GE) German" },
        { code: "en", name: "(EN) English" }
    ]
    const [cookieValue, setCookieValue] = useState(langList.filter(lang => lang.code === (Cookies.get('language') || 'fr')).map((l)=>l.name));
    

    const setLanguage=  (value) => {
        setCookieValue(langList.filter(lang => lang.code === value ).map((l)=>l.name));
        userLanguage(value);
        // Simulate a short delay for better UX before reloading the page
        window.location.reload();
            // Simulate a short delay for better UX before reloading the page
        setTimeout(() => {
            // Reload the page to apply changes
            window.location.reload();
        }, 1000);
    }
    useEffect(() => {
        switch(pathname) {
            case '/home':
                setTitle(t('overview'))
                break;
            case '/contracts':
            case '/contractDetail':
                setTitle(t('my_contracts'))
                break;
            case '/bills':
            case '/billDetail':
            case '/payBill':
            case '/paymentPlan':
            case '/paymentTerm':
            case '/monthlyPayment':
                setTitle(t('my_bills'))
                break;     
            case '/deposit':
            case '/adjustDeposit':
                setTitle(t('my_deposit'))
                break; 
            case '/firstmoove':
                setTitle(FIRSTMOOVE_HEADER)
                break;
            case '/firstees':
                setTitle(t('Firstmoove'))
                break;
            case '/settings':
                setTitle(t('settings'))
                break;
        }
    },[pathname])
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
        <h1 className='text-h1 tablet:text-[18px] text-content'>{title}</h1>
        <div className='flex justify-center items-center gap-8'>
            <div className='bg-[#F5F5F5] flex justify-center items-center w-[171px]'>
                <Select onValueChange= {(value)=> {setLanguage(value)}}>
                    <SelectTrigger className="border border-[#DFEAF2] rounded-8 text-[#909090]">
                        {cookieValue}
                    </SelectTrigger>
                    <SelectContent>
                        {langList.map((lang,index)=> {
                            return (
                                <SelectItem 
                                    key={index} 
                                    value={lang.code}
                                    className="text-heading text-left p-0 px-[27px] text-base leading-[50px] w-[200px] checked:text-red-700"
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