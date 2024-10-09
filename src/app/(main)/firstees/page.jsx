import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function Firstees() {
  const tabNames = ["Marketplace", "Forum", "DMs"];
  return (
    <div className="pt-[30px] mb-14">
      <div className="bg-white border border-[#E6EFF5] rounded-6 pt-[37px] pr-[21px] pb-[50px] pl-[21px] relative tablet:pr-1 tablet:pl-1">
        <Tabs defaultValue={tabNames[0]} className="">
            <TabsList className="border-b border-[#E6EFF5] w-full justify-start">
                {tabNames.map((tab, index) => {
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
              <div className="w-2/3">
                <form action="">
                  <div className="flex w-full items-center bg-[#F5F5F5] h-10 px-[18px] rounded-3xl">
                    <span className="text-xl text-grey-2">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input 
                      type="text" 
                      className="w-full bg-transparent text-base font-medium leading-6 text-grey-2 pl-2 focus-visible:outline-none" 
                      placeholder="Search"
                    />
                    <button className=" border-l-[1px] border-[#BCBCBC] pl-3">
                      <Image
                        src="/images/icons/filter-icon.png"
                        width={16}
                        height={18}
                        alt=""
                        className="w-[16px] h-[18px]"
                      />
                    </button>
                  </div>
                </form>
                <div>
                  <h3 className="text-xl leading-8 font-medium mb-4 mt-[30px] text-heading">Browse categories</h3>
                  <div className="flex justify-start gap-8">
                    <button className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                      <Image
                        src="/images/kitchen.png"
                        height={80}
                        width={80}
                        alt=""
                        className="rounded-full h-[80px] w-[80px]"
                      />
                      <p className="text-[14px] leading-4 font-medium text-heading text-center">kitchen</p>
                    </button>
                    <button className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                      <Image
                        src="/images/lounge.png"
                        height={80}
                        width={80}
                        alt=""
                        className="rounded-full h-[80px] w-[80px]"
                      />
                      <p className="text-[14px] leading-4 font-medium text-heading text-center">Lounge</p>
                    </button>
                    <button className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                      <Image
                        src="/images/bedroom.png"
                        height={80}
                        width={80}
                        alt=""
                        className="rounded-full h-[80px] w-[80px]"
                      />
                      <p className="text-[14px] leading-4 font-medium text-heading text-center">Bedroom</p>
                    </button>
                    <button className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                      <Image
                        src="/images/bathroom.png"
                        height={80}
                        width={80}
                        alt=""
                        className="rounded-full h-[80px] w-[80px]"
                      />
                      <p className="text-[14px] leading-4 font-medium text-heading text-center">Bathrooms</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="w-1/4">
                  <div>
                   
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent key={tabNames[1]} value={tabNames[1]}>
              Forum
            </TabsContent>
            <TabsContent key={tabNames[2]} value={tabNames[2]}>
              DMs
            </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Firstees