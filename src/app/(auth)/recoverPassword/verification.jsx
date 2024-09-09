import React from 'react'
import Image from "next/image";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  

function Verification({ nextStep }) {
  const formSubmit = (e) => {
    e.preventDefault();
    nextStep();
    // console.log(formData);
}
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(0,0,0,0.15)]'>
    <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto my-4 flex-auto'>
        <div className='flex flex-col justify-center items-center max-h-full w-full overflow-y-auto bg-white py-11 px-[34px] rounded-8'>
          <h2 className="text-h2 text-heading text-center mb-10">Verification</h2>
            <Image
                src="/images/password.png"
                alt=""
                className="mx-auto mb-[30px]"
                width={134}
                height={134}
            />
            <div className="max-w-[300px]">
              
              <h3 className="text-[18px] font-medium leading-[22px] text-heading mb-[14px] text-center">Enter the verification code </h3>
              <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]">Verify your code we just send you to your email address</h4>
            </div>
            <form action="" className="w-full" onSubmit={formSubmit}>
                <div className="relative flex w-full mb-9 justify-center">
                <InputOTP maxLength={5}>
                <InputOTPGroup>
                    <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={0} />
                    <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={1} />
                    <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={2} />
                    <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={3} />
                    <InputOTPSlot className="border-0 rounded-8 bg-[#FFE9C3] leading-[56px] w-[42px] h-14 text-[32px] font-medium text-center text-heading mr-2 last:mr-0" index={4} />
                </InputOTPGroup>
                </InputOTP>
                </div>
                <button href="submit" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 w-full">Verify</button>
            </form>
        </div>
    </div>
  </div>
  )
}

export default Verification