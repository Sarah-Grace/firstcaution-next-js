'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function SidebarList({ menuIcon , menuTitle, path }) {
    const pathname = usePathname()

  return (
    <li active={pathname === path ? "true" : "false"} className=''>
        <Link href={path} className= {`${pathname === path && "active"} nav-style flex leading-[60px] p-0 pl-2 text-[#b1b1b1] active:text-[#3876DA] active:before:content-[""] lg:h-[60px]`}>
            <Image
                src={menuIcon}
                width={24}
                height={24}
                alt=""
            />
            <span className="ml-[27px] lg:line-clamp-1 lg:hidden">{menuTitle}</span>
        </Link>
    </li>
  )
}

export default SidebarList