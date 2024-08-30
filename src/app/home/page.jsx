import CardHeader from "../customComponents/CardHeader"
import Image from "next/image"
import BillListItem from "../customComponents/billListItem"
import DepositListItem from "../customComponents/depositListItem";
import MessageListItem from "../customComponents/messageListItem";
import CustomBanner from "../customComponents/customBanner";
import FirstCoinBanner from "../customComponents/firstCoinBanner";


function Home() {
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
    <div className="flex gap-6 pb-10">
      <div className="basis-3/5">
        <div className="bg-secondary p-5 mt-5 rounded-10 shadow-c1">
          <CardHeader textColor="white" link="#" title="My Contracts" />
          <div className="flex lgs:gap-[6px]">
              <div className="basis-1/2">
                <div className="bg-white rounded-6 p-5">
                  <div className="flex justify-between mb-4 lgs:mb-0">
                    <div>
                      <h3 className="text-h3 lgs:text-xl lgs:leading-6">Current contracts</h3>
                      <p className="text-p lgs:text-sm lgs:leading-[17px] text-grey-2">Keep contracts in check</p>
                    </div>
                    <p className="text-4xl text-content lgs:text-7xl">12</p>
                  </div>
                  <div className="flex justify-start items-start gap-2">
                      <Image 
                        src="/images/icons/location-dot.png" 
                        alt="" 
                        width={18} 
                        height={24}
                        className="h-[26px]"
                      />
                      <div>
                        <h3 className="text-[13px] leading-[13px] text-heading lgs:text-[15px] lgs:leading-[15px] lgs:font-medium">36 Ranchview Richardson</h3>
                        <p className="text-[10px] leading-[10px] text-grey-1 lgs:text-xs lgs:font-normal">Switzerland</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="bg-bgc-2 rounded-6 p-5 ms-[1px]">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-h3 lgs:text-xl lgs:leading-6">Granted amount</h3>
                      <p className="text-p mb-[10px] lgs:text-sm lgs:leading-[17px] lgs:mb-[24px] text-grey-2">Track your granted amount</p>
                    </div>
                    <div>
                    <p 
                      className="text-p font-medium text-heading relative pl-3 before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#F73737] before:block before:absolute before:top-2/4 before:left-0 before:translate-y-[-50%] lgs:text-sm lgs:font-semibold lgs:leading-[17px]">
                      April 8, 2024
                    </p>

                    </div>
                  </div>
                  <div className="text-[32px] leading-[38px] font-medium">
                      <span className="text-grey-2">CHF</span>
                      <span className="text-content">1,750.00</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <CustomBanner 
          heading="Firstees" 
          text="Share your experiences, tips, or ask questions with the Firstcaution community."
          link="/firstees"
          image="/images/firstees-banner.png"  
          bg="bg-[#E1F0FF]"
        />
        <CustomBanner 
          heading="Firstmoove" 
          text="All my administrative centralised task simplified"
          link="/firstmoove"
          image="/images/firstmoove-banner.png"  
          bg="bg-[#DDF9FF]"
        />
        <FirstCoinBanner />
      </div>
      <div className="basis-2/5">
        <div className="bg-white p-5 mt-5 rounded-10 border border-[#E6EFF5]">
          <CardHeader textColor="" link="#" title="My Bills" />
          <div>
            <div className="mb-2">
              <BillListItem icon="/images/icons/open-bill.png" billType="Open Bills" billCount="10" />
            </div>
            <div>
              <BillListItem icon="/images/icons/paid-bill.png" billType="Paid bills" billCount="13" />
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