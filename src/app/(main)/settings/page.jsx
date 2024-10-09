"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker"

function Settings() {
  const tabNames = ["Edit Profile", "Security"];
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    date_of_birth: ""
  });
  const [date, setDate] = useState("");
  const [formDataSecurity, setFormDataSecurity] = useState({
    password: "",
    newPassword: "",
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
  const handleInputSecurity = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormDataSecurity((prev) => ({
        ...prev,
        [fieldName]: fieldValue
    }));
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
                                {tab}
                                </TabsTrigger>
                            )
                        })
                    }
                </TabsList>
                <TabsContent key={tabNames[0]} value={tabNames[0]}>
                    <form>
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
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">First Name</label>
                                    <input 
                                        type="text" 
                                        name="fname"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        onChange={handleInput}
                                        value={formData.fname}
                                    />
                                </div>
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        onChange={handleInput}
                                        value={formData.email}
                                    />
                                </div>
                            </div>
                            <div className="w-2/5 tablet:w-full">
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">Last Name</label>
                                    <input 
                                        type="text" 
                                        name="lname"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        onChange={handleInput}
                                        value={formData.lname}
                                    />
                                </div>
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">Date of Birth</label>
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
                                Save
                            </button>
                        </div>
                    </form>
                </TabsContent>
                <TabsContent key={tabNames[1]} value={tabNames[1]}>
                    <form>
                        <div className="flex gap-7">
                            <div className="w-2/5 xxl:w-1/2 tablet:w-full">
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">Password</label>
                                    <input 
                                        type="text" 
                                        name="password"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        onChange={handleInputSecurity}
                                        value={formDataSecurity.password}
                                    />
                                </div>
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">New Password</label>
                                    <input 
                                        type="text" 
                                        name="newPassword"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        onChange={handleInputSecurity}
                                        value={formDataSecurity.newPassword}
                                    />
                                </div>
                                <div className="rounded-6 relative w-full mb-6">
                                    <label className="text-base font-normal text-content leading-5 mb-3 block">Confirm Password</label>
                                    <input 
                                        type="text" 
                                        name="confirmPassword"
                                        className="leading-[48px] py-0 px-5 text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full"
                                        onChange={handleInputSecurity}
                                        value={formDataSecurity.confirmPassword}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-12 md1:justify-center">
                            <button className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4">
                                Change Password
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