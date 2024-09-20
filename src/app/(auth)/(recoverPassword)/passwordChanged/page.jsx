"use client"

import Image from "next/image";

function PasswordChanged() {

  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px]'>
      <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto my-4 flex-auto'>
          <div className='flex flex-col justify-center items-center max-h-full w-full overflow-y-auto bg-white py-11 px-[34px] rounded-8'>
            <Image
                src="/images/confirmation.png"
                alt=""
                className="mx-auto mb-[30px]"
                width={134}
                height={134}
            />
            <div className="max-w-[300px]">
              <h3 className="text-[18px] font-medium leading-[22px] text-heading mb-[14px] text-center">Password changed succesfully!</h3>
              <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]"> We will let you know if there are more problems with your account</h4>
              <a href="/login" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 w-full text-center">Go to Sign In</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PasswordChanged