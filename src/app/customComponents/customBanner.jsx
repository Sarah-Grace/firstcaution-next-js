import React from 'react'
import Link from "next/link";
import Image from "next/image"

function CustomBanner({heading, text, link, image, bg}) {
  return (
    <div className={`flex justify-between pt-[25px] px-5 pb-8 mt-5 border border-[#E6EFF5] rounded-10 ${bg}`}>
      <div className="max-w-[316px] lgs:max-w-[493px]">
      <h2 className="text-h2 leading-6 mb-4 text-heading lgs:text-2xl lgs:leading-[29px]">
      {heading}
      </h2>
      <h3 className="text-sm font-normal leading-[17px] mb-10 lgs:text-[18px] lgs:leading-[22px] ">
          {text}
      </h3>
      <Link href={link} className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 lgs:text-[18px]">
          View
      </Link>
      </div>
      <Image 
          width={256}
          height={163}
          src={image}
          alt=""
      />
    </div>
  )
}

export default CustomBanner