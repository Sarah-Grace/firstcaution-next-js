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
import LangSwitch from "@/app/customComponents/langSwitch";
import { useTranslations } from 'next-intl';
import { useGlobalMethods } from '@/hooks/useGlobalMethods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

// Function for login
const loginUser = async (User) => {
    const response = await axiosInstance.post('/api/login/', User);
    return response.data;
};
function Login() {
    const [showPassword, setShowPassword] = useState(false); // to hold state of password show/hide feature
    // function to change password show / hide state 
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
    const [isOpen, setIsOpen] = useState(false); // to hold state for dialog box open and close 
    // function to open dialog box
    const openDialog = () => {
      setIsOpen(true);
    };
    // function to close dialog box
    const closeDialog = () => {
      setIsOpen(false);
    };
    // this function will called if user registered himself but did not verify otp
    const verifyUser = () => {
        dispatch(addEmail(formData.email));
        router.push('/registerVerification');
    }
    const { errorTranslate } = useGlobalMethods(); // calling custom hook for error messages translation 
    const t = useTranslations('auth'); 
    const dispatch = useDispatch();
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorEmail, setErrorEmail] =useState("");
    const [errorPassword, setErrorPassword] =useState("");
    const [errorUser, setErrorUser] =useState("");
    const [isProcessing, setIsProcessing] =useState(false);

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
            // console.log(response.token)
            dispatch(addEmail(formData.email));
            // dispatch(addTokens({accessToken: response.access_token, refreshToken: response.refresh_token}))
            router.push('/loginVerification');
        },
        onError: (error) => {
            // This function runs if the mutation fails

            if(error.response.data.user === "Email not verified") {  
               
                openDialog()
            }
            error.response.data.email !== undefined ? setErrorEmail(error.response.data.email) : setErrorEmail("");
            error.response.data.password !== undefined ? setErrorPassword(error.response.data.password): setErrorPassword("");
            error.response.data.user !== undefined ? setErrorUser(error.response.data.user): setErrorUser("");
            // console.log( error.response.data.email);
            // console.log( error.response.data.Password);
            // console.log( error.response.data.user);
            // console.log(errorPassword);
            setIsProcessing(false)
        },
    });
    const formSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true)
        mutation.mutate({ email: formData.email, password: formData.password});
    }
  return (
    <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px] sm:bg-white'>
        <div className='flex flex-col justify-center max-w-[500px] h-full mx-auto py-4 flex-auto sm:max-w-full sm:h-full sm:py-0'>
            <div className='overflow-y-auto overflow-x-hidden bg-white py-11 px-[34px] rounded-8 w-full xs:px-5'>
                
                <Image
                    src="/images/logos/logo.png"
                    alt=""
                    className="mx-auto mb-[30px]"
                    width={167}
                    height={52}
                />
                <h2 className="text-h2 text-heading text-center mb-2">{t('login_page.welcome_back')}</h2>
                <h4 className="text-h4 font-normal text-[#8B8D97] text-center mb-[70px]">{t('login_page.sub_title')}</h4>
                <div className="w-[170px] mx-auto -mt-[46px] mb-5">
                    <LangSwitch />
                </div>
                <form action="" className="w-full" onSubmit={formSubmit}>
                    <div className={`rounded-6 relative flex w-full mb-6 ${errorEmail !== "" ? "bg-[#FFF4F4] border border-[#F73737]" : "bg-[#f6f6f6]"}`}>
                        <span className="px-4 py-0 flex items-center flex-[0_0_auto]">
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
                            placeholder={t('email')}
                            className="leading-[50px] py-0 px-5 text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            onChange={handleInput}
                            value={formData.email}
                            required
                        />
                    </div>
                    {errorEmail && <p className="mb-3 -mt-3 text-red-600 text-xs">{errorTranslate(errorEmail)}</p>}
                    <div className={`rounded-6 relative flex w-full ${errorPassword !== "" ? "bg-[#FFF4F4] border border-[#F73737]" : "bg-[#f6f6f6]" }`}>
                        <span className="px-4 py-0 flex items-center flex-[0_0_auto]">
                            <Image
                                src="/images/icons/password.png"
                                alt=""
                                className="w-[16px] h-[22px]"
                                width={16}
                                height={22}
                            />
                        </span>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            name="password"
                            placeholder={t('password')} 
                            className="leading-[50px] py-0 px-5 pr-[30px] xs:pr-[5px] text-[15px] text-[#909090] bg-transparent flex-auto focus-visible:outline-none"
                            onChange={handleInput}
                            value={formData.password}
                            required
                        />
                        <button type="button" onClick={togglePassword} className="absolute right-[10px] bg-none border-0 cursor-pointer top-1/2 -translate-y-1/2 text-sm text-[#909090]">
                          {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </button>
                    </div>
                    {errorPassword && <p className="mb-3 mt-2 text-red-600 text-xs">{errorTranslate(errorPassword)}</p>}
                    <div className="text-end ">
                        <Link 
                            href="/forgetPassword"
                            className="inline-block mt-3 text-primary leading-[17px] text-sm"
                        >
                            {t('login_page.recover_password')}
                        </Link>
                    </div>
                    <h4 className="text-h4 font-normal text-center text-[#8B8D97] mb-[70px] mt-12">
                        <span>{t('login_page.dont_have')} </span>
                        <Link 
                        href="/register"
                        className="text-primary pl-1"
                        >
                            {t('signup')}
                        </Link>
                    </h4>
                    <button href="submit" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4">
                    {
                        isProcessing 
                        ?  
                            <div className="flex justify-center items-center">  
                                <svg width="16" height="16" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                                {t('loading')}
                            </div>
                        :
                            t('login') 
                     }    
                    </button>
                    
                </form>
            </div>
        </div>
        <div className="w-2/3 pl-3">
                <div className="flex flex-col justify-end h-full">
                    <div>
                        <Dialog className="rounded-6" open={isOpen} onClose={closeDialog}>
                            
                            <DialogContent>
                                <div className="text-center pt-[50px]">
                                <button 
                                    onClick={ closeDialog }
                                    className="absolute w-10 right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none p-2 bg-[#F1F3F9] text-content">
                                X
                                </button>
                                    <h3 className="text-h3 font-medium text-[#8B8D97]">{t('login_page.user_not_verified')}</h3>
                                    
                                    <button 
                                        onClick={ verifyUser }
                                        className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 mb-4 mt-12"
                                    >
                                        {t('login_page.verify_now')}
                                    </button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login