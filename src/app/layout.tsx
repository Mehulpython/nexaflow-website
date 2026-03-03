import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexaFlow AI - AI Solutions for Small Businesses',
  description: 'Transform your business with AI-powered tools: Excel automation, data analysis, OpenClaw AI assistants, and modern websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
