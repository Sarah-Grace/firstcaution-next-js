import BackArrowBtn from "../customComponents/BackArrowBtn";
import CustomList from "../customComponents/CustomList"; 
import CustomRadioBtn from "../customComponents/CustomRadioBtn";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

function PayBill() {
    const detailInfo = [
        {
            title: "Bill Amount",
            info: "CHF 450.00"
        },
        {
            title: "Due Date",
            info: "April 8,2024"
        }
    ]
    const paymentMethod = [
        {
            id:"radioBankTransfer", 
            icon:"/images/icons/bank.png", 
            title:"Bank Transfer"
        },
        {
            id:"radioApplePay", 
            icon:"/images/icons/apple-pay.png", 
            title:"Apple Pay"
        },
        {
            id:"radioTwintPay", 
            icon:"/images/icons/twint.png", 
            title:"Twint Pay"
        },
        {
            id:"radioEbill", 
            icon:"/images/icons/e-bill.png", 
            title:"E-Bill"
        },
    ]
  return (
    <div className="pt-[30px] mb-14">
        <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white sm:px-2 rounded-6'>
            <BackArrowBtn link="bills" title="Pay Bill" />
            <div className="flex xl:flex-wrap mt-14">
                <div className="w-1/2 pr-6 xl:pr-0 xl:w-full xl:mb-6">
                    <h3 className="text-h3 mb-[22px]">Detail Information:</h3>
                    {detailInfo.map((list, index) => {
                        return (
                            <CustomList key={index} title={list.title} info={list.info} />
                        )
                    })}
                </div>
                <div className="w-1/2 pl-6 xl:pl-0 xl:w-full">
                    <h3 className="text-h3 mb-[22px]">Payment Method</h3>
                    { paymentMethod.map((list, index) => {
                        return (
                            <CustomRadioBtn key={index} id={list.id} icon={list.icon} title={list.title} name="pay-bill" />
                        )
                        })}  
                </div>
            </div>
            <div>
                <p class="mt-20 text-base font-medium text-content leading-[19px] text-center flex justify-center items-center before:content-[''] before:block before:h-[1px] before:bg-[#E6EFF5] before:relative before:left-[-10px] after:content-[''] after:block after:h-[1px] after:bg-[#E6EFF5] after:relative after:right-[-10px] w-calc-line">or</p>
                <Dialog className="rounded-6">
                    <DialogTrigger className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 mt-12">            
                            Need more time to Pay Your Bill?
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-start text-5 leading-[30px] font-medium">Request</DialogTitle>
                        </DialogHeader>
                        <div className="text-center py-[50px] px-6">
                            <Image 
                                src="/images/request-modal-img.png"
                                width={134}
                                height={134}
                                alt=""
                                className="mx-auto mb-[26px]"
                            />
                            <h3 className="text-h3 font-medium text-[#8B8D97] mb-[30px]">Select your option to request</h3>
                            <a href="/paymentPlan" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 mb-4">Payment Plan</a>
                            <p className="text-base font-medium text-content leading-[19px] text-center flex justify-center items-center before:content-[''] before:block before:h-[1px] before:bg-[#E6EFF5] before:relative before:left-[-10px] after:content-[''] after:block after:h-[1px] after:bg-[#E6EFF5] after:relative after:right-[-10px] w-calc-line mb-4">or</p>
                            <a 
                                href="/paymentTerm" 
                                className="rounded-8 text-secondary bg-transparent py-4 px-[65px] border border-secondary mx-auto block leading-4"
                            >
                                Payment Term
                            </a>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>


        </div>
    </div>
  )
}

export default PayBill