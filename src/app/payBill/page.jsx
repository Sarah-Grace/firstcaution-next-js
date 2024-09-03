import BackArrowBtn from "../customComponents/BackArrowBtn"
import CustomList from "../customComponents/CustomList"; 
import CustomRadioBtn from "../customComponents/CustomRadioBtn"

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
    <div>
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
            <button href="#" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4 mt-12">
            Need more time to Pay Your Bill?
            </button>
        </div>
    </div>
  )
}

export default PayBill