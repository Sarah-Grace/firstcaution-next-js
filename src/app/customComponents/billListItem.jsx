import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

function BillListItem({icon, billType, link}) {
  return (
    <div className='px-5 py-3 mt-[6px] lgs:py-[13px] mid-xxl:py-[13px] xs:px-2'>
        <Link href={link} className='flex items-center gap-[17px] '>
            <div className='flex-[0_0_30px] h-[30px] lgs:flex-[0_0_36px] lgs:h-[40px] mid-xxl:flex-[0_0_36px] mid-xxl:h-[40px] rounded-8 bg-[#EBF4FF] leading-[30px] flex justify-center items-center'>
                <Image
                    src={icon}
                    alt=""
                    width={24}
                    height={24}
                />
            </div>
            <div className='flex-auto'>
                <h4 className='text-h4 text-base lgs:text-xl lgs:leading-6 mid-xxl:text-xl mid-xxl:leading-6 text-content xs:text-sm'>{billType}</h4>
            </div>
            <div className='text-grey-2'>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </Link>
    </div>
  )
}

export default BillListItem