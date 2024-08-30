"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import { useEffect, useState } from "react";

function Contracts() {
    const [filterStatus, setFilterStatus] = useState("All");
    const status = ["All", "Active", "Pending", "Closed"];
    const statusColor = [
            {status:"Active",  colorClass:"text-[#34C759]" , bgColor:"after:bg-[#34C759]" },
            {status:"Pending", colorClass:"text-[#EEC23E]", bgColor:"after:bg-[#EEC23E]" },
            {status:"Closed",  colorClass:"text-[#F73737]", bgColor:"after:bg-[#F73737]" }
        ];
    const data = [
        {
            name: "John Duo",
            address: "36-B Ranchview, Switzerland",
            date: "April 8,2024",
            status: "Active",
            link: "contractDetail"
        },
        {
            name: "Jerome Bell",
            address: "36-B Ranchview, Switzerland",
            date: "April 8,2024",
            status: "Pending",
            link: "contractDetail"
        },
        {
            name: "Robert Fox",
            address: "36-B Ranchview, Switzerland",
            date: "April 8,2024",
            status: "Active",
            link: "contractDetail"
        },
        {
            name: "Floyd Miles",
            address: "36-B Ranchview, Switzerland",
            date: "April 8,2024",
            status: "Active",
            link: "contractDetail"
        },
        {
            name: "Devon Lane",
            address: "36-B Ranchview, Switzerland",
            date: "April 8,2024",
            status: "Active",
            link: "contractDetail"
        },
        {
            name: "Jane Cooper",
            address: "36-B Ranchview, Switzerland",
            date: "April 8,2024",
            status: "Pending",
            link: "contractDetail"
        },
        {
            name: "Wade Warren",
            address: "36-B Ranchview, Switzerland",
            date: "April 8,2024",
            status: "Closed",
            link: "contractDetail"
        }
    ];
    const filteredData = filterStatus === "All" ? data : data.filter(d => d.status === filterStatus);
    console.log(filteredData);
    useEffect(() => {
        console.log("Render");
    },[])
    
  return (
    <div className="pt-[30px] mb-14">
        <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[37px] pr-[21px] pb-[50px] pl-[21px]">
            <Tabs defaultValue="All" onValueChange={(t) => { setFilterStatus(t) }} className="">
                <TabsList>
                    {status.map((status, index) => {
                        console.log(status);
                        return (
                            <TabsTrigger 
                                key={`tab${index}`} 
                                value={status} 
                                className= "" >
                            {status}
                            </TabsTrigger>
                        )
                    })}
                </TabsList>
                {status.map((status, index) => {
                    return <TabsContent key={index} value={status} >
                        {
                            
                            filteredData.map((d, index) => {
                                // fetching background and text color classes from an array of objects baces on status
                                const listStatusColor = statusColor.filter(color => color.status === d.status)
                                return (
                                    <div className="flex justify-between items-center gap-[5px] py-5 px-8 border-b border-[#E6EFF5] bg-bgc-3 last:border-b-0" key={index}>
                                        <div className="block flex-[1_1_20%]">
                                            <h4 className="text-base leading-[19px] font-semibold text-content">{d.name}</h4>
                                            <h4 className="text-[15px] leading-4 font-medium text-content mt-2">{d.address}</h4>
                                        </div>
                                        <div className="flex-[0_0_20%]">
                                            <p className="text-base leading-[19px] font-normal text-grey-2 mb-2">Issue Date:</p>
                                            <p className="text-[15px] leading-4 font-medium text-content">{d.date}</p>
                                        </div>
                                        <div className="flex-[0_0_20%]">
                                                <p className="text-base leading-[19px] font-normal text-grey-2 mb-1">Status:</p>
                                                <p className={`text-[15px] leading-[18px] font-medium relative pl-[10px] after:content[""] after:w-[5px] after:h-[5px] after:block after:rounded-full after:absolute after:top-1/2 after:left-0 after:-translate-y-2/4 ${listStatusColor[0].bgColor} ${listStatusColor[0].colorClass}`}>{d.status}</p>
                                        </div>
                                        <Link 
                                            href={d.link} 
                                            className="block border border-[#919191] text-[#919191] py-0 px-[30px] leading-[35px] rounded-sm hover:border-[#3876DA] hover:text-[#3876DA] transition-all"
                                        >
                                            View Details
                                        </Link>
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