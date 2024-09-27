import BackArrowBtn from "../../customComponents/BackArrowBtn";
import SimpleListBlock from "../../customComponents/simpleListBlock";
import Image from "next/image";
import CustomRadioBtn from "../../customComponents/CustomRadioBtn";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

function MonthlyPayment() {
    const paymentCriteria = [
        {
            title: "Administrative Fees",
            info: "CHF 60"
        },
        {
            title: "Fee per Installment",
            info: "CHF 5"
        }
    ];
    const radioBtnList = [
        {
            id: "radioBankTransfer",
            icon: "/images/icons/bank.png",
            title: "Bank Transfer"
        },
        {
            id: "radioApplePay",
            icon: "/images/icons/apple-pay.png",
            title: "Apple Pay"
        },
        {
            id: "radioTwintPay",
            icon: "/images/icons/twint.png",
            title: "Twint Pay"
        },
        {
            id: "radioEbill",
            icon: "/images/icons/e-bill.png",
            title: "E-Bill"
        },

    ];
  return (
    <div className="pt-[30px] mb-14">
        <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[30px] px-10 pb-[65px]">
            <BackArrowBtn link="payBill" title="Request Monthly Payment" />
            <div className="flex mt-14">
                <div className="w-1/3 pr-3">
                    <div>
                        <label className="block mb-[11px] text-content">
                        Start Date:
                        </label>
                        <Select className="py-4">
                            <SelectTrigger className="w-full bg-bgc-3 text-[#909090]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem>Last day of current month</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mb-7">
                        <SimpleListBlock list={paymentCriteria} icon="/images/icons/calendar.png" title="Payment Plan Criteria" />
                    </div>

                    <div>
                        <label className="block mb-[11px] text-content">
                            Payment Method:
                        </label>
                        {
                            radioBtnList.map((listItem, index) => {
                            return <CustomRadioBtn key={listItem.id} id={listItem.id} name="pay-bill" icon={listItem.icon} title={listItem.title} />
                        })}
                    </div>
                </div>
                <div className="w-2/3 pl-3">
                    <div className="flex flex-col justify-end h-full">
                        <div>
                            <Dialog className="rounded-6">
                                <DialogTrigger className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 ml-auto block leading-4 mt-12">            
                                        Submit
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="text-start text-5 leading-[30px] font-medium text-content">Confirmation</DialogTitle>
                                    </DialogHeader>
                                    <div className="text-center pt-[50px]">
                                        <Image 
                                            src="/images/confirmation.png"
                                            width={134}
                                            height={134}
                                            alt=""
                                            className="mx-auto mb-[58px]"
                                        />
                                        <h3 className="text-h3 font-medium text-[#8B8D97]">Your request for monthly payment of the Annual Premium bill has been submitted successfully.</h3>
                                        <h3 className="text-h3 font-medium text-[#8B8D97] mb-[30px]">Bills will be generated to replace the Annual Premium open bill.</h3>
                                        <a 
                                            href="#" 
                                            className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 mb-4 mt-12"
                                        >
                                            Okey
                                        </a>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MonthlyPayment