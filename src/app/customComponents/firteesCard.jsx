import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'


function FirteesCard({image, logo, badge, badgeColor, badgeIcon, title, discount, time, date, rating, ratingcount}) {
  return (
    <div>
        <div className="relative">
            <Image 
                src={image}
                alt=""
                className="rounded-t-1 w-full h-auto"
                width={290}
                height={138}
            />
            <div 
                className={`${badgeColor} rounded-sm rounded-bl-none absolute top-[18px] -left-[7px] h-[23px] leading-[23px] text-white text-h4 pl-[19px] pr-3 before:content-[''] ${badgeIcon} before:w-[7px] before:h-2 before:block before:absolute before:-bottom-2 before:left-0 bg-no-repeat`}
            >
                {badge}
            </div>
            <div>
                <Image 
                    src={logo}
                    alt=""
                    className="rounded-full absolute -bottom-[14px] left-5"
                    width={67}
                    height={67}
                />
            </div>
        </div>
        <div className="bg-white rounded-b-8 p-5">
            <div className="flex justify-between items-center">
                <h4 className="text-h4 font-medium text-content">{title}</h4>
                <div className="flex items-center">
                    <span className="text-[#F0C61A] pr-3">
                        <FontAwesomeIcon icon={faStar} />
                    </span> 
                    <h4 className="text-h4 font-medium text-content">
                        <span className="pr-1">
                            {rating}
                        </span>
                        <span className="text-[#B6B6B6]">
                            ({ratingcount})
                        </span>
                    </h4>
                </div>
            </div>
            <h3 className="text-[18px] leading-[22px] font-semibold text-content pb-3 pt-2">${discount}</h3>
            <div className="flex justify-between items-center">
                <p className="flex items-center gap-2 text-h5 font-normal text-content">
                    <span className="">
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span className="">{time}</span>
                </p>
                {
                    date &&
                    <div>
                        <p className="text-h5 text-content">
                            <span>Validity:</span>
                            <span className="text-grey-2">{date}</span>
                        </p>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default FirteesCard