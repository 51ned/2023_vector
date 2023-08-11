import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'

import { GTM } from 'utils/.'

import 'public/styles/index.css'


const font = Montserrat({ subsets: ['cyrillic'] })


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
      <body className={font.className}>
        { children }
        <GTM />
      </body>
    </html>
  )
}
