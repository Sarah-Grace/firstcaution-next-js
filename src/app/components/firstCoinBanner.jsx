import React from 'react'
import Image from 'next/image'

function FirstCoinBanner() {
  return (
    <div className="flex justify-between items-end px-0 py-8 mt-5 rounded-[5px] h-[200px] bg-primary">
        <div className="flex justify-between flex-col h-full p-0 pl-[37px] max-w-[340px]">
            <h3 className='text-xl font-semibold leading-6 text-white'>My Firstcoins</h3>
            <h2 className='text-4xl font-semibold leading-[44px] text-white'>CHF 150.00</h2>
            <div className="flex items-center gap-[10px]">
                <div className="w-[30px] h-[30px] bg-[rgba(255,255,255,0.3)] flex justify-center items-center rounded-6">
                    <Image 
                        width={18}
                        height={18}
                        src="/images/icons/leaf-rounded.png"
                        alt=""
                        className=''
                    />
                </div>
                <p className='text-sm leading-[17px] text-white font-normal'>Saved on next Invoice: -CHF 1</p>
            </div>
        </div>
        <div className="banner-image firstcoin-home-banner">
            <Image 
                width={165}
                height={151}
                src="/images/hand-with-money.png"
                alt=""
            />
        </div>
  </div>
  )
}

export default FirstCoinBanner