import React from 'react'
import Image from 'next/image'

function BillListItem({icon, billType, billTypeDescription, billCount}) {
  return (
    <div className='flex items-center gap-[17px] bg-bgc-3 rounded-6 px-5 py-6'>
        <div className='flex-[0_0_30px] h-[30px] rounded-8 bg-[#EBF4FF] leading-[30px] flex justify-center items-center'>
            <Image
                src={icon}
                alt=""
                width={24}
                height={24}
            />
        </div>
        <div className='flex-auto'>
            <h4 className='text-h4'>{billType}</h4>
            <p className='text-p text-grey-2'>{billTypeDescription}</p>
        </div>
        <div className='flex-[0_0_60px]'>
            <p className='text-4xl leading-[30px] font-medium'>{billCount}</p>
        </div>
    </div>
  )
}

export default BillListItem