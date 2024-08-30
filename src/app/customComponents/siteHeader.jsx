import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function SiteHeader() {
    
  return (
    <div className="h-[102px] w-full bg-white border-b border-[#E6EFF5] flex items-center justify-between px-10 sticky top-0 z-10">
        <h1 className='text-h1'>Overview</h1>
        <div className='flex justify-center items-center gap-8'>
            <div className='w-50px h-50px rounded-full bg-[#F5F5F5] flex justify-center items-center'>
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
            <div className='rounded-full border border-primary'>
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