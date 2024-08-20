import CardHeader from "../components/CardHeader"
import Image from "next/image"
import BillListItem from "../components/billListItem"

function Home() {
  return (
    <div className="container">
      <div className="flex gap-6">
        <div className="basis-3/5">
          <div className="bg-secondary p-5 mt-5 rounded-10 shadow-c1">
            <CardHeader textColor="white" link="#" title="My Contracts" />
            <div className="flex">
                <div className="basis-1/2">
                  <div className="bg-white rounded-6 p-5">
                    <div className="flex justify-between mb-4">
                      <div>
                        <h3 className="text-h3">Current contracts</h3>
                        <p className="text-p">Keep contracts in check</p>
                      </div>
                      <p className="text-4xl text-content">12</p>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                        <Image src="/images/icons/location-dot.png" alt="" width={18} height={24} />
                        <div>
                          <h3 className="text-[13px] leading-[13px] text-heading">36 Ranchview Richardson</h3>
                          <p className="text-[10px] leading-[10px] text-grey-1">Switzerland</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="bg-bgc-2 rounded-6 p-5 ms-[1px]">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-h3">Current contracts</h3>
                        <p className="text-p mb-[10px]">Keep contracts in check</p>
                      </div>
                      <div>
                      <p className="text-p font-medium text-heading relative pl-3 before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#F73737] before:block before:absolute before:top-2/4 before:left-0 before:translate-y-[-50%]">April 8, 2024</p>

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
        </div>
        <div className="basis-2/5">
          <div className="bg-white p-5 mt-5 rounded-10 border border-[#E6EFF5]">
            <CardHeader textColor="" link="#" title="My Bills" />
            <BillListItem />
          </div>
          <div className="bg-white p-5 mt-5 rounded-10 border border-[#E6EFF5]">
            <CardHeader textColor="" link="#" title="My Deposit" />
          </div>
          <div className="bg-white p-5 mt-5 rounded-10 border border-[#E6EFF5]">
            <CardHeader textColor="" link="#" title="Message" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home