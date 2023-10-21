import './globals.css'
import './normalize.css'
import type { Metadata } from 'next'
import { Nunito_Sans as NunitoSansFont } from 'next/font/google'
import type { NextFont } from 'next/dist/compiled/@next/font'
import React from 'react'
import { Toaster } from 'sonner'

const NunitoSans:NextFont = NunitoSansFont({ weight: ['200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FCV HelpDesk',
  description: 'Fundacion cardiovascular de colombia helpdesk'
}

export default function RootLayout ({ children }: {children: React.ReactNode}) {
  return (
    <html lang='es'>
      <head>
        <title>FCV HelpDesk</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' />
      </head>
      <Toaster richColors />
      <body className={NunitoSans.className}>{children}</body>
    </html>
  )
}
