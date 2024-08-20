import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

function CardHeader( {textColor, link, title}) {
  return (
    <div className="flex items-center justify-between mb-6">
        <h2 className={`text-h2 ${textColor ==="white"? 'text-white' : ""}`}>{title}</h2>
        <Link href={link} className={`${textColor ==="white"? 'text-white' : ""} text-base font-semibold`}>
            <span>View More</span>
            <span className='ml-1'>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </Link>
  </div>
  )
}

export default CardHeader