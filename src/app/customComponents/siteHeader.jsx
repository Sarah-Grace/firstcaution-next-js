"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HOME_HEADER, CONTRACT_HEADER, BILL_HEADER, DEPOSIT_HEADER } from '@/constants/webConstants'

function SiteHeader() {
    const pathname = usePathname()
    const [title, setTitle] = useState('');

    useEffect(() => {
        switch(pathname) {
            case '/home':
                setTitle(HOME_HEADER)
                break;
            case '/contracts':
            case '/contractDetail':
                setTitle(CONTRACT_HEADER)
                break;
            case '/bills':
            case '/billDetail':
                setTitle(BILL_HEADER)
                break;     
            case '/deposit':
                setTitle(DEPOSIT_HEADER)
                break; 
        }
    },[pathname])
  return (
    <div className="h-[102px] w-full bg-white border-b border-[#E6EFF5] flex items-center justify-between px-10">
        <Image
            src="/images/logos/logo.png"
            width={167}
            height={52}
            alt=""
            className="xl:block hidden"
        />
        <h1 className='text-h1'>{title}</h1>
        <div className='flex justify-center items-center gap-8'>
            <div className='w-50px h-50px rounded-full bg-[#F5F5F5] flex justify-center items-center lg:hidden'>
                <Image
                    src="/images/icons/settings-1.svg"
                    alt=""
                    width={25}
                    height={25}
                />
            </div>
            <div className='w-50px h-50px rounded-full bg-[#F5F5F5] flex justify-center items-center'>
                <Image
                    src="/images/icons/notifications.svg"
                    alt=""
                    width={25}
                    height={25}
                />
            </div>
            <div className='rounded-full border border-primary md:hidden'>
                <Image
                    src="/images/icons/user-profile.png"
                    alt=""
                    width={58}
                    height={58}
                />
            </div>
        </div>
   </div>
  )
}

export default SiteHeader