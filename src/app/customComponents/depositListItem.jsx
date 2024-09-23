import Image from 'next/image'

function DepositListItem({icon, title, amount}) {
  return (
    <div className='flex items-center gap-[17px] px-2 py-[11px] border-b last:border-0 border-[#EAEAEA] xs:px-0'>
        <div className='flex-[0_0_24px] '>
            <Image
                src={icon}
                alt=""
                width={20}
                height={20}
            />
        </div>
        <div className='flex-auto'>
            <h4 className='text-sm font-medium leading-[23px] text-grey-2 lgs:text-[18px] lgs:leading-[31px] mid-xxl:text-[18px] mid-xxl:leading-[31px]'>{title}</h4>
        </div>
        <div>
            <h4 className='text-sm font-medium leading-[23px] text-content lgs:text-[18px] lgs:leading-[31px] mid-xxl:text-[18px] mid-xxl:leading-[31px] xs:text-center'>{amount}</h4>
        </div>
    </div>
  )
}

export default DepositListItem