import Image from 'next/image'
import CardHeader from './CardHeader'
import { useTranslations } from 'next-intl';

function FirstCoinBannerHome() {
    const t = useTranslations('main.home');
  return (
    <div className=" pl-6 pr-0 py-8 mt-5 rounded-[5px] bg-primary md1:pl-5 md1:pr-5">
        <div className='pr-5 md1:pr-0'>
            <CardHeader textColor="white" link="#" title={t('my_firstcoins')} />
        </div>
        <div className="flex justify-between items-end">
            <div className="flex justify-between flex-col h-full p-0 max-w-[340px]">
                <h2 className='text-5xl font-semibold leading-[44px] text-white mb-[28px] md1:text-3xl'>CHF 150.00</h2>
                <div className="flex items-center gap-[10px]">
                    <div className="w-[30px] h-[30px] bg-[rgba(255,255,255,0.3)] flex justify-center items-center rounded-6">
                        <Image 
                            width={18}
                            height={18}
                            src="/images/icons/leaf-rounded.png"
                            alt=""
                            className=''
                        />
                    </div>
                    <p className='text-sm leading-[17px] text-white font-normal'>{t('next_invoice')}</p>
                </div>
                <div className="flex items-center gap-2 bg-white py-[13px] pl-3 pr-4 rounded-8 mt-[42px] md1:flex-col md1:items-start">
                    <div className='flex items-center gap-2'>
                        <Image 
                            src="/images/icons/firstcoin-icon.png"
                            alt=""
                            width={21}
                            height={21}
                            className="flex-[0_0_21px]"
                        />
                        <h5 className="text-h5 font-normal w-[130px] flex-[0_0_130px] text-content">{t('sponsored.you_get')} <span className="font-medium">{t("sponsored.50_coins")}</span> {t('sponsored.per_sponsored')}</h5>
                    </div>
                    <button className="rounded-8 bg-secondary text-white py-2 px-[33px] border-0 mx-auto block leading-4 ml-[60px] tablet:ml-[10px] md1:w-full md1:ml-0">{t('invite')}</button>
                </div>
            </div>
            <div className="banner-image firstcoin-home-banner md1:hidden">
                <Image 
                    width={201}
                    height={206}
                    src="/images/hand-with-money-1.png"
                    alt=""
                />
            </div>
        </div>
    </div>

  )
}

export default FirstCoinBannerHome