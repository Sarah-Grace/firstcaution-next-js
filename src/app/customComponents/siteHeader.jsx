"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HOME_HEADER, CONTRACT_HEADER, BILL_HEADER, DEPOSIT_HEADER, FIRSTMOOVE_HEADER } from '@/constants/webConstants'

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
            case '/payBill':
            case '/paymentPlan':
            case '/paymentTerm':
            case '/monthlyPayment':
                setTitle(BILL_HEADER)
                break;     
            case '/deposit':
            case '/adjustDeposit':
                setTitle(DEPOSIT_HEADER)
                break; 
            case '/firstmoove':
                setTitle(FIRSTMOOVE_HEADER)
                break;
            case '/firstees':
                setTitle("Firstees")
                break;
            case '/settings':
                setTitle("Settings")
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
            <div className='w-50px h-50px rounded-full bg-[#F5F5F5] flex justify-center items-center lg:hidden'>
            <Image
                    src="/images/icons/settings-1.svg"
                    alt=""
                    width={25}
                    height={25}
                    className='h-[25px] w-[25px]'
                />
            </div>
            <div className='w-50px h-50px tablet:w-10 tablet:h-10 rounded-full bg-[#F5F5F5] flex justify-center items-center'>
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