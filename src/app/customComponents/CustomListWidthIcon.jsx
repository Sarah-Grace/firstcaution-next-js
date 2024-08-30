import Image from 'next/image'

function CustomListWidthIcon( {icon, title, amount}) {
  return (
    <div className='flex items-center gap-[17px] px-[18px] py-[13px] mb-2 rounded-8 bg-bgc-3'>
        <div className='flex-[0_0_24px] '>
            <Image
                src={icon}
                alt=""
                width={24}
                height={24}
            />
        </div>
        <div className='flex-auto'>
            <h4 className='text-[15px] font-normal leading-5 text-grey-2'>{title}</h4>
        </div>
        <div>
            <h4 className='text-base font-medium leading-5 text-content'>{amount}</h4>
        </div>
    </div>
  )
}

export default CustomListWidthIcon