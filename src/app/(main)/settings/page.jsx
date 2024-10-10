"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/lib/axiosInstance';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslations } from 'next-intl'; 
import { toast } from "sonner";

const profiledata = async (otp) => {
    const response = await axiosInstance.get('/api/profile/', otp);
    // console.log(response);
    return response.data;
};
const profiledataupdate = async (otp) => {
    const response = await axiosInstance.put('/api/profile/', otp);
    // console.log(response);
    return response.data;
};
const passwordupdate = async (otp) => {
    const response = await axiosInstance.post('/api/change/password/', otp);
    // console.log(response);
    return response.data;
};

function Settings() {
  const t = useTranslations('main.settings_page');
  const tabNames = ["Edit Profile", "Security"];
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: ""
  });
  const [date, setDate] = useState("");
  const [formDataSecurity, setFormDataSecurity] = useState({
    password: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [ isDiffPassword , setIsSamePassword ] = useState(false);
  const [apiError, setApiError] = useState("")
  const [errorOldPassword, setErrorOldPassword ] = useState("");
  const [errorNewPassword, setErrorNewPassword ] = useState("");
  useEffect(()=> {
    mutation.mutate({});
  },[])
  // Mutation hook 
  const mutation = useMutation({
    mutationFn: profiledata,
    onSuccess: (response) => {
        console.log(response.first_name);
        setFormData((prev) => ({
            ...prev,
            fname: response.first_name,
            lname: response.last_name,
            email: response.email
        }));
        setDate(response.date_of_birth)
    },
    onError: (error) => {
      setApiError(error.message);
    },
  });
  const saveProfiledata = (e) => {
    e.preventDefault();
    console.log(formData.email)
    console.log(formData.fname)
    console.log(formData.lname)
    // setDate(date)
    console.log(typeof date)
    if(typeof date === "string") {
        setDate(date)
    }else {
        setDate(date.format("YYYY-MM-DD"))
    }
    
    update_mutation.mutate({ email: formData.email, first_name: formData.fname, last_name: formData.lname, date_of_birth: date});
  }
//   mutation for updating profile data
  const update_mutation = useMutation({
    mutationFn:  profiledataupdate,
    onSuccess: (response) => {
        alert("Profile Udated Successfully!")
    },
    onError: (error) => {
      setApiError(error.message);
    },
  });
  const changePassword = (e) => {
    e.preventDefault();
    if(formDataSecurity.newPassword === formDataSecurity.confirmPassword) {
        setIsSamePassword(false);
        update_password_mutation.mutate({ old_password:formDataSecurity.password, new_password:formDataSecurity.newPassword});
    } else {
        setIsSamePassword(true);
      }
  }
  const update_password_mutation = useMutation({
    mutationFn:  passwordupdate,
    onSuccess: (response) => {
        alert("Password changed Successfully!")
    },
    onError: (error) => {
        setErrorOldPassword(error.response.data.old_password);
        setErrorNewPassword(error.response.data.new_password)
      console.log(error)
    },
  });
  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prev) => ({
        ...prev,
        [fieldName]: fieldValue
    }));
  }
  const handleInputSecurity = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormDataSecurity((prev) => ({
        ...prev,
        [fieldName]: fieldValue
    }));
  }
  function tabsTranslation(status) {
    switch(status){
        case "Edit Profile":
            return t('edit_profile') 
        case "Security":
            return t('security')
    }
}
  return (
    <div className="pt-[30px] mb-14">
        <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[37px] pr-[21px] pb-[50px] pl-[21px] relative">
            <Tabs defaultValue={tabNames[0]} className="">
                <TabsList className="border-b border-[#E6EFF5] w-full justify-start">
                    {
                        tabNames.map((tab, index) => {
                            return (
                                <TabsTrigger 
                                    key={`tab${index}`} 
                                    value={tab} 
                                    className= "" >
                                {tabsTranslation(tab)}
                                </TabsTrigger>
                            )
                        })
                    }
                </TabsList>
                <TabsContent key={tabNames[0]} value={tabNames[0]}>
                    <form onSubmit={saveProfiledata}>
                        <div className="flex gap-7 tablet:flex-wrap">
                            <div className="w-1/5 tablet:w-full">
                                <Image 
                                    src="/images/profile-placeholder.png"
                                    alt=""
                                    width={130}
                                    height={130}
                                    className="w-[130px] h-[130px] mxl:w-[100px] mxl:h-[100px] tablet:w-[130px] tablet:h-[130px] tablet:mx-auto"
                                />
                            </div>
                            <div className="w-2/5 tablet:w-full">
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">{t('first_name')}</label>
                                    <input 
                                        type="text" 
                                        name="fname"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        onChange={handleInput}
                                        value={formData.fname}
                                    />
                                </div>
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">{t('email')}</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        value={formData.email}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="w-2/5 tablet:w-full">
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">{t('last_name')}</label>
                                    <input 
                                        type="text" 
                                        name="lname"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        onChange={handleInput}
                                        value={formData.lname}
                                    />
                                </div>
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">{t('dob')}</label>
                                    <div className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 ">
                                        <DatePicker
                                            value={date}
                                            onChange={setDate}
                                            placeholder="Add Date of Birth"
                                        >
                                        </DatePicker>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-end mt-12 xs:justify-center">
                            <button className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4">
                            {t('save')}
                            </button>
                        </div>
                    </form>
                </TabsContent>
                <TabsContent key={tabNames[1]} value={tabNames[1]}>
                    <form onSubmit={changePassword}>
                        <div className="flex gap-7">
                            <div className="w-2/5 xxl:w-1/2 tablet:w-full">
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">{t('password')}</label>
                                    <input 
                                        type="password" 
                                        name="password"
                                        className={`leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full`}
                                        onChange={handleInputSecurity}
                                        value={formDataSecurity.password}
                                        required
                                    />
                                </div>

                                <p className={`${errorOldPassword ? "block" : "hidden"} text-[#F73737] text-xs font-medium -mt-4 mb-4`} >{errorOldPassword} </p>
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">{t('new_password')}</label>
                                    <input 
                                        type="password" 
                                        name="newPassword"
                                        className={`leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full ${isDiffPassword && "bg-[#FFF4F4] border border-[#F73737]"}`}
                                        onChange={handleInputSecurity}
                                        value={formDataSecurity.newPassword}
                                        required
                                    />
                                </div>
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">{t('confirm_password')}</label>
                                    <input 
                                        type="password" 
                                        name="confirmPassword"
                                        className={`leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full ${isDiffPassword && "bg-[#FFF4F4] border border-[#F73737]"}`}
                                        onChange={handleInputSecurity}
                                        value={formDataSecurity.confirmPassword}
                                        required
                                    />
                                </div>
                <p className={`${isDiffPassword ? "block" : "hidden"} text-[#F73737] text-xs font-medium -mt-4 mb-4`} >Password and Confirm Password are not same </p>
                <p className={`${errorNewPassword ? "block" : "hidden"} text-[#F73737] text-xs font-medium -mt-4 mb-4`} >{errorNewPassword} </p>

                            </div>
                        </div>
                        <div className="flex justify-end mt-12 md1:justify-center">
                            <button className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4">
                                {t('change_password')}
                            </button>
                        </div>
                    </form>
                </TabsContent>
            </Tabs>
        </div>
    </div>
  )
}

export default Settings