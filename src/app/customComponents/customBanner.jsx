import React from 'react'
import Link from "next/link";
import Image from "next/image"

function CustomBanner({heading, text, link, image, bg}) {
  return (
    <div className={`flex justify-between pt-[22px] px-5 pb-[28px] mt-5 border border-[#E6EFF5] rounded-10 ${bg}`}>
      <div className="max-w-[316px] lgs:max-w-[493px] mid-xxl:max-w-[493px] xxl:pr-5 xxl:max-w-full">
        <h2 className="text-h2 leading-6 mb-4 text-heading lgs:text-2xl lgs:leading-[29px] mid-xxl:text-2xl mid-xxl:leading-[29px]">
        {heading}
        </h2>
        <h3 className="text-sm font-normal leading-[17px] mb-10 lgs:text-[18px] lgs:leading-[22px] mid-xxl:text-[18px] mid-xxl:leading-[22px] xxl:text-base">
            {text}
        </h3>
        <Link href={link} className="inline-block rounded-8 bg-secondary text-white py-4 px-[60px] border-0 lgs:text-[18px] lgs:leading-[21px] mid-xxl:font-medium mid-xxl:text-[18px] mid-xxl:leading-[21px] mid-xxl:font-medium">
            View
        </Link>
      </div>
      <div className='flex-[0_0_auto] w-[256px] md1:hidden'>
        <Image 
          width={256}
          height={163}
          src={image}
          alt=""
          className='md:w-full h-auto'
        />
      </div>
    </div>
  )
}

export default CustomBanner