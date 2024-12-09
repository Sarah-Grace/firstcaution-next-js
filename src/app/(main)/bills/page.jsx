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
import { format, getYear } from "date-fns"
import { useTranslations } from 'next-intl';
import Preloader from "@/app/customComponents/Preloader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomList from "@/app/customComponents/CustomList";
import { addPaymentUrl } from '@/app/slices/authSlice';

const billsdata = async (otp) => {
  const response = await axiosInstance.get('/api/client/invoices/', otp);
  return response.data;
};

const paybill = async (data) => {
  // const payload = {
  //   RequestHeader: {
  //     requestId: 'unique-request-id', // Customize as needed
  //     // Add other necessary headers here
  //   },
  //   TerminalId: 'your-terminal-id',
  //   Payment: {
  //     amount: 100, // Replace with actual payment details
  //     currency: 'USD',
  //     // Other payment-related details
  //   },
  //   ReturnUrls: {
  //     Success: 'https://your-site.com/success',
  //     Fail: 'https://your-site.com/fail',
  //     Abort: 'https://your-site.com/cancel'
  //   }
  // };
    const payload = {
    ReturnUrls: {
      Success: '/bills',
      Abort: '/bills'
    },
  };
  const response = await axiosInstance.post('/api/saferpay/payment/',data);
  return response.data;
};

function Bills() {
  const [isLoading, setIsLoading] =useState(true);
  const t = useTranslations('main.bills_page');
  const dispatch = useDispatch();
  const router = useRouter();
  const tabNames = ["Open Bills", "Paid Bills"];
  const [invoicesData , setInvoicesData ] = useState([])
  const [isOpen, setIsOpen] = useState(false); // to hold state for dialog box open and close 
  // function to open dialog box
  const openDialog = () => {
    setIsOpen(true);
  };
  // function to close dialog box
  const closeDialog = () => {
    setIsOpen(false);
  };
  const [payBillInfo , setPayBillInfo ] = useState({
    amount: 0.00,
    date:""
  })
  const BillDetailList = [
    {
        title: t('open-bills.bill_amount'),
        detail: `CHF ${payBillInfo.amount}`
    },
    {
        title: t('open-bills.due_date'),
        detail: payBillInfo.date
    }
]

  const openBillsData = invoicesData.filter((invoice) => invoice.status === "Waiting for payment" || invoice.status === "Processing")
  const openBillsFiltered = openBillsData
  .filter((obd) => obd.invoiceType === 'Entrance cost' || obd.invoiceType === 'Yearly cost')

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

  const paybillmutation = useMutation({
    mutationFn: paybill,
    onSuccess: (response) => {
      console.log(response.RedirectUrl)
      dispatch(addPaymentUrl(response.RedirectUrl))
    },
    onError: (error) => {

    },  
  });
  const showPaymentInfo = (invoiceId) => {
    openBillsFiltered
    .filter((obf) => obf.invoiceId === invoiceId)
      .map((obj) => 
        { 
          setPayBillInfo({
            amount: obj.balanceAmount === null ? 0.00 : parseFloat(obj.balanceAmount),
            date: obj.dueDate === null ? "" : format(obj.dueDate, 'do MMM, yyyy')
          })
        })
    openDialog()
  }
  const payment = () => {
    console.log(payBillInfo.amount.toFixed(2))
    const amount = payBillInfo.amount.toFixed(2)
    paybillmutation.mutate({ amount: amount , currency: "CHF"});
    router.push('/payment')
  }
  const tabsTranslation = (tab) => {
    switch(tab){
      case "Open Bills":
          return t('status.open_bills') 
      case "Paid Bills":
          return t('status.paid_bills')
    }
  }
  const invoiceTypeTanslation = (invoiceType) => {
    switch(invoiceType){
      case "Entrance cost":
          return t('open-bills.invoice_type.entrance_cost') 
      case "Yearly cost":
          return t('open-bills.invoice_type.yearly_cost')
    }
  }
  // window.parent.postMessage({ status: 'success' }, 'http://localhost:3000'); 
  // window.parent.postMessage({ status: 'fail' }, 'http://localhost:3000');
  // window.parent.postMessage({ status: 'cancel' }, 'http://localhost:3000');
  return (
    <div className="pt-[30px] mb-14">
      <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[37px] pr-[21px] pb-[50px] pl-[21px] relative">
      {isLoading ? <Preloader /> :
          (
          <Tabs defaultValue={tabNames[0]} className="">
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
                  openBillsFiltered 
                  .map((obd) => {
                    return (
                      <div className="flex justify-between items-center gap-[5px] py-5 px-8 bg-bgc-3 rounded-6 mb-5 xxl:py-4 xl:px-4 mxl:block mxl:relative" key={obd.invoiceId}>
                          <div className="flex-[1_1_30%] flex items-center gap-3">
                              <Image
                                src="/images/icons/bill-1.png"
                                alt=""
                                className="w-14 h-14 mxl:hidden"
                                width={60}
                                height={60}
                              /> 
                              <h4 className="text-base leading-[19px] text-content font-semibold mxl:mb-[30px] sm:text-sm">{invoiceTypeTanslation(obd.invoiceType)}</h4>
                          </div>
                          <div className="flex-[0_0_10%] mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2 xxl:mb-1">{t('open-bills.year')}:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-grey-2">{obd.dueDate && getYear(obd.dueDate) + 1}</p>
                          </div>
                          <div className="flex-[0_0_15%] mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2 xxl:mb-1">{t('open-bills.due_date')}:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-grey-2">{obd['dueDate'] && format(obd['dueDate'], 'do MMM, yyyy')}</p>
                          </div>
                          <div className="flex-[0_0_15%] mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2 xxl:mb-1">{t('open-bills.amount')}:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-[#868686]">CHF {obd['balanceAmount'] ===null ? 0.00 : obd['balanceAmount']}</p>
                          </div>
                          <div className="flex-[0_0_10%] mxl:flex mxl:gap-2">
                              <p className="text-base leading-[19px] font-medium text-content mb-2 xxl:mb-1">{t('open-bills.status_title')}:</p>
                              <p className="text-[15px] leading-[18px] font-medium relative pl-[10px] after:content[''] after:w-[5px] after:h-[5px] after:block after:rounded-full after:absolute after:top-1/2 after:left-0 after:-translate-y-2/4 after:bg-[#34C759] text-[#34C759]">
                              {t('open-bills.status.open')}
                              </p>
                          </div>
                          <button 
                              onClick={() => showPaymentInfo(obd.invoiceId)}
                              className="rounded-8 bg-secondary text-white py-4 lgs:px-[30px] mlgs:px-[10px] mgls:w-[300px] text-center mlgs:py-3 xxl:px-4 xxl:py-2 border-0 inline-block mxl:absolute mxl:top-[10px] mxl:right-[10px] mxl:py-1 mxl:px-8 xs:px-2 md:relative md:mb-2 "
                          >
                              {t('open-bills.pay_bill')}
                          </button>
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
                              <p className="min-w-[57px] inline-block px-2 text-white bg-[#34C759] text-center text-xs font-medium rounded-8 leading-4">
                                <span className="leading-[19px]"><FontAwesomeIcon icon={faCheck} /></span>
                                <span className="pl-1 leading-[19px]">{t('paid_bills.paid')}</span>
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
      <div className="w-2/3 pl-3">
        <div className="flex flex-col justify-end h-full">
            <div>
                <Dialog className="rounded-6" open={isOpen} onClose={closeDialog}>
                    <DialogContent>
                      <DialogHeader>
                          <DialogTitle className="text-start text-5 leading-[30px] font-medium text-content">{t('open-bills.payment')}</DialogTitle>
                      </DialogHeader>
                      <div className="">
                        <button 
                            onClick={ closeDialog }
                            className="absolute w-10 right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none p-2 bg-[#F1F3F9] text-content">
                        X
                        </button>
                        <h3 className="text-h3 font-medium text-[#8B8D97] mt-14 mb-5">{t('open-bills.detail_information')}</h3>
                        <div className="">
                            {BillDetailList.map((list, index) => {
                                return (
                                    <CustomList key={index} title={list.title} info={list.detail} />
                                )
                            })}
                        </div>
                        <button 
                            onClick={payment}
                            className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 mt-14"
                        >
                            {t('open-bills.proceed_to_pay')}
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

export default Bills