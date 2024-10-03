'use client';

import Image from "next/image";
import Link from "next/link";
import { useMutation} from '@tanstack/react-query';
import axiosInstance from '../../../../lib/axiosInstance';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import {addUserInfo } from '../../../slices/authSlice';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import * as React from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import DatePicker from "react-multi-date-picker"
// Define Zod schema for form validation
const formSchema = z.object({
    fname: z.string().min(1, 'Name is required'), // Name is required and cannot be empty
    lname: z.string().min(1, 'Name is required'), // Name is required and cannot be empty
    email: z.string().email('Invalid email address'), // Email must be valid
    password: z.string().min(8, 'Password must be at least 8 characters') // Password must be at least 6 chars
});


// Function to create a new user
const createUser = async (newUser) => {
    const response = await axiosInstance.post('/api/register/', newUser);
    console.log(response)
    return response.data;
  };

function Register() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [emailError, setEmailError] = useState("");
    // State for form inputs
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const [date, setDate] = useState("");
  

  // State for validation errors
  const [errors, setErrors] = useState({});
  const [dateError, setDateError] = useState("")

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data using Zod schema
    const result = formSchema.safeParse(formData);
    console.log(date.format("YYYY-MM-DD"))
    mutation.mutate({ email: formData.email, password: formData.password, first_name: formData.fname, last_name: formData.lname, date_of_birth: date.format("YYYY-MM-DD"), "platform": "internal_user"})
    // mutation.mutate({ email: formData.email, password: formData.password, first_name: formData.fname, last_name: formData.lname, date_of_birth: "1995-03-05", "platform": "internal_user"});

    
    // // Validate form data using Zod schema
    // const result = formSchema.safeParse(formData);

    // // // const dob = format(date, 'yyyy-MM-dd');
    // if (!result.success) {
    //   // Map Zod errors to state for display
    //   const newErrors = result.error.errors.reduce((acc, curr) => {
    //     acc[curr.path[0]] = curr.message;
    //     return acc;
    //   }, {});
    //   console.log(newErrors)
    //   setErrors();
    //   console.log(errors)
    // } else {
    //   // If validation passes, proceed with form submission logic
    //   // mutation.mutate({ email: formData.email, password: formData.password,  "platform": "internal_user"});
    //   mutation.mutate({ email: formData.email, password: formData.password, first_name: formData.fname, last_name: formData.lname, date_of_birth: "1995-03-05", "platform": "internal_user"});
    // }
  };

    // Mutation hook for creating a user
    const mutation = useMutation({
      mutationFn: createUser,
      onSuccess: (response) => {
        dispatch(addUserInfo( { userEmail: response.email, userName: response.username} ));
        console.log("Response",response);
        router.push('/registerVerification');
      },
      onError: (error) => {
        // This function runs if the mutation fails
        setEmailError(error.response.data.email[0]);
      },
    });
  
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
                            name="fname"
                            placeholder="Your First Name" 
                            value={formData.fname}
                            onChange={handleChange}
                            className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            required
                        />
                    </div>
                    {/* {errors.fname && <p className="mb-3 -mt-3 text-red-600 text-xs">{errors.fname}</p>} */}
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
                            name="lname"
                            placeholder="Your Last Name" 
                            value={formData.lname}
                            onChange={handleChange}
                            className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            required
                        />
                    </div>
                    {/* {errors.lname && <p className="mb-3 -mt-3 text-red-600 text-xs">{errors.lname}</p>} */}
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
                            value={formData.email}
                            onChange={handleChange}
                            className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            required
                       />
                    </div>
                    {emailError  && <p className="mb-3 -mt-3 text-red-600 text-xs">{emailError}</p>}
                    {/* <div>
                        {errors.email && <p className="mb-3 -mt-3 text-red-600 text-xs">{errors.email}</p>}
                    </div> */}
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full mb-6">
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
                            placeholder="Create Strong Password" 
                            value={formData.password}
                            onChange={handleChange}
                            className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            required
                        />
                    </div>
                    <div className="bg-[#f6f6f6] rounded-6 relative flex w-full">
                      <span className="px-4 py-0 flex items-center">
                          <Image
                              src="/images/icons/calendar-icon.png"
                              alt=""
                              className=""
                              width={16}
                              height={22}
                          />
                      </span>
                      {/* <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[280px] justify-start text-left font-normal bg-transparent border-0 text-[#909090]",
                            )}
                          >
                            {date ? format(date, "yyyy-MM-dd") : <span>Add Date of Birth</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover> */}
                        <DatePicker
                          value={date}
                          onChange={setDate}
                          placeholder="Add Date of Birth"
                        >
                        </DatePicker>

                    </div>
                    {dateError && <p className="my-3 text-red-600 text-xs">{dateError}</p>}
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