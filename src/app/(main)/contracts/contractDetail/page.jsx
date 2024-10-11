"use client"

import BackArrowBtn from "@/app/customComponents/BackArrowBtn";
import Image from "next/image";
import CustomList from "@/app/customComponents/CustomList";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShareNodes} from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import DocumentView from "@/app/customComponents/DocumentView";
// import PdfViewer from "@/app/customComponents/PdfViewer"

const contractDetail = async ({ contractId, otp }) => {
    console.log(contractId)
    const response = await axiosInstance.get(`/api/client/contract-detail/${contractId}/`, otp);
    console.log(response);
    return response.data;
};

function ContractDetail() {
    const t = useTranslations('main.contract_detail_page');
    const contractId = useSelector((state) => state.contractId);
    const [contractNumber, setContractNumber] = useState("");
    const [status, setStatus] = useState("");
    const [contractDeposit, setContractDeposit] = useState("");
    const [annualPremium, setAnnualPremium] = useState("");
    const [GuarantedAmount, setGuarantedAmount] = useState("");
    const [pdfLink, setPdfLink] = useState("");
    //const pdfFile = '/sample.pdf'; // Path to your PDF file

    // const statusColor = [
    //     {status:"Active",  colorText:"text-[#34C759]" , bgColor:"before:bg-[#34C759]" , borderColor:"border-[#34C759]"},
    //     {status:"Pending", colorText:"text-[#EEC23E]", bgColor:"before:bg-[#EEC23E]" , borderColor:"border-[#EEC23E]" },
    //     {status:"Closing with Claim",  colorText:"text-[#F73737]", bgColor:"before:bg-[#F73737]" , borderColor:"border-[#F73737]" }]
    // const listStatusColor = statusColor.filter(color => color.status === status);
    // console.log(listStatusColor[0].borderColor)
    // // console.log(listStatusColor[0].bgColor)
    // // console.log(listStatusColor[0].borderColor)

    const contractInfoList = [
        {
            title: t('granted_amount'),
            detail: `CHF ${GuarantedAmount}`
        },
        {
            title: t('deposit_amount'),
            detail: `CHF ${contractDeposit}`
        },
        {
            title: t('annual_premium'),
            detail: `CHF ${annualPremium}`
        },
        {
            title: t('promo_code'),
            detail: `DISCOUNT 20`
        }
    ]
    useEffect(() => {
        mutation.mutate({ contractId, otp: {} }); // Passing contractId and optional otp when mutating
    }, [contractId]);
    // Mutation hook 
    const mutation = useMutation({
        mutationFn: contractDetail,
        onSuccess: (response) => {
            setContractNumber(response.contract_detail.clientContractNumber);
            setStatus(response.contract_detail.clientContractStage);
            setContractDeposit(response.contract_detail.clientContractDeposit);
            setAnnualPremium(response.contract_detail.clientContractAnnualPremium);
            setGuarantedAmount(response.contract_detail.clientContractGuarantedAmount);
            setPdfLink(response.file);
        },
        onError: (error) => {
        // This function runs if the mutation fails
        // error.response.data.otp !== undefined ? setErrorOtp(error.response.data.otp): setErrorOtp("");
        // console.log( error.response.data.otp);
            
        },
    });

  return (
    <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white xs:px-2'>
        {
            
        }
        <BackArrowBtn link="../contracts" title={t('contract_detail')} />
        <div className="flex xxl:flex-wrap">
            <div className="w-1/2 pr-6 xxl:w-full xxl:mb-6 xxl:pr-0">
                <div className="flex justify-between pt-14 mb-[76px] xxl:mb-5">
                    <div className="flex items-center gap-6 xs:gap-2">
                    {/* <PdfViewer fileUrl={pdfFile} /> */}
                        <Image
                            src="/images/icons/contract-detail-img.png"
                            alt=""
                            className="xs:w-10 xs:h-10"
                            width={60}
                            height={60}
                         />
                         <div>
                            <h2 className="text-h2 mb-2 text-content xs:mb-0 xs:text-base">{t('contract_id')}</h2>
                            <h3 className="text-h3 font-normal text-grey-2 mb-2 xs:mb-0">{contractNumber}</h3>
                         </div>
                    </div>
                    {/* <div className={`border ${listStatusColor[0].borderColor} py-0 px-5 h-[25px] rounded-8 xs:px-2`}>
                        <p className={`leading-[25px] ${listStatusColor[0].colorClass} text-[15px] font-medium relative pl-[10px] before:content-[''] before:w-2 before:h-2 before:rounded-full before:block before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 ${listStatusColor[0].bgColor}`}>{status}</p>
                    </div> */}
                    <div className={`py-0 px-5 h-[25px] rounded-8 xs:px-2`}>
                        <p 
                            className={`leading-[25px] text-content text-[15px] font-medium relative pl-[10px] before:content-[''] before:w-2 before:h-2 before:rounded-full before:block before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2`}>
                                {status !== "Closing with Claim" ? status: "Closed"}
                        </p>
                    </div>
                    
                </div>
                <div>
                    {contractInfoList.map((list, index) => {
                        return (
                            <CustomList key={index} title={list.title} info={list.detail} className="text-content" />
                        )
                    })}
                </div>
                <div className="bg-[#E5EFFF] py-4 px-[26px] rounded-8">
                    <div className="flex justify-between items-center ">
                        <h3 className="text-h3 font-medium text-content">{t('firstcoin')}</h3>
                        <h3 className="text-h3 font-medium text-content">90</h3>
                    </div>
                    <div className="flex items-center mt-7 gap-2">
                        <Image  
                            src="/images/icons/person.png"
                            alt=""
                            height={17.5}
                            width={15}
                        />
                        <h4 className="text-h4 font-medium text-grey-2">{t('sponsored_person')}: <span className="text-content">John Duo</span></h4>
                    </div>
                </div>
            </div>
            <div className="w-1/2 pl-6 xxl:w-full xxl:pl-0">
                <DocumentView link={pdfLink} />
            </div>
        </div>
    </div>
  )
}

export default ContractDetail 