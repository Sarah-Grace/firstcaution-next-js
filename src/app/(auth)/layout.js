import Image from "next/image";

export default function AuthLayout({children}) {
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
                    {children}
                </div>
            </main>
        </div>
    );
}