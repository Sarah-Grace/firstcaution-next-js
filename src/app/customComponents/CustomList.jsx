import { cn } from "@/lib/utils"

function CustomList({title, info, className}) {
  return (
    <div className={cn('flex justify-between border border-[#E6EFF5] bg-bgc-3 px-[26px] sm:px-3 py-4 rounded-8 mb-[10px]', className)}>
        <h3 className='text-h3 font-normal text-grey-2'>{title}:</h3>
        <h3 className='text-h3 font-medium'>{info}</h3>
    </div>
  )
}

export default CustomList