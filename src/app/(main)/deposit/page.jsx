"use client"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BackArrowBtn from "@/app/customComponents/BackArrowBtn"
import CustomListWidthIcon from "@/app/customComponents/CustomListWidthIcon";
import axiosInstance from '@/lib/axiosInstance';
import { useTranslations } from 'next-intl';

const depositdata = async (otp) => {
  const response = await axiosInstance.get('/api/client/deshboard/', otp);
  console.log(response)
  return response.data;
};

function Deposit() {
  const t = useTranslations('main.deposit_page');
  const email = useSelector((state) => state.userEmail);
  const [annualPremium, setAnnualPremium] = useState(0);
  const [grantedAmount, setGrantedAmount] = useState(0);



  const myDepositList = [
    {
      icon: "/images/icons/granted.png",
      title: t('deposit_detail'),
      amount:`CHF ${grantedAmount}`
    },
    {
      icon: "/images/icons/flexible.png",
      title: t('flexible_deposit'),
      amount: "CHF 460.00"
    },
    {
      icon: "/images/icons/annual.png",
      title: t('annual_premium'),
      amount: `CHF ${annualPremium}`,
    },
    {
      icon: "/images/icons/promo.png",
      title: t('promo_code'),
      amount: "DISCOUNT 20"
    }
  ];
  useEffect(()=> {
    console.log(email)
    mutation.mutate({email});
  },[])
  // Mutation hook 
  const mutation = useMutation({
    mutationFn: depositdata,
    onSuccess: (response) => {
      setAnnualPremium(response.total_annual_premium);
      setGrantedAmount(response.total_guaranteed_amount);
    },
    onError: (error) => {
      setApiError(error.message);
      console.log(error.message)
    },
  });
  return (
    <div className="pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white sm:px-3">
        <BackArrowBtn link="/home" title={t('deposit_detail')}/>
        <div className="flex mt-11 flex-wrap">
            <div className="w-2/4 mxl:w-full">
                {myDepositList.map((listItem, index) => {
                    return <CustomListWidthIcon key={index} icon={listItem.icon} title={listItem.title} amount={listItem.amount} />
                })}
            </div>
            {/* Adust button is commented  */}
            {/* <div className="w-2/4 self-end text-end mxl:w-full mxl:mt-4">
                <a href="/adjustDeposit" className="inline-block rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto leading-4">
                    Adjust
                </a>
            </div> */}
        </div>
    </div>
  )
}

export default Deposit