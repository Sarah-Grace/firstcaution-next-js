import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl';

function DocumentView({link}) {
    console.log(link)
    const t = useTranslations('main.bill_detail_page');
    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
      // Set a timer to show the iframe after 5 seconds
      const timer = setTimeout(() => {
        setShowIframe(true);
      }, 5000);
  
      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }, []);
  return (
    <div>
        <div className="bg-bgc-3 px-[30px] py-5">
            <div className="flex items-center justify-between">
                <h3 className="text-h3 font-medium text-grey-2 mb-2">{t('document_preview')}</h3>
                {/* <div className="bg-primary text-xs font-semibold leading-[19px] w-[53px] text-center rounded-8 text-white">100%</div> */}
            </div>
            <div className="mt-9 mb-[19px]">
            { showIframe ? (
                    <iframe
                        src={`https://docs.google.com/gview?url=${link}&embedded=true`}
                        width="600"
                        height="400"
                        title="Embedded Website"
                        className="w-full h-[600px]"
                    ></iframe>) : (
                        <p>Loading Document ...</p>
                    )
            }
            </div> 
        </div>
        <div className="mt-14 flex justify-center items-center gap-3 flex-wrap">
            <a className="rounded-8 bg-secondary text-white py-4 px-[60px] border-0 block leading-4" href={link} download  target="_blank">
                {t('download_pdf')}
            </a>
        </div>
    </div>
  )
}

export default DocumentView