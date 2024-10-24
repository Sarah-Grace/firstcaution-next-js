"use client"

import BackArrowBtn from "@/app/customComponents/BackArrowBtn";
import Image from "next/image";
import CustomList from "@/app/customComponents/CustomList";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { useTranslations } from 'next-intl';
import DocumentView from "@/app/customComponents/DocumentView";
import Preloader from "@/app/customComponents/Preloader";
// import PdfViewer from "@/app/customComponents/PdfViewer"

const contractDetail = async ({ contractId, otp }) => {
    console.log(contractId)
    
    const response = await axiosInstance.get(`/api/client/contract-detail/${contractId}/`, otp);
    //console.log(response);
    return response.data;
};
const contractFile =  async (queryParams) => {
    console.log(queryParams.contract_id)
    
    // const response = await axiosInstance.get(`/api/contract/file/?contract_id=${queryParams.contract_id}`, {responseType: 'blob'});
    const response = await axiosInstance.get(`/api/contract/file/?contract_id=a03FS0000050FvTYAU`, {responseType: 'blob'});
    //console.log(response);
    return response.data;
};

function ContractDetail() {
    const [loading, setLoading] = useState(true);
    const t = useTranslations('main.contract_detail_page');
    const contractId = useSelector((state) => state.contractId);
    const [contractNumber, setContractNumber] = useState("");
    const [status, setStatus] = useState("");
    const [contractDeposit, setContractDeposit] = useState("");
    const [annualPremium, setAnnualPremium] = useState("");
    const [GuarantedAmount, setGuarantedAmount] = useState("");
    const [pdfLink, setPdfLink] = useState("");
    const [pdfError, setpdfError] = useState(false)
    const [blobUrl, setBlobUrl] = useState(null);
    const [stausColor, setStatusColor] = useState({  
        colorText:"" , 
        bgColor:"" ,
        borderColor:""
    })

    // const statusColor = [
    //     {status:"Active",  colorText:"text-[#34C759]" , bgColor:"before:bg-[#34C759]" , borderColor:"border-[#34C759]"},
    //     {status:"Pending", colorText:"text-[#EEC23E]", bgColor:"before:bg-[#EEC23E]" , borderColor:"border-[#EEC23E]" },
    //     {status:"Closing with Claim",  colorText:"text-[#F73737]", bgColor:"before:bg-[#F73737]" , borderColor:"border-[#F73737]" }]
    //     let listStatusColor;

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
        // Trigger the mutation with query parameter contract Id  
        mutationContractFile.mutate({ contract_id: contractId});
        // Set a timeout for 10 seconds (10000 ms) to hide the preloader
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading and show content
        }, 10000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
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
            console.log(response.contract_detail.clientContractStage)
            switch(response.contract_detail.clientContractStage) {
                case "Active":
                    setStatusColor({
                        colorText:"text-[#34C759]" , 
                        bgColor:"before:bg-[#34C759]" , 
                        borderColor:"border-[#34C759]"
                    })
                    break;
                case "Pending": 
                    setStatusColor({ 
                        colorText:"text-[#EEC23E]", 
                        bgColor:"before:bg-[#EEC23E]" , 
                        borderColor:"border-[#EEC23E]" 
                    })
                    break;
                case "Closing with Claim":
                    setStatusColor({
                        colorText:"text-[#F73737]", 
                        bgColor:"before:bg-[#F73737]" , 
                        borderColor:"border-[#F73737]" 
                    })
                    break;
            }
            setPdfLink(response.file);

        },
        onError: (error) => {
        // This function runs if the mutation fails
        // error.response.data.otp !== undefined ? setErrorOtp(error.response.data.otp): setErrorOtp("");
        // console.log( error.response.data.otp);
            
        },
    });
      // Set up useMutation hook for contract file 
    // const mutationContractFile = useMutation((queryParams) => contractFile(queryParams));
    const mutationContractFile = useMutation({
        mutationFn: contractFile,
        onSuccess: (response) => {
            const url = URL.createObjectURL(response);
            setBlobUrl(url);
            console.log(response)
            setpdfError(false)
        },
        onError: (error) => {
            console.log(error.response.statusText);
            error.response.statusText === "Not Found" && setpdfError(true)
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
                    <div className={`border ${stausColor.borderColor} py-0 px-5 h-[25px] rounded-8 xs:px-2`}>
                        <p className={`leading-[25px] ${stausColor.colorText} text-[15px] font-medium relative pl-[10px] before:content-[''] before:w-2 before:h-2 before:rounded-full before:block before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 ${stausColor.bgColor} text-content`} >{status !== "Closing with Claim" ? status: "Closed"}</p>
                    </div>
                    {/* <div className={`py-0 px-5 h-[25px] rounded-8 xs:px-2`}>
                        <p 
                            className={`leading-[25px] text-content text-[15px] font-medium relative pl-[10px] before:content-[''] before:w-2 before:h-2 before:rounded-full before:block before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 border  ${stausColor.bgColor} ${stausColor.bgColor} `}>
                                {status !== "Closing with Claim" ? status: "Closed"}
                        </p>
                    </div> */}
                    
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
            {/* {
                pdfError === false ?
                   ( <div className="w-1/2 pl-6 xxl:w-full xxl:pl-0">
                        <DocumentView link={blobUrl} />
                    </div>
                   ) : 
                   (<h2> No PDF Found </h2>)
            } */}
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
                        pdfError === false ? (
                            
                                <DocumentView link={blobUrl} />
                            
                        ) : (
                            <h2 className="text-content">No PDF Found</h2>
                        )
                    )}
                </div>
                {!loading &&
                (
                    <div className="mt-14 flex justify-center items-center gap-3 flex-wrap">
                        <a className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4" href={blobUrl} download  target="_blank">
                            {t('download_pdf')}
                        </a>
                    </div>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default ContractDetail 