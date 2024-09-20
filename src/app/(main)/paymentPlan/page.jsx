import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BackArrowBtn from "../../customComponents/BackArrowBtn";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import SimpleListBlock from "../../customComponents/simpleListBlock";
import CustomList from "../../customComponents/CustomList";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

  
function PaymentPlan() {
    const tabNames = ["Annual Premium", "Claim Invoice"];
    const paymentCriteria = [
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
    const confirmationList = [
        {
            title: "Monthly Installment",
            info: "CHF 1,140.00" 
        },
        {
            title: "Total Plan Amount",
            info: "CHF 1,140.00" 
        },
    ];
  return (
    <div className="pt-[30px] mb-14">
        <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[30px] px-10 pb-[65px]">
            <BackArrowBtn link="payBill" title="Payment Plan" />
            <div className="mt-14">
                <Tabs defaultValue={tabNames[0]} className="">
                    <TabsList className="w-full justify-start">
                        {tabNames.map((tab, index) => {
                            console.log(tabNames);
                            return (
                                <TabsTrigger 
                                    key={`tab${index}`} 
                                    value={tab} 
                                    className= "" >
                                    {tab}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                    <TabsContent key={tabNames[0]} value={tabNames[0]}>
                        <div>
                            <form action="">
                                <div className="flex">
                                    <div className="w-1/3 pr-3">
                                        <div>
                                            <label className="block mb-[11px]">
                                                Duration:
                                            </label>
                                            <Select className="py-4">
                                                <SelectTrigger className="w-full bg-bgc-3">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem>Select One</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <SimpleListBlock list={paymentCriteria} icon="/images/icons/calendar.png" title="Payment Plan Criteria" />
                                        <div className="mt-6">
                                            <label className="block mb-[11px]">Reason:</label>
                                            <Textarea className="bg-[#F9F9F9]" />
                                        </div>
                                    </div>
                                    <div className="w-2/3 pl-3">
                                        <div className="flex flex-col justify-between h-full">
                                            <div className="max-w-[480px]">
                                                <label className="block mb-[11px]">
                                                    Start Date:
                                                </label>
                                                <Select className="">
                                                    <SelectTrigger className="w-full bg-bgc-3">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem>Last day of current month</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <Dialog className="rounded-6">
                                                    <DialogTrigger className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 ml-auto block leading-4 mt-12">            
                                                            Submit
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle className="text-start text-5 leading-[30px] font-medium">Confirmation</DialogTitle>
                                                        </DialogHeader>
                                                        <div className="text-center pt-[50px] px-6">
                                                            <Image 
                                                                src="/images/confirmation.png"
                                                                width={134}
                                                                height={134}
                                                                alt=""
                                                                className="mx-auto mb-[58px]"
                                                            />
                                                            <div>
                                                                { confirmationList.map((lst, index) => {
                                                                    return(
                                                                        <CustomList key={index} title={lst.title} info={lst.info} className="bg-transparent py-3" />
                                                                    )
                                                                })}
                                                            </div>
                                                            <a 
                                                                href="#" 
                                                                className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 mb-4 mt-12"
                                                            >
                                                                Confirm
                                                            </a>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabsContent>
                    <TabsContent key={tabNames[1]} value={tabNames[1]}>

                    </TabsContent>
                </Tabs>
            </div>
        </div>
  </div>
  )
}

export default PaymentPlan