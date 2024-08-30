"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

function Bills() {
  const tabNames = ["Open Bills", "Paid Bills"];
  const openBillsData = [
    {
        category: "Annual Premium",
        icon: "/images/icons/bill-1.png",
        date: "April 8,2024",
        amount: "CHF 540.00",
        status: "Paid"
    },
    {
      category: "Claim",
      icon: "/images/icons/bill-2.png",
      date: "April 8,2024",
      amount: "CHF 540.00",
      status: "Paid"
    },
  ]
  const paidBillsData = [
      {
          name: "John Duo",
          date: "April 8,2024",
          paidTo: "PG&E",
          paymentMethod: "E-Bill",
          status: "Paid",
          link: "billDetail"
      },
      {
        name: "Jerome Bell",
        date: "April 8,2024",
        paidTo: "PG&E",
        paymentMethod: "E-Bill",
        status: "Paid",
        link: "billDetail"
      },
      {
        name: "Robert Fox",
        date: "April 8,2024",
        paidTo: "PG&E",
        paymentMethod: "E-Bill",
        status: "Paid",
        link: "billDetail"
      },
      {
        name: "Floyd Miles",
        date: "April 8,2024",
        paidTo: "PG&E",
        paymentMethod: "E-Bill",
        status: "Paid",
        link: "billDetail"
      },
      {
        name: "Devon Lane",
        date: "April 8,2024",
        paidTo: "PG&E",
        paymentMethod: "E-Bill",
        status: "Paid",
        link: "billDetail"
      },
      {
        name: "Jane Cooper",
        date: "April 8,2024",
        paidTo: "PG&E",
        paymentMethod: "E-Bill",
        status: "Paid",
        link: "billDetail"
      }
  ];
  return (
    <div className="pt-[30px] mb-14">
      <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[37px] pr-[21px] pb-[50px] pl-[21px] relative">
          <Tabs defaultValue={tabNames[0]} className="">
              <TabsList className="border-b border-[#E6EFF5] w-full justify-start">
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
              {
                  openBillsData.map((obd, index) => {
                    return (
                      <div className="flex justify-between items-center gap-[5px] py-5 px-8 bg-bgc-3 rounded-6 mb-5" key={index}>
                          <div className="flex-[1_1_20%] flex items-center gap-3">
                              <Image
                                src={obd.icon}
                                alt=""
                                className=""
                                width={60}
                                height={60}
                              />
                              <h4 className="text-base leading-[19px] font-semibold">{obd.category}</h4>
                          </div>
                          <div className="flex-[0_0_20%]">
                              <p className="text-base leading-[19px] font-medium text-content mb-2">Issue Date:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-grey-2">{obd.date}</p>
                          </div>
                          <div className="flex-[0_0_20%]">
                              <p className="text-base leading-[19px] font-medium text-content mb-2">Amount:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-[#868686]">{obd.amount}</p>
                          </div>
                          <div className="flex-[0_0_20%]">
                              <p className="text-base leading-[19px] font-medium text-content mb-2">Status:</p>
                              <p className="text-[15px] leading-[18px] font-medium relative pl-[10px] after:content[''] after:w-[5px] after:h-[5px] after:block after:rounded-full after:absolute after:top-1/2 after:left-0 after:-translate-y-2/4 after:bg-[#34C759] text-[#34C759]">
                                {obd.status}
                              </p>
                          </div>
                          <Link 
                              href="#"
                              className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0"
                          >
                              Pay Bill
                          </Link>
                      </div>
                    )
                  })
                }
                <div>
                  <p className="mt-20 text-base font-medium text-content leading-[19px] text-center flex justify-center items-center before:content-[''] before:block before:h-[1px] before:bg-[#E6EFF5] before:relative before:left-[-10px] after:content-[''] after:block after:h-[1px] after:bg-[#E6EFF5] after:relative after:right-[-10px] w-calc-line">or</p>
                  <div className="max-w-[435px] m-auto text-center">
                    <Image
                      src="/images/question.png"
                      alt=""
                      className="mx-auto mt-12 mb-[26px]"
                      width={134}
                      height={134}
                    />
                    <h3 className="text-[18px] leading-[22px] font-semibold text-content mb-11">Do you want to request monthly payment of Annual Premium?</h3>
                    <Link 
                        href="#"
                        className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mt-12"
                    >
                        Request Monthly Payment
                    </Link>
                  </div>
                </div>
              </TabsContent>
              <TabsContent key={tabNames[1]} value={tabNames[1]}>
                {
                  paidBillsData.map((d, index) => {
                    return (
                      <div className="flex justify-between items-center gap-[5px] py-5 px-8 border-b border-[#E6EFF5] bg-bgc-3 last:border-b-0" key={index}>
                          <div className="block flex-[0_0_20%]">
                              <h4 className="text-base leading-[19px] font-medium text-content mb-2">{d.name}</h4>
                              <h4 className="text-[15px] leading-[18px] font-normal text-[#868686]">{d.date}</h4>
                          </div>
                          <div className="flex-[0_0_20%]">
                              <p className="text-base leading-[19px] font-medium text-content mb-2">Paid To:</p>
                              <p className="text-[15px] leading-[18px] font-normal text-grey-2">{d.paidTo}</p>
                          </div>
                          <div className="flex-[0_0_20%]">
                              <p className="text-base leading-[19px] font-medium text-content mb-2">Payment Method</p>
                              <p className="text-[15px] leading-[18px] font-normal text-[#868686]">{d.paymentMethod}</p>
                          </div>
                          <div className="flex-[0_0_20%]">
                                  <p className="text-base leading-[19px] font-medium text-content mb-2">Status:</p>
                                  <p className="w-[57px] text-white bg-[#34C759] text-center text-xs font-medium rounded-8">
                                    <span><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="pl-1">{d.status}</span>
                                  </p>
                          </div>
                          <Link 
                              href={d.link}
                              className="block border border-[#919191] text-[#919191] py-0 px-[30px] leading-[35px] rounded-sm hover:border-[#3876DA] hover:text-[#3876DA] transition-all"
                          >
                              View Details
                          </Link>
                      </div>
                    )
                  })
                }
              </TabsContent>
          </Tabs>
          <div className="flex items-center gap-3 absolute top-10 right-[51px]">
            <Image
              src="/images/icons/ph_timer.png"
              alt=""
              className=""
              width={20}
              height={20}
            />
            <h3 className="text-h3 font-normal text-grey-2">Last Bill: <span className="text-content">CHF 1,170.00</span></h3>
          </div>
      </div>
    </div>
  )
}

export default Bills