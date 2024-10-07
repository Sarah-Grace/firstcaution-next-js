"use client"
import Image from "next/image"
import CardHeader from "@/app/customComponents/CardHeader";
import BillListItem from "@/app/customComponents/billListItem";
import DepositListItem from "@/app/customComponents/depositListItem";
import MessageListItem from "@/app/customComponents/messageListItem";
import Link from "next/link";
import FirteesCard from "@/app/customComponents/firteesCard";
import FirstCoinBannerHome from "@/app/customComponents/firstCoinBAnnerHome";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/lib/axiosInstance';
import { useSelector, useDispatch } from 'react-redux';


const homedata = async (otp) => {
  const response = await axiosInstance.get('/api/client/deshboard/', otp);
  console.log(response);
  return response.data;
};

function Home() {

  const email = useSelector((state) => state.userEmail);
  const [currentContracts, setCurrentContracts] = useState(0);
  const [annualPremium, setAnnualPremium] = useState(0);
  const [grantedAmount, setGrantedAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [firstcoin, setFirstcoin] = useState(0);
  const [apiError, setApiError] = useState("")
  const myDepositList = [
    {
      icon: "/images/icons/granted-amount.png",
      title: "Granted Amount",
      amount: `CHF ${grantedAmount}`
    },
    {
      icon: "/images/icons/deposit-amount.png",
      title: "Deposit Amount",
      amount: `CHF ${depositAmount}`
    },
    {
      icon: "/images/icons/annual-premium.png",
      title: "Annual Premium",
      amount: `CHF ${annualPremium}`
    },
    {
      icon: "/images/icons/firstcoin-icon.png",
      title: "Firstcoin",
      amount: firstcoin
    }
  ];
  // const MessagesList = [
  //   {
  //     avatar: "/images/icons/user-1.png",
  //     name: "Cody Fisher",
  //     chat: "Lorem ipsum dolor sit amet ...", 
  //     time: "10:45 PM"
  //   },
  //   {
  //     avatar: "/images/icons/user-2.png",
  //     name: "Cody Fisher",
  //     chat: "Lorem ipsum dolor sit amet ...", 
  //     time: "10:45 PM"
  //   },
  //   {
  //     avatar: "/images/icons/user-3.png",
  //     name: "Cody Fisher",
  //     chat: "Lorem ipsum dolor sit amet ...", 
  //     time: "10:45 PM"
  //   },
  // ];
  // const firstees = [
  //   {
  //     image: "/images/firstees-card-bg.png",
  //     logo: "/images/firstees-logo.png",
  //     badge: "Time-limited",
  //     badgeColor: "bg-[#D93F50]",
  //     badgeIcon: "before:bg-[url('/images/icons/badge-icon.png')]",
  //     title: "Suhasini",
  //     discount: "Up to 30% off",
  //     time: "32 min",
  //     date: "18 Sep-24 Sep",
  //     rating: "4.7", 
  //     ratingcount: "123"
  //   },
  //   {
  //     image: "/images/firstees-card-bg.png",
  //     logo: "/images/firstees-logo.png",
  //     badge: "Time-limited",
  //     badgeColor: "bg-[#34C759]",
  //     badgeIcon: "before:bg-[url('/images/icons/badge-icon-green.png')]",
  //     title: "Free",
  //     discount: "Up to 30% off",
  //     time: "32 min",
  //     date: "",
  //     rating: "4.7", 
  //     ratingcount: "123"
  //   }
  // ];
  useEffect(()=> {
    mutation.mutate({email});
  },[])
  // Mutation hook 
  const mutation = useMutation({
    mutationFn: homedata,
    onSuccess: (response) => {
      setCurrentContracts(response.total_active_contracts);
      setAnnualPremium(response.total_annual_premium);
      setDepositAmount(response.total_deposited_amount);
      setGrantedAmount(response.total_guaranteed_amount);
      setFirstcoin(response.firstcaution_coin);
    },
    onError: (error) => {
      setApiError(error.message);
    },
  });
  return (
    <div className="flex gap-6 pb-10 xxl:flex-wrap xs:px-2">
      <div className="basis-2/5 xxl:basis-full">
        <div className="bg-secondary px-5 py-6 rounded-10 shadow-c1 xs:px-1">
          <h2 className={'text-h2 font-medium mb-6 text-white lgs:text-2xl lgs:leading-[29px] mid-xxl:text-2xl mid-xxl:leading-[29px]'} >My Dashboard</h2>
          <div className="">
            <div className="bg-white rounded-6 px-5 py-[15px] xs:px-2 relative">
              <div className="flex justify-between mb-4 lgs:mb-0 mid-xxl:mb-0">
                <div>
                  <h3 className="text-h3 text-content lgs:text-xl lgs:leading-6 mid-xxl:text-xl mid-xxl:leading-6">Current contracts</h3>
                  <p className="text-p lgs:text-sm lgs:leading-[17px] mid-xxl:text-sm mid-xxl:leading-[17px] text-grey-2">Keep contracts in check</p>
                </div>
                <p className="text-5xl font-medium leading-9 text-content lgs:text-7xl mid-xxl:text-7xl">{currentContracts}</p>
              </div>
              <div className="flex justify-between gap-2 flex-wrap">
                <div className="flex justify-start items-center gap-2">
                    <Image 
                      src="/images/icons/location-dot.png" 
                      alt="" 
                      width={16} 
                      height={24}
                      className="flex-[0_0_16px] h-6"
                    />
                    <div>
                      <h3 className="text-[13px] leading-[13px] font-medium text-heading lgs:text-[15px] lgs:leading-[15px] lgs:font-medium mid-xxl:text-[15px] mid-xxl:leading-[15px] mid-xxl:font-medium">36 Ranchview Richardson</h3>
                      <p className="text-[10px] leading-[10px] text-grey-1 lgs:text-xs lgs:font-normal mid-xxl:text-xs mid-xxl:font-normal">Switzerland</p>
                    </div>
                </div>
                <Link href="/contracts" className="text-h5 text-grey-2 border border-[#CCCCCC] rounded-8 leading-[25px] px-5 block h-[25px] md1:px-2">
                Show All
                </Link>
              </div>
              <div className="bg-[url(/images/icons/dotted-line.png)] h-[1px] w-[calc(100%-16px)] absolute bottom-0 left-2">
              </div>
            </div>
            <div className="bg-white rounded-6 px-5 pt-[15px] pb-[6px] xs:px-2">
              {myDepositList.map((listItem, index) => {
                return <DepositListItem key={index} icon={listItem.icon} title={listItem.title} amount={listItem.amount} />
              })}
            </div>
            <div className="">
              <div className="mb-2 bg-white rounded-6">
                <BillListItem icon="/images/icons/open-bill.png" billType="Open Bills" link="/bills" />
              </div>
              <div className="bg-white rounded-6">
                <BillListItem icon="/images/icons/paid-bill.png" billType="Paid bills" link="/bills" />
              </div>
            </div>
          </div>
        </div>
        {/* 
         Messages is removed for now uncomment it in future
       */}
        {/* <div className="bg-white p-5 pb-0 mt-5 rounded-10 border border-[#E6EFF5] tablet:hidden">
          <CardHeader textColor="" link="#" title="Message" />
          {MessagesList.map((listItem, index) => {
            return <MessageListItem key={index} avatar={listItem.avatar} name={listItem.name} chat={listItem.chat} time={listItem.time} />
          })}
        </div> */}
      </div>
      <div className="basis-3/5 xxl:basis-full flex flex-col">
        {/* 
         Firstees is removed for now uncomment it in future
       */}
        {/* <div className="bg-[#D3E9FF] px-[21px] pt-[25px] pb-5 rounded-10 tablet:order-1">
          <CardHeader textColor="" link="#" title="Firstees" />
          <div className="flex gap-3 tablet:flex-wrap">
            {firstees.map((firstees, index) => {
              return (
                <div className="basis-1/2 tablet:basis-full " key={index}>
                  <FirteesCard 
                    image={firstees.image} 
                    logo={firstees.logo} 
                    badge= {firstees.badge}  
                    badgeColor= { firstees.badgeColor}
                    badgeIcon= {firstees.badgeIcon}
                    title= { firstees.title}
                    discount= { firstees.discount}
                    time= { firstees.time}
                    date= { firstees.date}
                    rating = { firstees.rating}
                    ratingcount= { firstees.ratingcount}/>
                </div>
              )
            })}
          </div>
        </div> */}
        <div className="bg-white p-5 rounded-10 border border-[#E6EFF5] tablet:order-2">
          <CardHeader textColor="" link="#" title="Firstmoove" />
          <div className="flex gap-3 flex-wrap">
            <div className="flex items-center flex-auto gap-[14px] py-[11px] pl-[18px] pr-[60px] bg-[#F7F6F6] rounded-8">
              <Image src="/images/icons/id.png" alt="" width={20} height={16} />
              <h4 className="text-h4 font-medium text-grey-2">ID</h4>
            </div>
            <div className="flex items-center flex-auto gap-[14px] py-[11px] pl-[18px] pr-[50px] bg-[#F7F6F6] rounded-8">
              <Image src="/images/icons/passport.png" alt="" width={20} height={16} />
              <h4 className="text-h4 font-medium text-grey-2">Passport</h4>
            </div>
            <div className="flex items-center flex-auto gap-[14px] py-[11px] pl-[18px] pr-[10px] bg-[#F7F6F6] rounded-8">
              <Image src="/images/icons/debt.png" alt="" width={20} height={16} />
              <h4 className="text-h4 font-medium text-grey-2">Debt Enforcement Certificate</h4>
            </div>
          </div>
        </div>
        <div className="tablet:order-3">
          <FirstCoinBannerHome />
        </div>
      </div>
    </div>
  )
}

export default Home