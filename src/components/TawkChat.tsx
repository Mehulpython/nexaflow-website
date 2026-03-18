'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function TawkChat() {
  useEffect(() => {
    // @ts-expect-error - Tawk_API is defined by Tawk.to script
    window.Tawk_API = window.Tawk_API || {}
    // @ts-expect-error - Tawk_LoadStart is defined by Tawk.to script
    window.Tawk_LoadStart = new Date()
  }, [])

  return (
    <>
      <Script
        id="tawk-to"
        strategy="afterInteractive"
      >
        {`
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69ba0f1fefc5d11c36928b65/1jjvcm4it';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
    </>
  )
}
