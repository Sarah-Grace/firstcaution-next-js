"use client"
import BackArrowBtn from "@/app/customComponents/BackArrowBtn";
import Image from "next/image";
import CustomList from "@/app/customComponents/CustomList";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { format } from "date-fns";
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShareNodes} from '@fortawesome/free-solid-svg-icons';
import DocumentView from "@/app/customComponents/DocumentView";
import Preloader from "@/app/customComponents/Preloader";

const billDetail = async ({ contractId, otp }) => {
    console.log(contractId)
    const response = await axiosInstance.get(`/api/client/invoice-detail/${contractId}/`, otp);
    //console.log(response);
    return response.data;
};

function BillDetail() {
    const t = useTranslations('main.bill_detail_page');
    const contractId = useSelector((state) => state.invoiceId);
    const [payerName, setPayerName] = useState();
    const [amount, setAmount] = useState();
    const [paymentMethod, setpaymentMethod] = useState();
    const [date, setDate] = useState();
    const [pdfLink, setPdfLink] = useState("");
    const [loading, setLoading] = useState(true);
    const BillInfoList = [
        {
            title: t('transaction_id'),
            detail: "382468"
        },
        {
            title: t('confirmation_no'),
            detail: "2BEF168"
        },
        {
            title: t('payment_date'),
            detail: date
        },
        {
            title: t('biller_name'),
            detail: payerName
        },
        {
            title: t('amount_paid'),
            detail: `CHF ${amount}`
        },
        {
            title: t('payment_method'),
            detail: paymentMethod 
        },
    ]
    useEffect(() => {
        mutation.mutate({ contractId, otp: {} }); // Passing contractId and optional otp when mutating
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading and show content
        }, 10000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [contractId]);
    // Mutation hook 
    const mutation = useMutation({
        mutationFn: billDetail,
        onSuccess: (response) => {
            setPayerName(response.invoice_detail['Payer Name'])
            setAmount(response.invoice_detail.Amount)
            setpaymentMethod(response.invoice_detail['Payment method'])
            setDate(format(response.invoice_detail['dueDate'], 'do MMM, yyyy'))
            setPdfLink(response.file)

        },
        onError: (error) => {
        // This function runs if the mutation fails
        // error.response.data.otp !== undefined ? setErrorOtp(error.response.data.otp): setErrorOtp("");
        // console.log( error.response.data.otp);
            
        },
    });
  return (
    <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white sm:px-2'>
        <BackArrowBtn link="../bills" title={t('bill_detail')} />
        <div className="flex xl:flex-wrap">
            <div className="w-2/4 pr-6 xl:pr-0 xl:w-full xl:mb-6">
                <div className="mt-12">
                    {BillInfoList.map((list, index) => {
                        return (
                            <CustomList key={index} title={list.title} info={list.detail} />
                        )
                    })}
                </div>
                <div className="flex justify-center items-center bg-[rgb(52,199,89,0.15)] py-5 px-[26px] gap-5 mt-[30px] rounded-8 tablet:gap-2 tablet:px-2">
                    <Image
                        src="/images/icons/security-off.png"
                        alt=""
                        className="tablet:w-7 tablet:h-7"
                        width={38}
                        height={38}
                    />
                    <h3 className="text-h3 text-content tablet:text-sm">{t('note')}</h3>
                </div>
            </div>
            <div className="w-1/2 pl-6 xxl:w-full xxl:pl-0">
            <div className="bg-bgc-3 px-[30px] py-5 md1:px-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-h3 font-medium text-grey-2 mb-2">{t('document_preview')}</h3>
                        {/* <div className="bg-primary text-xs font-semibold leading-[19px] w-[53px] text-center rounded-8 text-white">100%</div> */}
                    </div>
                    {loading ? (
                        // Show the preloader while waiting for the timer
                        <Preloader />
                    ) : (
                        // After 10 seconds, display either the PDF or the error message
                        <h2 className="text-content">No PDF Found</h2>
                    )}
                </div>
                {/* {!loading &&
                (
                    <div className="mt-14 flex justify-center items-center gap-3 flex-wrap">
                        <a className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4" href={blobUrl} download  target="_blank">
                            {t('download_pdf')}
                        </a>
                    </div>
                )
                } */}
            </div>
        </div>
    </div>
  )
}

export default BillDetail