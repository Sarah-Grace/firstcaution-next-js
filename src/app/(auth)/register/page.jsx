'use client';

import Image from "next/image";
import Link from "next/link";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../lib/axiosInstance'
import { useState } from 'react';
import RegisterVerification from "./registerVerification";

// Function to create a new user
const createUser = async (newUser) => {
    const response = await axiosInstance.post('/api/register/', newUser);
    console.log(response)
    return response.json;
  };

function Register() {
    const queryClient = useQueryClient();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Mutation hook for creating a user
    const mutation = useMutation({
      mutationFn: createUser,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['users'] });
        <RegisterVerification />
      },
      onError: (error) => {
        // This function runs if the mutation fails
        console.log('Error creating post:', error.response.data.msg[0]);
      },
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      mutation.mutate({ email, username, password, "platform": "internal_user"});
    };
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
            <h2 className="text-h2 text-heading text-center mb-2">Get Started with MyFirst</h2>
            <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]">Create your free account</h4>
            <form action="" className="w-full" onSubmit={handleSubmit}>
                <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
                    <span className="px-4 py-0 flex items-center">
                        <Image
                            src="/images/icons/user-icon.png"
                            alt=""
                            className=""
                            width={20}
                            height={16}
                        />
                    </span>
                    <input 
                        type="text" 
                        placeholder="Your Full Name" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                    />
                </div>
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
                        placeholder="Email Address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
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
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                    />
                </div>
                <h4 className="text-h4 font-normal text-center text-[#8B8D97] mb-[70px] mt-12">
                    <span>Already have an account? 
                    </span>
                    <Link 
                    href="/login"
                    className="text-primary pl-1"
                    >
                        Login
                    </Link>
                </h4>
                <button  disabled={mutation.isLoading} className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4">
                 {mutation.isLoading ? 'Signing Up.....' : 'Sign Up'}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Register