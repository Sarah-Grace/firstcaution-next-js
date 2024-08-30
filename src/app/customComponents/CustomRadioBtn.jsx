import Image from "next/image"

function CustomRadioBtn({icon, title, name, id}) {
  return (
    <div className="flex justify-between border border-[#E6EFF5] bg-bgc-3 py-5 px-[26px] rounded-6 mb-[10px] leading-[54px] items-center">
        <label className="text-base font-normal text-heading flex-auto flex items-center gap-4" for={id}>
            <Image
                src={icon}
                height={24}
                width={24}
                alt=""
            />
            <span>{title}</span>
        </label>
        <input 
            className="relative border-0 bg-bgc-3 rounded-full bg-[length:23px_23px] block h-[23px] w-[23px] before:content[''] before:w-[20.8px] before:h-[20.8px] before:block before:border before:border-primary before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-2/4 before:-translate-y-2/4" 
            type="radio" 
            name={name} 
            id={id} 
        />
    </div>
  )
}

export default CustomRadioBtn