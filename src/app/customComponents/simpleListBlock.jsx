import Image from "next/image";

function SimpleListBlock({list,icon, title}) {
  return (
    <div className="border border-[#EEEEEE] bg-[#F0F4FF] py-[14px] px-5 rounded-8 mt-7">
        <div className="flex items-center gap-[10px]">
            <Image
                src={icon}
                height={22}
                width={22}
                alt=""
            />
            <p className="text-base font-medium text-content">{title}:</p>
        </div>
        <div className="mt-[33px]">
            {
                list.map((lst, index) => {
                    return (
                        <div key={index} className="flex justify-between items-center text-[15px] font-normal text-grey-2 leading-[18px] mb-[10px]">
                            <div>{lst.title}</div>
                            <div className="bg-[url(/images/icons/dotted-line.png)] h-[1px] flex-auto my-0 mx-[10px]"></div>
                            <div className="text-content font-medium">{lst.info}</div>
                        </div>
                    )
                } )
            }
        </div>
    </div>
  )
}

export default SimpleListBlock