import SimpleListBlock from "../../customComponents/simpleListBlock";
import BackArrowBtn from "../../customComponents/BackArrowBtn";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function paymentTerm() {
    const paymentTerm = [
        {
            title: "Administrative Fees",
            info: "CHF 60"
        },
        {
            title: "Fee per Installment",
            info: "CHF 5"
        },
        {
            title: "Interest Rate",
            info: "0%"
        }
    ];
  return (
    <div className="pt-[30px] mb-14">
        <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[30px] px-10 pb-[65px]">
            <BackArrowBtn link="payBill" title="Payment Term" />
            <div className="flex mt-14">
                <div className="w-1/3 pr-3">
                    <div>
                        <label className="text-[18px] font-normal mb-[11px] block text-content">Current Date:</label>
                        <div className="border border-[#DFEAF2] bg-bgc-3 rounded-8 mb-[10px]">
                            <input 
                                type="date"
                                className="leading-[50px] block w-full py-0 px-5 text-[15px] text-[#909090] bg-transparent"
                            />
                        </div>
                    </div>
                    <SimpleListBlock list={paymentTerm} icon="/images/icons/note-icon.png" title="Important Note" />
                </div>
                <div className="w-2/3 pl-3">
                    <div className="flex flex-col justify-between h-full">
                        <div className="w-[480px]">
                            <label className="text-[18px] font-normal mb-[11px] block text-content">New Date:</label>
                            <div className="border border-[#DFEAF2] bg-bgc-3 rounded-8 mb-[10px]">
                                <input 
                                    type="date"
                                    className="leading-[50px] block w-full py-0 px-5 text-[15px] text-[#909090] bg-transparent"
                                />
                            </div>
                        </div>
                        <div>
                            <Dialog className="rounded-6">
                                <DialogTrigger className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 ml-auto block leading-4 mt-12">            
                                        Submit
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="text-start text-5 leading-[30px] font-medium text-content">Success </DialogTitle>
                                    </DialogHeader>
                                    <div className="text-center pt-[50px]">
                                        <Image 
                                            src="/images/confirmation.png"
                                            width={134}
                                            height={134}
                                            alt=""
                                            className="mx-auto mb-[58px]"
                                        />
                                        <h3 className="text-h3 font-medium text-[#8B8D97] mb-[30px]">Your request for payment term is successfully submitted</h3>
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

export default paymentTerm