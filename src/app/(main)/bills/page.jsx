"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/lib/axiosInstance';
import { useDispatch } from "react-redux";

import { addInvoiceId } from "@/app/slices/authSlice";
import { useRouter } from 'next/navigation';
import { format } from "date-fns"
import { useTranslations } from 'next-intl';
import Preloader from "@/app/customComponents/Preloader";

const billsdata = async (otp) => {
  const response = await axiosInstance.get('/api/client/invoices/', otp);
  return response.data;
};

function Bills() {
  const [isLoading, setIsLoading] =useState(true);
  const t = useTranslations('main.bills_page');
  const dispatch = useDispatch();
  const router = useRouter();
  const tabNames = ["Open Bills", "Paid Bills"];
  const [invoicesData , setInvoicesData ] = useState([])
  // const openBillsData = [
  //   {
  //       category: "Annual Premium",
  //       icon: "/images/icons/bill-1.png",
  //       date: "April 8,2024",
  //       amount: "CHF 540.00",
  //       status: "Open"
  //   },
  //   {
  //     category: "Claim",
  //     icon: "/images/icons/bill-2.png",
  //     date: "April 8,2024",
  //     amount: "CHF 540.00",
  //     status: "Open"
  //   },
  // ]
  const openBillsData = invoicesData.filter((invoice) => invoice.status === "Waiting for payment" || invoice.status === "Processing")
  
  // const paidBillsData = [
  //     {
  //         name: "John Duo",
  //         date: "April 8,2024",
  //         paidTo: "PG&E",
  //         paymentMethod: "E-Bill",
  //         status: "Paid",
  //         link: "billDetail"
  //     }
  // ];
  const paidBillsData = invoicesData.filter((invoice) => invoice.status === "Closed")
  useEffect(()=> {
    mutation.mutate();
  },[]);
  const mutation = useMutation({
    mutationFn: billsdata,
    onSuccess: (response) => {
      console.log(response)
      response.length !== 0 && setInvoicesData(response)
      // response && setInvoicesData(response)
      setIsLoading(false)
    },
    onError: (error) => {

    },  
  });
  const tabsTranslation = (tab) => {
    switch(tab){
      case "Open Bills":
          return t('status.open_bills') 
      case "Paid Bills":
          return t('status.paid_bills')
  }
  }
  return (
    <div className="pt-[30px] mb-14">
      <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[37px] pr-[21px] pb-[50px] pl-[21px] relative">
      {isLoading ? <Preloader /> :
          (<Tabs defaultValue={tabNames[0]} className="">
              <TabsList className="border-b border-[#E6EFF5] w-full justify-start">
                  {tabNames.map((tab, index) => {
                      return (
                          <TabsTrigger 
                              key={`tab${index}`} 
                              value={tab} 
                              className= "" >
                          {tabsTranslation(tab)}
                          
                          </TabsTrigger>
                      )
                  })}
              </TabsList>
              <TabsContent key={tabNames[0]} value={tabNames[0]}>
              {
                  openBillsData.map((obd, index) => {
                    return (
                      <div className="flex justify-between items-center gap-[5px] py-5 px-8 bg-bgc-3 rounded-6 mb-5 xxl:py-4 xl:px-4 mxl:block mxl:relative" key={index}>
                          <div className="flex-[1_1_30%] flex items-center gap-3">
                              <Image
                                src="/images/icons/bill-1.png"
                                alt=""
                                className="w-14 h-14 mxl:hidden"
                                width={60}
                                height={60}
                              /> 
                              <h4 className="text-base leading-[19px] text-content font-semibold mxl:mb-[30px] sm:text-sm">{obd['invoiceType']}</h4>
                          </div>
                          <div className="flex-[0_0_20%] mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2 xxl:mb-1">{t('open-bills.due_date')}:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-grey-2">{obd['dueDate'] && format(obd['dueDate'], 'do MMM, yyyy')}</p>
                          </div>
                          <div className="flex-[0_0_20%] mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2 xxl:mb-1">{t('open-bills.amount')}:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-[#868686]">CHF {obd['balanceAmount'] ===null ? 0.00 : obd['balanceAmount']}</p>
                          </div>
                          <div className="flex-[0_0_10%] mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2 xxl:mb-1">{t('open-bills.status_title')}:</p>
                              <p className="text-[15px] leading-[18px] font-medium relative pl-[10px] after:content[''] after:w-[5px] after:h-[5px] after:block after:rounded-full after:absolute after:top-1/2 after:left-0 after:-translate-y-2/4 after:bg-[#34C759] text-[#34C759]">
                                Open
                              </p>
                          </div>
                          <Link 
                              href="#"
                              className="rounded-8 bg-secondary text-white py-4 lgs:px-[30px] mlgs:px-[10px] mgls:w-[300px] text-center mlgs:py-3 xxl:px-4 xxl:py-2 border-0 inline-block mxl:absolute mxl:top-[10px] mxl:right-[10px] mxl:py-1 mxl:px-8 xs:px-2 md:relative md:mb-2 "
                          >
                              {t('open-bills.pay_bill')}
                          </Link>
                      </div>
                    )
                  })
                }
                {/* 
                  Request Monthly payment code commented 
                  uncomment in future 
                */}
                {/* <div>
                  <p className="mt-20 text-base font-medium text-content leading-[19px] text-center flex justify-center items-center before:content-[''] before:block before:h-[1px] before:bg-[#E6EFF5] before:relative before:left-[-10px] after:content-[''] after:block after:h-[1px] after:bg-[#E6EFF5] after:relative after:right-[-10px] w-calc-line">or</p>
                  <div className="max-w-[435px] m-auto text-center">
                    <Image
                      src="/images/question.png"
                      alt=""
                      className="mx-auto mt-12 mb-[26px]"
                      width={134}
                      height={134}
                    />
                    <h3 className="text-[18px] leading-[22px] font-semibold text-content mb-11">Do you want to request monthly payment of Annual Premium?</h3>
                    <Link 
                        href="/monthlyPayment"
                        className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mt-12 inline-block mxl:py-3 mxl:px-10 sm:px-4 xs:px-3 xs:text-sm"
                    >
                        Request Monthly Payment
                    </Link>
                  </div>
                </div> */}
              </TabsContent>
              <TabsContent key={tabNames[1]} value={tabNames[1]}>
                {
                  paidBillsData.map((d, index) => {
                    return (
                      <div className="flex justify-between items-center gap-[5px] py-5 px-8 border-b border-[#E6EFF5] bg-bgc-3 last:border-b-0 mxl:block mxl:relative sm:px-4" key={index}>
                          <div className="block flex-[0_0_20%] xxl:flex-auto  mxl:flex mxl:gap-2 mxl:flex-col-reverse">
                              <h4 className="text-base leading-[19px] font-medium text-content mb-2">{d['payerName']}</h4>
                              <h4 className="text-[15px] leading-[18px] font-normal text-[#868686] mxl:text-[18px] mxl:font-medium mxl:mb-5 mxl:text-content sm:text-sm">{d['dueDate'] && format(d['dueDate'], 'do MMM, yyyy')}</h4>
                          </div>
                          <div className="flex-[0_0_20%] xxl:flex-auto mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2">{t('paid_bills.paid_to')}:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-grey-2">PG&E</p>
                          </div>
                          <div className="flex-[0_0_20%] xxl:flex-auto mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2">{t('paid_bills.payment_method')}:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-[#868686]">{d['Payment method']}</p>
                          </div>
                          <div className="flex-[0_0_20%] xxl:flex-auto mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2 mxl:mb-0">{t('paid_bills.status_title')}:</p>
                              <p className="w-[57px] text-white bg-[#34C759] text-center text-xs font-medium rounded-8 leading-4">
                                <span><FontAwesomeIcon icon={faCheck} /></span>
                                <span className="pl-1">Paid</span>
                              </p>
                          </div>
                          <div onClick={() => 
                            {
                                dispatch(addInvoiceId(d['invoiceId']));
                                router.push('/bills/billDetail');
                            }
                          }>
                          <Link 
                              href=""
                              className="block border border-[#919191] text-[#919191] py-0  px-2 lgs:px-[20px] xxl:px-5 leading-[35px] rounded-sm hover:border-primary hover:text-primary transition-all mxl:absolute mxl:top-[10px] mxl:right-[10px] mxl:text-primary mxl:p-0 mxl:border-0 xs:relative xs:left-0 xs:inline-block"
                          >
                              {t('paid_bills.view_details')}
                          </Link> 
                          </div>
                      </div>
                    )
                  })
                }
              </TabsContent>
          </Tabs>)}
          {/* <div className="flex items-center gap-3 absolute top-10 right-[51px] md1:top-2 mxl:gap-[2px]">
            <Image
              src="/images/icons/ph_timer.png"
              alt=""
              className=""
              width={20}
              height={20}
            />
            <h3 className="text-h3 font-normal text-grey-2 mxl:text-xs">Last Bill: <span className="text-content">CHF 1,170.00</span></h3>
          </div> */}
      </div>
    </div>
  )
}

export default Bills