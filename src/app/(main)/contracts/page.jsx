"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/lib/axiosInstance'
import { useDispatch } from "react-redux";
import { addContractId } from "@/app/slices/authSlice";
import { useRouter } from 'next/navigation';

const contractdata = async (otp) => {
    const response = await axiosInstance.get('/api/client/active-contracts/', otp);
    console.log(response)
    return response.data;
};
function Contracts() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [filterStatus, setFilterStatus] = useState("All");
    const status = ["All", "Active", "Pending", "Closing with Claim"];
    const statusColor = [
        {status:"Active",  colorClass:"text-[#34C759]" , bgColor:"after:bg-[#34C759]" , borderColor:"md:border-[#34C759]"},
        {status:"Pending", colorClass:"text-[#EEC23E]", bgColor:"after:bg-[#EEC23E]" , borderColor:"md:border-[#EEC23E]" },
        {status:"Closing with Claim",  colorClass:"text-[#F73737]", bgColor:"after:bg-[#F73737]" , borderColor:"md:border-[#F73737]" }
    ];
    const [allContracts, setAllContracts] = useState([])
    const filteredData = filterStatus === "All" ? allContracts : allContracts.filter(d => d.clientContractStage === filterStatus);
    console.log(filteredData);
    useEffect(()=> {
        mutation.mutate();
    },[]);
      // Mutation hook 
    const mutation = useMutation({
        mutationFn: contractdata,
        onSuccess: (response) => {
            setAllContracts(response)
        },
        onError: (error) => {

        },
    });
    
    return (
        <div className="pt-[30px] mb-14">
            <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[37px] pr-[21px] pb-[50px] pl-[21px]">
                <Tabs defaultValue="All" onValueChange={(t) => { setFilterStatus(t) }} className="">
                    <TabsList className= "border-b border-[#E6EFF5] w-full justify-start">
                        {status.map((status, index) => {
                            console.log(status);
                            return (
                                <TabsTrigger 
                                    key={`tab${index}`} 
                                    value={status} 
                                    className= {status !== "Closing with Claim" ? status: "Closed"} >
                                {status !== "Closing with Claim" ? status : "Closed"}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                    {status.map((status, index) => {
                        return <TabsContent key={index} value={status} >
                            {
                                
                                filteredData.map((d, index) => {
                                    // fetching background and text color classes from an array of objects baces on status
                                    const listStatusColor = statusColor.filter(color => color.status === d.clientContractStage)
                                    console.log(listStatusColor[0].bgColor)
                                    return (
                                        <div className="flex justify-between items-center gap-[5px] py-5 px-8 border-b border-[#E6EFF5] bg-bgc-3 last:border-b-0 md:block relative md:border md:rounded-6 md:mb-2 md:px-2 md:pb-3 xs:pt-8 " key={index}>
                                            <div className="block flex-[0_0_20%] md:flex md:items-center md:gap-1 md:mb-3">
                                                <h4 className="text-base leading-[19px] font-semibold text-content">Contract:</h4>
                                                <h4 className="text-[15px] leading-4 font-medium text-content mt-2 md:mt-0">{d.clientContractNumber}</h4>
                                            </div>
                                            <div className="flex-[0_0_20%] md:flex md:items-center md:mb-1 md:gap-1">
                                                <p className="text-base leading-[19px] font-normal text-grey-2 mb-2 md:mb-0 md:text-sm md:font-medium">Guarantee Amount:</p>
                                                <p className="text-[15px] leading-4 font-medium text-content md:text-sm md:font-medium">{`CHF ${d.clientContractGuarantedAmount}`}</p>
                                            </div>
                                            <div className="flex-[0_0_20%] md:flex md:items-center md:gap-1 md:mb-3">
                                                <p className="text-base leading-[19px] font-normal text-grey-2 mb-2 md:mb-0 md:text-sm md:font-medium">Annual Premium:</p>
                                                <p className="text-[15px] leading-4 font-medium text-content md:text-sm md:font-medium">{`CHF ${d.clientContractAnnualPremium}`}</p>
                                            </div>
                                            <div className="flex-[0_0_20%] md:flex md:items-center md:mb-1">
                                                    <p className="text-base leading-[19px] font-normal text-grey-2 mb-1 md:hidden">Status:</p>
                                                    <p 
                                                        className={`text-[15px] leading-[18px] font-medium relative pl-[10px] after:content[""] after:w-[5px] after:h-[5px] after:block after:rounded-full after:absolute after:top-1/2 after:left-0 after:-translate-y-2/4 md:border md:py-[2px] md:pr-3 md:pl-6 md:after:left-3 md:rounded-8 ${listStatusColor[0].bgColor} ${listStatusColor[0].colorClass} ${listStatusColor[0].borderColor} md:absolute md:top-3 md:right-4`}>
                                                            {d.clientContractStage!== "Closing with Claim" ? d.clientContractStage : "Closed"}
                                                    </p>
                                            </div>
                                            <div onClick={() => 
                                                    {
                                                        dispatch(addContractId(d.clientContractId));
                                                        router.push('/contractDetail');
                                                    }
                                                }>
                                            <Link 
                                                href=""
                                                
                                                className="block border border-[#919191] text-[#919191] py-0 px-[30px] xxl:px-[10px] leading-[35px] rounded-sm hover:border-[#3876DA] hover:text-[#3876DA] transition-all md:inline-block md:border-0 md:text-[#3876DA] md:font-semibold md:px-0 text-center"
                                            >
                                                View Details
                                            </Link>
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                    </TabsContent>})}
                </Tabs>
            </div>
        </div>
    )
}

export default Contracts