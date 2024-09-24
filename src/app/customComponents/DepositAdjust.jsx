"use client"
import { useState } from "react"
import BackArrowBtn from "./BackArrowBtn"
import { Slider } from "@/components/ui/slider"
import CustomList from "./CustomList";
import CustomRadioBtn from "./CustomRadioBtn";


function DepositAdjust() {
    const [flexibleAmount, setFlexibleAmount] = useState(450);
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

    ]

    const handleFlexibleValue = (onValueChange) => {
        setFlexibleAmount(onValueChange)
    }
    const handleFlexibleVAlueInput = (e) => {
        setFlexibleAmount(e.target.value)
    }
  return (
    <div className="pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white">
        <BackArrowBtn link="/home" title="Adjust Detail"/>
        <div className="">
            <form>
                <div className="flex mt-14">
                    <div className="w-2/5">
                        <Label forId="granted-amount" text="Granted Amount" />
                        <div className="flex  bg-bgc-3 rounded-8 border border-[#DFEAF2] py-0 px-5 leading-[52px] text-[15px] font-normal text-[#909090] mb-4">
                            <span className="pr-2">CHF</span>
                            <input 
                                type="text"
                                id="granted-amount" 
                                className="bg-transparent w-full focus-visible:outline-none"
                                placeholder=""
                            />
                        </div>
                        <Label forId="flexible-amount" text="Flexible Amount" />
                        <div className="flex  bg-bgc-3 rounded-8 border border-[#DFEAF2] py-0 px-5 leading-[52px] text-[15px] font-normal text-[#909090]">
                            <span className="pr-2">CHF</span>
                            <input 
                                type="text"
                                id="flexible-amount" 
                                className="bg-transparent w-full focus-visible:outline-none"
                                placeholder={flexibleAmount}
                                value={flexibleAmount}
                                readOnly
                            /> 
                        </div>
                        <Slider defaultValue={[flexibleAmount]} max={1000} onValueChange={handleFlexibleValue} />
                        <div className="mt-4">
                            <CustomList title="Annual Premium" info="CHF 360.00" />
                        </div>
                    </div>
                    <div className="w-3/5 pl-5">
                        <div className="max-w-[418px]">
                            <Label forId="start-date" text="Start Date" />
                            <div className="flex  bg-bgc-3 rounded-8 border border-[#DFEAF2] py-0 px-5 leading-[52px] text-[15px] font-normal text-[#909090] w-full mb-4">
                                <input 
                                    type="date"
                                    id="start-date" 
                                    className="bg-transparent w-full focus-visible:outline-none "
                                /> 
                            </div>
                            <Label forId="promo-code" text="Promo Code" />
                            <div className="flex  bg-bgc-3 rounded-8 border border-[#DFEAF2] py-0 px-5 leading-[52px] text-[15px] font-normal text-[#909090] w-full mb-4">
                                <input 
                                    type="text"
                                    id="promo-code" 
                                    className="bg-transparent w-full focus-visible:outline-none"
                                    placeholder="20%"
                                    value="20%"
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
                                    
                <div className="mt-2 text-end">
                    <button className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto leading-4">
                        Calculate New Premium 
                    </button>
                </div>
            </form>
        </div>
        <div className="">
            <div className="w-2/5">
                <Label forId="" text="Transfer Deposit" />
                {
                    radioBtnList.map((listItem, index) => {
                    return <CustomRadioBtn key={listItem.id} id={listItem.id} name="pay-bill" icon={listItem.icon} title={listItem.title} />
                })}
            </div>
        </div>
    </div>
  )
}



function Label({forId, text}) {
    return (
        <label 
        htmlFor={forId}
        className="text-heading texet-base font-normal leading-5 mb-2 block">{text}</label>
    )
}
export default DepositAdjust