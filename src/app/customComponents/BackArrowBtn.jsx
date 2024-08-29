import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function BackArrowBtn({link, title}) {
  return (
    <div className="flex gap-[21px] items-center">
        <Link 
            href={link}
            className="text-heading"
        >
            <span>
                <FontAwesomeIcon icon={faArrowLeft} />
            </span>
        </Link>
       <h2 className="text-h2 text-heading mb-0">{title}</h2>
    </div>
  )
}

export default BackArrowBtn