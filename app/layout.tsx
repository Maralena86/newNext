import { Navigation } from '../components/Navigation'
import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'The new app',
  description: 'A project in nextjs to build  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Navigation/>
      {children}
      </body>
    </html>
  )
}
