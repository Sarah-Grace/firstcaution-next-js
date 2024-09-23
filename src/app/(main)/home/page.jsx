import CardHeader from "../../customComponents/CardHeader"
import Image from "next/image"
import BillListItem from "../../customComponents/billListItem"
import DepositListItem from "../../customComponents/depositListItem";
import MessageListItem from "../../customComponents/messageListItem";
import CustomBanner from "../../customComponents/customBanner";
import FirstCoinBanner from "../../customComponents/firstCoinBanner";
import Link from "next/link";

function Home() {

  const myDepositList = [
    {
      icon: "/images/icons/granted-amount.png",
      title: "Granted Amount",
      amount: "CHF 450.00"
    },
    {
      icon: "/images/icons/deposit-amount.png",
      title: "Deposit Amount",
      amount: "CHF 460.00"
    },
    {
      icon: "/images/icons/annual-premium.png",
      title: "Annual Premium",
      amount: "CHF 200.00"
    },
    {
      icon: "/images/icons/firstcoin-icon.png",
      title: "Firstcoin",
      amount: "90"
    }
  ];
  const MessagesList = [
    {
      avatar: "/images/icons/user-1.png",
      name: "Cody Fisher",
      chat: "Lorem ipsum dolor sit amet ...", 
      time: "10:45 PM"
    },
    {
      avatar: "/images/icons/user-2.png",
      name: "Cody Fisher",
      chat: "Lorem ipsum dolor sit amet ...", 
      time: "10:45 PM"
    },
    {
      avatar: "/images/icons/user-3.png",
      name: "Cody Fisher",
      chat: "Lorem ipsum dolor sit amet ...", 
      time: "10:45 PM"
    },
];

console.log(MessagesList)
  return (
    <div className="flex gap-6 pb-10 xxl:flex-wrap">

      <div className="basis-2/5 xxl:basis-full">
        <div className="bg-secondary px-5 py-6 mt-5 rounded-10 shadow-c1 xs:px-1">
          <h2 className={'text-h2 font-medium mb-6 text-white lgs:text-2xl lgs:leading-[29px] mid-xxl:text-2xl mid-xxl:leading-[29px]'} >My Dashboard</h2>
          <div className="">
            <div className="bg-white rounded-6 px-5 py-[15px] xs:px-2">
              <div className="flex justify-between mb-4 lgs:mb-0 mid-xxl:mb-0">
                <div>
                  <h3 className="text-h3 text-content lgs:text-xl lgs:leading-6 mid-xxl:text-xl mid-xxl:leading-6">Current contracts</h3>
                  <p className="text-p lgs:text-sm lgs:leading-[17px] mid-xxl:text-sm mid-xxl:leading-[17px] text-grey-2">Keep contracts in check</p>
                </div>
                <p className="text-5xl font-medium leading-9 text-content lgs:text-7xl mid-xxl:text-7xl">12</p>
              </div>
              <div className="flex justify-between gap-2">
                <div className="flex justify-start items-center gap-2">
                    <Image 
                      src="/images/icons/location-dot.png" 
                      alt="" 
                      width={16} 
                      height={24}
                      className="flex-[0_0_16px] h-6"
                    />
                    <div>
                      <h3 className="text-[13px] leading-[13px] font-medium text-heading lgs:text-[15px] lgs:leading-[15px] lgs:font-medium mid-xxl:text-[15px] mid-xxl:leading-[15px] mid-xxl:font-medium">36 Ranchview Richardson</h3>
                      <p className="text-[10px] leading-[10px] text-grey-1 lgs:text-xs lgs:font-normal mid-xxl:text-xs mid-xxl:font-normal">Switzerland</p>
                    </div>
                </div>
                <Link href="" className="text-h5 text-grey-2 border border-[#CCCCCC] rounded-8 leading-[25px] px-5">
                Show All
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-6 px-5 pt-[15px] pb-[6px] xs:px-2">
              {myDepositList.map((listItem, index) => {
                return <DepositListItem key={index} icon={listItem.icon} title={listItem.title} amount={listItem.amount} />
              })}
            </div>
          </div>
        </div>
        <FirstCoinBanner />
      </div>
      <div className="basis-3/5 xxl:basis-full">
        <div className="bg-white p-5 mt-5 rounded-10 border border-[#E6EFF5]">
          <CardHeader textColor="" link="#" title="My Bills" />
          <div>
            <div className="mb-2">
              <BillListItem icon="/images/icons/open-bill.png" billType="Open Bills" link="/bills/" />
            </div>
            <div>
              <BillListItem icon="/images/icons/paid-bill.png" billType="Paid bills" link="/bills/" />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 mt-5 rounded-10 border border-[#E6EFF5]">
          <CardHeader textColor="" link="#" title="My Deposit" />
          {myDepositList.map((listItem, index) => {
            return <DepositListItem key={index} icon={listItem.icon} title={listItem.title} amount={listItem.amount} />
          })}
        </div>
        <div className="bg-white p-5 mt-5 rounded-10 border border-[#E6EFF5]">
          <CardHeader textColor="" link="#" title="Message" />
          {MessagesList.map((listItem, index) => {
            return <MessageListItem key={index} avatar={listItem.avatar} name={listItem.name} chat={listItem.chat} time={listItem.time} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home