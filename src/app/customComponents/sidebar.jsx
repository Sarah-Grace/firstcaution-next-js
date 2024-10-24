'use client'
import React from 'react'
import SidebarList from './sidebarList'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

function Sidebar( {logout}) {
    const t = useTranslations('main.sidebar_and_header');
    const pathname = usePathname();
    const menuListData = [
        {
            menuIcon:"/images/icons/home.svg", 
            menuTitle:t('home_title'),
            path: "/home"
        },
        {
            menuIcon:"/images/icons/my-contracts.svg", 
            menuTitle:t('my_contracts'),
            path: "/contracts"
        },
        {
            menuIcon:"/images/icons/my-bills.svg", 
            menuTitle:t('my_bills'),
            path: "/bills"
        }
    ]
    // const menuListData = [
    //     {
    //         menuIcon:"/images/icons/home.svg", 
    //         menuTitle:"Home",
    //         path: "/home"
    //     },
    //     {
    //         menuIcon:"/images/icons/my-contracts.svg", 
    //         menuTitle:"My Contracts",
    //         path: "/contracts"
    //     },
    //     {
    //         menuIcon:"/images/icons/my-bills.svg", 
    //         menuTitle:"My Bills",
    //         path: "/bills"
    //     },
    //     {
    //         menuIcon:"/images/icons/my-deposit.svg", 
    //         menuTitle:"My Deposit",
    //         path: "/deposit"
    //     },
    //     {
    //         menuIcon:"/images/icons/firstees.svg", 
    //         menuTitle:"Firstees",
    //         path: "/firstees"
    //     },
    //     {
    //         menuIcon:"/images/icons/firstmoove.svg", 
    //         menuTitle:"Firstmoove",
    //         path: "/firstmoove"
    //     },
    //     {
    //         menuIcon:"/images/icons/coin.svg", 
    //         menuTitle:"Firstcoin",
    //         path: "#"
    //     },
    //     {
    //         menuIcon:"/images/icons/chatbot.svg", 
    //         menuTitle:"Chatbot",
    //         path: "#"
    //     }
    // ]
    const menuListData2 = [
        {
            menuIcon:"/images/icons/settings.svg", 
            menuTitle:t('settings'),
            path: "/settings"
        }
    ]

  return (
    <aside className="w-[250px] h-screen overflow-auto border-r border-[#E6EFF5] fixed z-[1] bg-white pt-24px pr-37px pb-133px pl-37px lg:w-10 lg:overflow-hidden lg:p-0 sidebar-height lg:top-[92px] tablet:top-[76px] lg:border-r-0">
        <div className="h-full lg:overflow-x-auto">
            <Link href='/home'>
                <Image
                    src="/images/logos/logo.png"
                    width={167}
                    height={52}
                    alt=""
                    className="lg:hidden mb-[38px]"
                />
            </Link>

            <div className='flex flex-col justify-between h-full'>
                <ul>
                    {
                        menuListData.map((listItem, index) => <SidebarList key={index} menuIcon={listItem.menuIcon} menuTitle={listItem.menuTitle} path={listItem.path} /> )
                    } 
                </ul>
                <ul>
                    {
                        menuListData2.map((listItem, index) => <SidebarList key={index} menuIcon={listItem.menuIcon} menuTitle={listItem.menuTitle} path={listItem.path} /> )
                    }
                    <li className='' onClick={logout}>
                        <div>
                            <Link  href="" className= {`nav-style flex leading-[60px] p-0 pl-2 text-[#b1b1b1] active:text-[#3876DA] active:before:content-[""]`}>
                                <Image
                                    src="/images/icons/logout.svg"
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                                <span className="ml-[15px] text-[14px] lg:line-clamp-1">{t('logout')}</span>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  </aside>
  )
}

export default Sidebar