import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl';

function DocumentView({link}) {
    console.log(link)
    const t = useTranslations('main.bill_detail_page');


  return (
    <div>
      <div className="mt-9 mb-[19px]">
        <iframe
            //src={`https://docs.google.com/gview?url=${link}&embedded=true`}
            src={link}
            width="600"
            height="400"
            title="Embedded Website"
            className="w-full h-[600px] md1:h-[400px]"
        ></iframe>
      </div> 
    </div>
  )
}

export default DocumentView