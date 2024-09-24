import BackArrowBtn from "./BackArrowBtn"
import CustomListWidthIcon from "./CustomListWidthIcon"

function DepositDetail() {
    const myDepositList = [
        {
          icon: "/images/icons/granted.png",
          title: "Granted Amount",
          amount: "CHF 450.00"
        },
        {
          icon: "/images/icons/flexible.png",
          title: "Flexible Deposit",
          amount: "CHF 460.00"
        },
        {
          icon: "/images/icons/annual.png",
          title: "Annual Premium",
          amount: "CHF 450.00"
        },
        {
          icon: "/images/icons/promo.png",
          title: "Promo Code",
          amount: "DISCOUNT 20"
        }
      ];
  return (
    <div className="pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white">
        <BackArrowBtn link="/home" title="Deposit Detail"/>
        <div className="flex mt-11">
            <div className="w-2/4">
                {myDepositList.map((listItem, index) => {
                    return <CustomListWidthIcon key={index} icon={listItem.icon} title={listItem.title} amount={listItem.amount} />
                })}
            </div>
            <div className="w-2/4 self-end text-end">
                <a href="/adjustDeposit" className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto leading-4">
                    Adjust
                </a>
            </div>
        </div>
    </div>
  )
}

export default DepositDetail