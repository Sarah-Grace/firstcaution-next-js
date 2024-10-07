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
        {status:"Active",  colorClass:"text-[#34C759]" , bgColor:"after:bg-[#34C759]" , borderColor:"mxl:border-[#34C759]"},
        {status:"Pending", colorClass:"text-[#EEC23E]", bgColor:"after:bg-[#EEC23E]" , borderColor:"mxl:border-[#EEC23E]" },
        {status:"Closing with Claim",  colorClass:"text-[#F73737]", bgColor:"after:bg-[#F73737]" , borderColor:"mxl:border-[#F73737]" }
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
            <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[37px] pr-[21px] pb-[50px] pl-[21px] sm:pr-3 sm:pl-3">
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
                                        <div className="flex justify-between items-center gap-[5px] py-5 px-8 border-b border-[#E6EFF5] bg-bgc-3 last:border-b-0 mxl:block relative mxl:border mxl:rounded-6 mxl:mb-2 mxl:px-2 mxl:pb-3 xs:pt-10" key={index}>
                                            <div className="block flex-[0_0_20%] mxl:flex mxl:items-center mxl:gap-1 mxl:mb-3">
                                                <h4 className="text-base leading-[19px] font-semibold text-content">Contract:</h4>
                                                <h4 className="text-[15px] leading-4 font-medium text-content mt-2 mxl:mt-0">{d.clientContractNumber}</h4>
                                            </div>
                                            <div className="flex-[0_0_20%] mxl:flex mxl:items-center mxl:mb-1 mxl:gap-1">
                                                <p className="text-base leading-[19px] font-normal text-grey-2 mb-2 mxl:mb-0 mxl:text-sm mxl:font-medium">Guarantee Amount:</p>
                                                <p className="text-[15px] leading-4 font-medium text-content mxl:text-sm mxl:font-medium">{`CHF ${d.clientContractGuarantedAmount}`}</p>
                                            </div>
                                            <div className="flex-[0_0_20%] mxl:flex mxl:items-center mxl:gap-1 mxl:mb-3">
                                                <p className="text-base leading-[19px] font-normal text-grey-2 mb-2 mxl:mb-0 mxl:text-sm mxl:font-medium">Annual Premium:</p>
                                                <p className="text-[15px] leading-4 font-medium text-content mxl:text-sm mxl:font-medium">{`CHF ${d.clientContractAnnualPremium}`}</p>
                                            </div>
                                            <div className="flex-[0_0_12%] mxl:flex mxl:items-center">
                                                    <p className="text-base leading-[19px] font-normal text-grey-2 mb-1 mxl:hidden">Status:</p>
                                                    <p 
                                                        className={`text-[15px] leading-[18px] font-medium relative pl-[10px] after:content[""] after:w-[5px] after:h-[5px] after:block after:rounded-full after:absolute after:top-1/2 after:left-0 after:-translate-y-2/4 mxl:border mxl:py-[2px] mxl:pr-3 mxl:pl-6 mxl:after:left-3 mxl:rounded-8 ${listStatusColor[0].bgColor} ${listStatusColor[0].colorClass} ${listStatusColor[0].borderColor} mxl:absolute mxl:top-5 mxl:right-4 sm:top-2 sm:pl-3 sm:pr-2 sm:after:left-1 xs:left-2 xs:right-auto`}>
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
                                                
                                                className="block border border-[#919191] text-[#919191] py-0 px-[26px] mxl:px-[10px] leading-[35px] rounded-sm hover:border-[#3876DA] hover:text-[#3876DA] transition-all mxl:inline-block mxl:border-0 mxl:text-[#3876DA] mxl:font-semibold mxl:px-0 text-center"
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