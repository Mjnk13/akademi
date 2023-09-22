import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import LeftMenu from './_components/menu/LeftMenu'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Akademi',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={poppins.className}>
        <div className="body-wrapper">
          <LeftMenu/>
          {children}
        </div>
      </body>
    </html>
  )
}