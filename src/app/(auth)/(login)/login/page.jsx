"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMutation } from '@tanstack/react-query';
// import axiosInstance from '../../../../lib/axiosInstance';
import axiosInstance from "@/lib/axiosInstance";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import {addEmail, addTokens, resetAll} from '@/app/slices/authSlice';

// Function for login
const loginUser = async (User) => {
    const response = await axiosInstance.post('/api/login/', User);
    return response.data;
};
function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorEmail, setErrorEmail] =useState("");
    const [errorPassword, setErrorPassword] =useState("");
    const [errorUser, setErrorUser] =useState("");
    useEffect(() => {
        dispatch(resetAll());
    },[])
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue
        }));
    }
    // Mutation hook for login
    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (response) => {
            console.log(response.token)
            dispatch(addEmail(formData.email));
            // dispatch(addTokens({accessToken: response.access_token, refreshToken: response.refresh_token}))

            router.push('/loginVerification');
        },
        onError: (error) => {
            // This function runs if the mutation fails
            error.response.data.email !== undefined ? setErrorEmail(error.response.data.email) : setErrorEmail("");
            error.response.data.password !== undefined ? setErrorPassword(error.response.data.password): setErrorPassword("");
            error.response.data.user !== undefined ? setErrorUser(error.response.data.use): setErrorUser("");
            console.log( error.response.data.email);
            console.log( error.response.data.Password);
            console.log( error.response.data.user);
            console.log(errorPassword);
        },
    });
    const formSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ email: formData.email, password: formData.password});
    }
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px]'>
        <div className='flex flex-col justify-center max-w-[500px] h-full mx-auto py-4 flex-auto'>
            <div className='overflow-y-auto scroll-smooth bg-white py-11 px-[34px] rounded-8'>
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
                    <div className={`rounded-6 relative flex w-full mb-6 ${errorEmail !== "" ? "bg-[#FFF4F4] border border-[#F73737]" : "bg-[#f6f6f6]"}`}>
                        <span className="px-4 py-0 flex items-center">
                            <Image
                                src="/images/icons/email-icon.png"
                                alt=""
                                className="w-[20px] h-[16px]"
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
                    {errorEmail && <p className="mb-3 -mt-3 text-red-600 text-xs">{errorEmail}</p>}
                    <div className={`rounded-6 relative flex w-full ${errorPassword !== "" ? "bg-[#FFF4F4] border border-[#F73737]" : "bg-[#f6f6f6]" }`}>
                        <span className="px-4 py-0 flex items-center">
                            <Image
                                src="/images/icons/password.png"
                                alt=""
                                className="w-[16px] h-[22px]"
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
                    {errorPassword && <p className="mb-3 mt-2 text-red-600 text-xs">{errorPassword}</p>}
                    <Link 
                        href="/forgetPassword"
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