import './globals.css'
import './normalize.css'
import type { Metadata } from 'next'
import { Nunito_Sans as NunitoSansFont } from 'next/font/google'
import type { NextFont } from 'next/dist/compiled/@next/font'
import React from 'react'
import { Toaster } from 'sonner'
import UserContextProvider from '@/app/userContext'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const NunitoSans:NextFont = NunitoSansFont({ weight: ['200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FCV HelpDesk',
  description: 'Fundacion cardiovascular de colombia helpdesk'
}

export default function RootLayout ({ children }: {children: React.ReactNode}) {
  return (
    <html lang='es'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' href='favicon.ico' type='image/x-icon' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Fundacion cardiovascular de colombia helpdesk' />
        <title>FCV HelpDesk</title>
      </head>
      <Toaster richColors />
      <SkeletonTheme baseColor='#e2e2e2'>
        <UserContextProvider>
          <body className={NunitoSans.className}>{children}</body>
        </UserContextProvider>
      </SkeletonTheme>
    </html>
  )
}
