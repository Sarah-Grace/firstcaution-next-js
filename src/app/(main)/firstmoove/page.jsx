"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import DatePicker , { DateObject } from "react-multi-date-picker";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function Firstmoove() {
  const tabNames = ["My Tenant Documents", "Request Debt Enforcement Certificate", "Notify Population Office"];
  const [date, setDate] = useState(null);
  const [notifyFormData, setNotifyFormData] = useState({
    newAddress: "",
});
  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setNotifyFormData((prev) => ({
        ...prev,
        [fieldName]: fieldValue
    }));
}
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
                  {/* <div>
                    <Accordion type="single" collapsible className="flex gap-6">
                      <AccordionItem value="item-1"  className="flex[0_1_283px] w-[283px] bg-bgc-3">
                        <AccordionTrigger>
                          <Image
                            src="/images/icons/id.png"
                            alt=""
                            className=""
                            width={20}
                            height={20}
                          />
                          <span>ID</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          ........................
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="flex[0_1_283px] w-[283px]">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3"  className="flex[0_1_283px] w-[283px]">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div> */}
                <div>
                  <div className="flex items-center gap-6 xs:gap-2">
                    <Image
                        src="/images/icons/tenant-doc.png"
                        alt=""
                        className="xs:w-10 xs:h-10"
                        width={55}
                        height={55}
                      />
                      <div>
                        <h2 className="text-h2 font-medium mb-2 text-content xs:mb-0 xs:text-base">Your documents, all in one place.</h2>
                        <h3 className="text-h3 font-medium text-grey-2 mb-2 xs:mb-0">This area lists all uploaded documents with intuitive features like downloading, sharing, and uploading.</h3>
                      </div>
                  </div>
                  <div>
                    <div className="flex justify-end mt-12 md1:justify-center">
                      <button className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4">
                        <span className="pr-4">
                        <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <span>
                        Upload Document
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent key={tabNames[1]} value={tabNames[1]}>
                <div className="pl-3">
                  <div className="flex items-center gap-6 xs:gap-2">
                    <Image
                        src="/images/icons/tenant-doc.png"
                        alt=""
                        className="xs:w-10 xs:h-10"
                        width={55}
                        height={55}
                      />
                      <div>
                        <h2 className="text-h2 font-medium mb-2 text-content xs:mb-0 xs:text-base">Automate the request for a certificate</h2>
                        <h3 className="text-h3 font-medium text-grey-2 mb-2 xs:mb-0">Submit your request and we’ll handle the rest.</h3>
                      </div>
                  </div>
                  <form>
                    <div className="flex gap-7 mt-16">
                        <div className="w-2/5 xxl:w-1/2 tablet:w-full">
                          <div className="w-full mb-6">
                            <label className="text-base font-normal text-content leading-5 mb-3 block">Your Name</label>
                            <input 
                              className={`leading-[48px] py-0 px-5 pr-[30px] xs:pr-[5px] text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full`}
                              value="Charlene Reed"
                              readOnly
                            />
                          </div>
                          <div className="w-full mb-6">
                            <label className="text-base font-normal text-content leading-5 mb-3 block">Your Address</label>
                            <input 
                              className={`leading-[48px] py-0 px-5 pr-[30px] xs:pr-[5px] text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full`}
                              value="2715 Ash Dr. San Jose, South Dakota 83475"
                              readOnly
                            />
                          </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-12 md1:justify-center">
                        <button className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4">
                        Submit Request
                        </button>
                    </div>
                  </form>
                </div>
              </TabsContent>
              <TabsContent key={tabNames[2]} value={tabNames[2]}>
                <div>
                  <div className="flex items-center gap-6 xs:gap-2">
                    <Image
                        src="/images/icons/contract-detail-img.png"
                        alt=""
                        className="xs:w-10 xs:h-10"
                        width={60}
                        height={60}
                      />
                      <div>
                        <h2 className="text-h2 mb-2 text-content xs:mb-0 xs:text-base">Your documents, all in one place.</h2>
                        <h3 className="text-h3 font-normal text-grey-2 mb-2 xs:mb-0">This area lists all uploaded documents with intuitive features like downloading, sharing, and uploading.</h3>
                      </div>
                  </div>
                  <form>
                    <div className="flex flex-wrap gap-7 mt-16">
                      <div className="w-2/5 xxl:w-1/2 tablet:w-full">
                        <div className="w-full mb-6">
                          <label className="text-base font-normal text-content leading-5 mb-3 block">Current Address</label>
                          <input 
                            className={`leading-[48px] py-0 px-5 pr-[30px] xs:pr-[5px] text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full`}
                            value="2715 Ash Dr. San Jose, South Dakota 83475"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="w-2/5 xxl:w-1/2 tablet:w-full">
                        <div className="w-full mb-6">
                          <label className="text-base font-normal text-content leading-5 mb-3 block">New Address</label>
                          <input 
                            className={`leading-[48px] py-0 px-5 pr-[30px] xs:pr-[5px] text-[15px] font-normal text-[#909090] bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 w-full`}
                            value={notifyFormData.newAddress}
                            onChange={handleInput}
                            name="newAddress"
                          />
                        </div>
                      </div>
                      <div className="w-2/5 xxl:w-1/2 tablet:w-full">
                        <div className="w-full mb-6">
                          <label className="text-base font-normal text-content leading-5 mb-3 block">Date of Move</label>
                          <div className="text-[#909090]  bg-transparent border border-[#DFEAF2] focus-visible:outline-none rounded-8 relative flex w-full">
                            <span className="w-[50px] flex-[0_0_50px] justify-center py-0 flex items-center">
                                <Image
                                    src="/images/icons/calendar-icon.png"
                                    alt=""
                                    className="w-[16px] h-[16px]"
                                    width={16}
                                    height={16}
                                />
                            </span>
                            <DatePicker
                              format="DD.MM.YYYY"
                              value={date}
                              onChange={setDate}
                              className="custom-calendar"
                            >
                            </DatePicker>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-12 md1:justify-center">
                        <button className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4">
                        Send Notification
                        </button>
                    </div>
                  </form>
                </div>

              </TabsContent>
          </Tabs>
      </div>
  </div>
  )
}

export default Firstmoove