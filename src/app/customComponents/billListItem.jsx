import React from 'react'
import Image from 'next/image'

function BillListItem({icon, billType, billCount}) {
  return (
    <div className='flex items-center gap-[17px] bg-bgc-3 rounded-6 px-5 py-5 lgs:py-[13px] mid-xxl:py-[13px] xs:px-2'>
        <div className='flex-[0_0_30px] h-[30px] lgs:flex-[0_0_36px] lgs:h-[40px] mid-xxl:flex-[0_0_36px] mid-xxl:h-[40px] rounded-8 bg-[#EBF4FF] leading-[30px] flex justify-center items-center'>
            <Image
                src={icon}
                alt=""
                width={24}
                height={24}
            />
        </div>
        <div className='flex-auto'>
            <h4 className='text-h4 text-lg lgs:text-xl lgs:leading-6 mid-xxl:text-xl mid-xxl:leading-6 text-content xs:text-sm'>{billType}</h4>
        </div>
        <div className='flex-[0_0_60px]'>
            <p className='text-4xl leading-[30px] font-medium text-content lgs:text-[40px] lgs:leading-[48px] mid-xxl:text-[40px] mid-xxl:leading-[48px] xs:text-2xl'>{billCount}</p>
        </div>
    </div>
  )
}

export default BillListItem