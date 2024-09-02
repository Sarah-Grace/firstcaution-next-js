import React from 'react'
import Image from 'next/image'

function MessageListItem({avatar, name, chat, time}) {
  return (
    <div className='flex items-center gap-[17px] px-0 py-3 border-b last:border-0 border-[#EAEAEA] mb-2 xs:gap-[5px]'>
        <div className='flex-[0_0_46px] '>
            <Image
                src={avatar}
                alt=""
                width={46}
                height={46}
                className='xs:w-8 xs:h-8'
            />
        </div>
        <div className='flex-auto'>
            <h4 className='text-h4 lgs:text-[18px] lgs:leading-[22px] mid-xxl:text-[18px] mid-xxl:leading-[22px] mb-1'>{name}</h4>
            <p className='text-p text-grey-2 lgs:text-[14px] lgs:leading-[17px] mid-xxl:text-[14px] mid-xxl:leading-[17px]'>{chat}</p>
        </div>
        <div>
            <p className='text-xs font-medium leading-[13px] text-end lgs:text-[14px] lgs:leading-[17px] mid-xxl:text-[14px] mid-xxl:leading-[17px]'>{time}</p>
        </div>
    </div>
  )
}

export default MessageListItem