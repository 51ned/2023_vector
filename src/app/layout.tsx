import { Inter } from 'next/font/google'

import type { Metadata } from 'next'

import { GTM } from 'components/gtm'

import 'public/globals.css'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: '',
  description: ''
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html dir='ltr' lang='ru'>
      <body className={inter.className}>
        { children }
        <GTM />
      </body>
    </html>
  )
}
