import BackArrowBtn from "../customComponents/BackArrowBtn"
import Image from "next/image";
import CustomList from "../customComponents/CustomList";
import Link from "next/link";

function BillDetail() {
    const BillInfoList = [
        {
            title: "Transaction ID",
            detail: "382468"
        },
        {
            title: "Confirmation No",
            detail: "2BEF168"
        },
        {
            title: "Payment Date",
            detail: "May 18,2025"
        },
        {
            title: "Biller Name",
            detail: "Karl John"
        },
        {
            title: "Amount Paid",
            detail: "CHF 450.00"
        },
        {
            title: "Payment Method",
            detail: "Credit Card"
        },
    ]
  return (
    <div className='pt-[30px] px-10 pb-[65px] mb-14 border border-[#E6EFF5] bg-white'>
        <BackArrowBtn link="bills" title="Bill Detail" />
        <div className="flex">
            <div className="w-2/4 pr-6">
                <div className="mt-12">
                    {BillInfoList.map((list, index) => {
                        return (
                            <CustomList key={index} title={list.title} info={list.detail} />
                        )
                    })}
                </div>
                <div className="flex justify-center items-center bg-[rgb(52,199,89,0.15)] py-5 px-[26px] gap-5 mt-[30px] rounded-8">
                    <Image
                        src="/images/icons/security-off.png"
                        alt=""
                        className=""
                        width={38}
                        height={38}
                    />
                    <h3 className="text-h3 text-content">Please keep in mind that these payments are only for Firstcaution.</h3>
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

export default BillDetail