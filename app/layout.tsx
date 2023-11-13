import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans } from "geist/font/sans";
import './globals.css'
import Navbar from './ui/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lunarino | Opinionated Ranking Board',
  description: 'Lunarino allows users to create rankings based on actual rankings rather than arbitrary scores. At the end of the day, one is better than the other.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased flex justify-center`}>
        <div className='w-screen lg:w-256 h-screen origin-center'>
          <Navbar></Navbar>
          <hr className='border-dashed border-indigo-100' />
          <div className='h-fit w-full'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
