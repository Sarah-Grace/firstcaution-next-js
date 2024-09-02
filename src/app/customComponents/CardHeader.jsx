import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

function CardHeader( {textColor, link, title}) {
  return (
    <div className="flex items-center justify-between mb-6">
        <h2 className={`text-h2 ${textColor ==="white"? 'text-white' : "text-heading"} lgs:text-2xl lgs:leading-[29px] mid-xxl:text-2xl mid-xxl:leading-[29px]`} >{title}</h2>
        <Link href={link} className={`${textColor ==="white"? 'text-white' : "text-heading"} text-base font-semibold lgs:text-xl lgs:leading-6 mid-xxl:text-xl mid-xxl:leading-6`}>
            <span>View More</span>
            <span className='ml-1'>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </Link>
  </div>
  )
}

export default CardHeader