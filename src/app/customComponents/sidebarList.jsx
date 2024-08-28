'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function SidebarList({ menuIcon , menuTitle, path }) {
    const pathname = usePathname()
  return (
    <li>
        <Link href={path} className= {`flex leading-[60px] p-0 pl-2 active:text-[#3876DA] link ${pathname === '/' ? 'active' : ''}`}>
            <Image
                src={menuIcon}
                width={24}
                height={24}
                alt=""
            />
            <span className="ml-[27px] text-[#b1b1b1]">{menuTitle}</span>
        </Link>
    </li>
  )
}

export default SidebarList