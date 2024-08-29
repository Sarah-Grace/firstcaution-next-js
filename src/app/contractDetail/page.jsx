import BackArrowBtn from "../customComponents/BackArrowBtn"
import Image from "next/image";
import CustomList from "../customComponents/CustomList";
import Link from "next/link";

function ContractDetail() {
    const contractInfoList = [
        {
            title: "Contract ID",
            detail: "382468"
        },
        {
            title: "Issue Date",
            detail: "April 8,2024"
        },
        {
            title: "End Date",
            detail: "May 18,2025"
        },
        {
            title: "Payment terms",
            detail: "Net 30"
        },
        {
            title: "Contract insurance",
            detail: "Yearly"
        }
    ]
  return (
    <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white'>
        <BackArrowBtn link="contracts" title="Contract Detail" />
        <div className="flex">
            <div className="w-2/4 pr-6">
                <div className="flex justify-between pt-14 mb-[76px]">
                    <div className="flex items-center gap-6">
                        <Image
                            src="/images/icons/contract-detail-img.png"
                            alt=""
                            className=""
                            width={60}
                            height={60}
                         />
                         <div>
                            <h2 className="text-h2 mb-2">John Duo</h2>
                            <h3 className="text-h3 font-normal text-grey-2 mb-2">775 Rolling Green Rd.</h3>
                         </div>
                    </div>
                    <div className="border border-[#34C759] py-0 px-5 h-[25px] rounded-8">
                        <p className="leading-[25px] text-[#34C759] text-[15px] font-medium relative pl-[10px] before:content-[''] before:w-2 before:h-2 before:rounded-full before:block before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-[#34C759]">Active</p>
                    </div>
                </div>
                <div>
                    {contractInfoList.map((list, index) => {
                        return (
                            <CustomList key={index} title={list.title} info={list.detail} />
                        )
                    })}
                </div>
            </div>
            <div className="w-2/4 pl-6">
                <div className="bg-bgc-3 px-[30px] py-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-h3 font-medium text-grey-2 mb-2">Document Preview</h3>
                        <div className="bg-primary text-xs font-semibold leading-[19px] w-[53px] text-center rounded-8 text-white">100%</div>
                    </div>
                    <div className="mt-9 mb-[19px]">
                        <Link href="#">
                            <Image
                                src="/images/document-preview.png"
                                alt=""
                                className="mx-auto mb-[30px]"
                                width={415}
                                height={483}
                            />
                        </Link>
                    </div>
                    <div className="text-center">
                        <button className="px-2">
                            <Image
                                src="/images/icons/zoom-in.svg"
                                alt=""
                                className=""
                                width={24}
                                height={24}
                            />
                        </button>
                        <button className="px-2">
                            <Image
                                src="/images/icons/zoom-out.svg"
                                alt=""
                                className=""
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
                <div className="mt-14">
                    <button href="#"  className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 mx-auto block leading-4">
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContractDetail