import type { Metadata } from 'next'
import './globals.css'
import TawkChat from '@/components/TawkChat'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'NexaFlow AI | AI-Powered Solutions for Small Businesses',
  description: 'Transform your business with AI-powered tools: Excel automation, data analysis, OpenClaw AI assistants, and modern websites. Affordable solutions starting at $300.',
  keywords: 'AI for small business, AI automation, business automation, AI assistant setup, website development, Excel automation, data analysis, small business solutions, NexaFlow AI',
  authors: [{ name: 'NexaFlow AI' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nexaflow360.com',
  },
  openGraph: {
    title: 'NexaFlow AI | AI-Powered Solutions for Small Businesses',
    description: 'Transform your business with AI-powered tools: Excel automation, data analysis, AI assistants, and modern websites. Starting at $300.',
    url: 'https://nexaflow360.com',
    siteName: 'NexaFlow AI',
    images: [
      {
        url: 'https://nexaflow360.com/logo.png',
        width: 512,
        height: 512,
        alt: 'NexaFlow AI Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaFlow AI | AI-Powered Solutions for Small Businesses',
    description: 'Transform your business with AI-powered tools. Starting at $300.',
    images: ['https://nexaflow360.com/logo.png'],
  },
  other: {
    'google-site-verification': 'cQjepuM0cd_wh8urHHr5oM6ukuDg2Gl-pi-h8smArQw',
  },
}

const POSTHOG_KEY = 'phc_R7NJhtbAH170gHQz3v8DxeJL96eLa9ufD71YJ4qcHNz'
const POSTHOG_HOST = 'https://us.i.posthog.com'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-R6GMZ8J72M`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R6GMZ8J72M');
            `,
          }}
        />
        {/* PostHog Analytics - loads SDK then inits */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var s=document.createElement('script');
                s.src='${POSTHOG_HOST}/static/array.js';
                s.crossOrigin='anonymous';
                s.onload=function(){
                  window.posthog.init('${POSTHOG_KEY}', {
                    api_host: '${POSTHOG_HOST}',
                    autocapture: true,
                    capture_pageview: true,
                    capture_pageleave: true
                  });
                };
                document.head.appendChild(s);
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        <TawkChat />
      </body>
    </html>
  )
}
