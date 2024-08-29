"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        console.log(formData);
    }
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(0,0,0,0.15)]'>
        <div className='flex flex-col justify-center max-w-[500px] h-full mx-auto my-4 flex-auto'>
            <div className='flex flex-col justify-center items-center max-h-full w-full overflow-y-auto bg-white py-11 px-[34px] rounded-8'>
                <Image
                    src="/images/logos/logo.png"
                    alt=""
                    className="mx-auto mb-[30px]"
                    width={167}
                    height={52}
                />
                <h2 className="text-h2 text-heading text-center mb-2">Welcome Back</h2>
                <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]">Log In to your account</h4>
                <form action="" className="w-full" onSubmit={formSubmit}>
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
                        <span className="px-4 py-0 flex items-center">
                            <Image
                                src="/images/icons/email-icon.png"
                                alt=""
                                className=""
                                width={20}
                                height={16}
                            />
                        </span>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email Address" 
                            className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            onChange={handleInput}
                            value={formData.email}
                        />
                    </div>
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full">
                        <span className="px-4 py-0 flex items-center">
                            <Image
                                src="/images/icons/password.png"
                                alt=""
                                className=""
                                width={16}
                                height={22}
                            />
                        </span>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            onChange={handleInput}
                            value={formData.password}
                        />
                    </div>
                    <Link 
                    href="/recoverPassword"
                    className="block mt-3 text-primary leading-[17px] text-sm text-end"
                    >
                        Recover Password
                    </Link>
                    <h4 className="text-h4 font-normal text-center text-[#8B8D97] mb-[70px] mt-12">
                        <span>Don’t have an account? </span>
                        <Link 
                        href="/register"
                        className="text-primary pl-1"
                        >
                            Sign Up
                        </Link>
                    </h4>
                    <button href="submit" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4">Log In</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login