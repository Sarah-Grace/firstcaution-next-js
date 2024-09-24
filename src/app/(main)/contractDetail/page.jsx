import BackArrowBtn from "../../customComponents/BackArrowBtn"
import Image from "next/image";
import CustomList from "../../customComponents/CustomList";
import Link from "next/link";

function ContractDetail() {
    const contractInfoList = [
        {
            title: "Granted Amount",
            detail: "CHF 450.00"
        },
        {
            title: "Deposit Amount",
            detail: "CHF 420.00"
        },
        {
            title: "Annual Premium",
            detail: "CHF 130.00"
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
                            <h2 className="text-h2 mb-2 text-content">Contract ID</h2>
                            <h3 className="text-h3 font-normal text-grey-2 mb-2">665789</h3>
                         </div>
                    </div>
                    <div className="border border-[#34C759] py-0 px-5 h-[25px] rounded-8">
                        <p className="leading-[25px] text-[#34C759] text-[15px] font-medium relative pl-[10px] before:content-[''] before:w-2 before:h-2 before:rounded-full before:block before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-[#34C759]">Active</p>
                    </div>
                </div>
                <div>
                    {contractInfoList.map((list, index) => {
                        return (
                            <CustomList key={index} title={list.title} info={list.detail} className="text-content" />
                        )
                    })}
                </div>
                <div className="bg-[#E5EFFF] py-4 px-[26px] rounded-8">
                    <div className="flex justify-between items-center ">
                        <h3 className="text-h3 font-medium text-content">Firstcoin</h3>
                        <h3 className="text-h3 font-medium text-content">90</h3>
                    </div>
                    <div className="flex items-center mt-7 gap-2">
                        <Image  
                            src="/images/icons/person.png"
                            alt=""
                            height={17.5}
                            width={15}
                        />
                        <h4 className="text-h4 font-medium text-grey-2">Sponsored Person: <span className="text-content">John Duo</span></h4>
                    </div>
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
                <div className="mt-14 flex justify-center items-center gap-3">
                    <button href="#"  className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4">
                        Download PDF
                    </button>
                    <button className="rounded-sm bg-white w-[50px] h-[50px] border border-secondary block leading-4">
                        <Image 
                            src="/images/icons/upload.png" 
                            alt="" 
                            height={26} 
                            width={20} 
                            className="mx-auto"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContractDetail 