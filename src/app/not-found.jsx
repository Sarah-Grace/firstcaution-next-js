import Image from "next/image"
import Link from "next/link"

function NotFound() {
  return (
    <div>
    <aside className="w-[250px] h-screen border-r border-[#E6EFF5] fixed z-[1] bg-white pt-24px pr-37px pb-133px pl-37px lg:w-[50px] lg:overflow-hidden lg:p-0 lg:h-auto lg:top-[92px]">
        <Image
            src="/images/logos/logo.png"
            width={167}
            height={52}
            alt=""
            className="xl:hidden mb-[38px]"
        />
    </aside>
    <main>
        <div className="ml-[250px] lg:ml-0 sticky top-0 z-10">
            <div className="h-[102px] w-full bg-white border-b border-[#E6EFF5] flex items-center justify-between px-10 tablet:px-[12px]">
            </div>
        </div>
        <div className="bg-[rgb(163,163,163,0.2)] site-main-section px-10 pt-[30px] ml-[250px] lg:ml-[50px] xs:px-1">
            <div className='fixed top-0 left-0 h-full w-full z-50 overflow-x-hidden overflow-y-hidden shadow-[0_0.5rem_1rem_rgb(0,0,0,0.15)] bg-[rgb(163,163,163,0.2)] backdrop-blur-[3px]'>
                <div className='flex flex-col justify-center max-w-[443px] h-full mx-auto my-4 flex-auto'>
                    <div className='flex flex-col justify-center items-center max-h-full w-full overflow-y-auto bg-white pt-[104px] pb-[96px] px-[34px] rounded-8 xs:px-5'>
                        <Image
                            src="/images/not-found.png"
                            width={182}
                            height={118}
                            alt=""
                            className="mb-6"
                        />
                        <div className="w-[84px] leading-[18px] h-[18px] bg-[#FEF2F2] rounded-sm flex justify-center items-center gap-2 mb-2">
                            <div>
                                <Image
                                    src="/images/icons/warning.png"
                                    width={11}
                                    height={10}
                                    alt=""
                                    className=""
                                /> 
                            </div>
                            <p className="text-p font-semibold text-[#991B1B]">404 Error</p>
                        </div>
                        <h2 className="text-h2 text-[#191D23] text-center mb-5">Page not Found</h2>
                        <h3 className="text-h3 text-[#64748B] text-center font-normal mb-11">Sorry, the page you are looking for doesn’t exist or has been removed. </h3>
                        <Link href="/home" className="rounded-8 bg-secondary text-white px-[60px] border-0 mx-auto block leading-10">Go to homescreen</Link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
  )
}

export default NotFound