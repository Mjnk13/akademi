import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Akademi',
  description: '',
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
