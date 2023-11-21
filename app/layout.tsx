import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans } from "geist/font/sans";
import './globals.css'
import Navbar from './ui/navbar';
import AuthProvider from './context/AuthProvider';
import Topbar from './ui/topbar';

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
        <AuthProvider>
          <div id='bg-container' className='bg-container'>
            <div className='w-screen h-screen bg active img-0' />
            <div className='w-screen h-screen bg img-1' />
            <div className='w-screen h-screen bg img-2' />
            <div className='w-screen h-screen bg img-3' />
            <div className='w-screen h-screen bg img-4' />
          </div>
          <div className='w-screen h-screen bg-overlay' />
          <Topbar></Topbar>
          <div className='w-screen lg:w-256 h-screen origin-center'>
            {children}
          </div>
          <Navbar></Navbar>
        </AuthProvider>
      </body>
    </html>
  )
}
