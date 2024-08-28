'use client'
import React from 'react'
import SidebarList from './sidebarList'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function Sidebar() {
    const pathname = usePathname();
    const menuListData = [
        {
            menuIcon:"/images/icons/home.svg", 
            menuTitle:"Home",
            path: "/home"
        },
        {
            menuIcon:"/images/icons/my-contracts.svg", 
            menuTitle:"My Contracts",
            path: "/contracts"
        },
        {
            menuIcon:"/images/icons/my-bills.svg", 
            menuTitle:"My Bills",
            path: "/bills"
        },
        {
            menuIcon:"/images/icons/my-deposit.svg", 
            menuTitle:"My Deposit",
            path: "/deposit"
        },
        {
            menuIcon:"/images/icons/firstees.svg", 
            menuTitle:"Firstees",
            path: "/firstees"
        },
        {
            menuIcon:"/images/icons/firstmoove.svg", 
            menuTitle:"Firstmoove",
            path: "/firstmoove"
        },
        {
            menuIcon:"/images/icons/coin.svg", 
            menuTitle:"Firstcoin",
            path: "/firstcoin"
        },
        {
            menuIcon:"/images/icons/chatbot.svg", 
            menuTitle:"Chatbot",
            path: "/chatbot"
        }
    ]

  return (
    <aside className="w-[250px] h-screen border-r border-[#E6EFF5] fixed z-[1] bg-white pt-24px pr-37px pb-133px pl-37px">
        <div className="">
            <Link href='/home'>
                <Image
                    src="/images/logos/logo.png"
                    width={167}
                    height={52}
                    alt=""
                    className="mb-9"
                />
            </Link>
            <ul >
                {
                    menuListData.map((listItem, index) => <SidebarList key={index} menuIcon={listItem.menuIcon} menuTitle={listItem.menuTitle} path={listItem.path} /> )
                }
                
            </ul>
        </div>
  </aside>
  )
}

export default Sidebar