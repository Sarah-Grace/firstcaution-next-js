import React from 'react'
import Image from 'next/image'

function MessageListItem({avatar, name, chat, time}) {
  return (
    <div className='flex items-center gap-[17px] px-0 py-3 border-b last:border-0 border-[#EAEAEA] mb-2'>
    <div className='flex-[0_0_46px] '>
        <Image
            src={avatar}
            alt=""
            width={46}
            height={46}
        />
    </div>
    <div className='flex-auto'>
        <h4 className='text-h4'>{name}</h4>
        <p className='text-p text-grey-2'>{chat}</p>
    </div>
    <div>
        <p className='text-xs font-medium leading-[13px] text-end'>{time}</p>
    </div>
</div>
  )
}

export default MessageListItem