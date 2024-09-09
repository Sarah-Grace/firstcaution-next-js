"use client"

import { useState } from "react";
import Image from "next/image";

function NewPassword({ nextStep }) {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
  
        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue
        }));
    }
    const formSubmit = (e) => {
        e.preventDefault();
        nextStep();
        console.log(formData);
    }
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(0,0,0,0.15)]'>
      <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto my-4 flex-auto'>
          <div className='flex flex-col justify-center items-center max-h-full w-full overflow-y-auto bg-white py-11 px-[34px] rounded-8'>
            <h2 className="text-h2 text-heading text-center mb-10">New Password?</h2>
              <Image
                  src="/images/password.png"
                  alt=""
                  className="mx-auto mb-[30px]"
                  width={134}
                  height={134}
              />
              <div className="max-w-[300px]">
                
                <h3 className="text-[18px] font-medium leading-[22px] text-heading mb-[14px] text-center">Create New Password</h3>
              </div>
              <form action="" className="w-full" onSubmit={formSubmit}>
                  <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
                      <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none text-center"
                        onChange={handleInput}
                        value={formData.password}
                      />
                  </div>
                  <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
                      <input 
                        type="password" 
                        name="password"
                        placeholder="Confirm Password" 
                        className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none text-center"
                        onChange={handleInput}
                        value={formData.confirmPassword}
                      />
                  </div>
                  <button href="submit" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 w-full">Confirm</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default NewPassword