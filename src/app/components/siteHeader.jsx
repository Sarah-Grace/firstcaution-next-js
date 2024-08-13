import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SiteHeader() {
    
  return (
    <div className="h-24 w-full border-b border-[#E6EFF5] flex items-center px-7">
        <h1 className='text-h1'>Overview</h1>
        <div>
            <form action="">
                <div>
                    <span>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    <FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />
                    </span>
                    <input type="search" placeholder='Search for something '/>
                </div>
            </form>

        </div>
   </div>
  )
}

export default SiteHeader