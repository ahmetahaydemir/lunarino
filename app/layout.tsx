import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import './globals.css'
import Navbar from './ui/navbar';
import AuthProvider from './context/AuthProvider';
import Topbar from './ui/topbar';
import { URL } from 'url';
import Actionbar from './ui/actionbar';

export const metadata: Metadata = {
  title: 'Lunarino | Opinionated Ranking Board',
  description: "Lunarino allows users to create rankings based on their actual rankings rather than arbitrary scoring methods. At the end of the day, one is better than the other. Let's explore our preferences together.",
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://lunarino.vercel.app'),
  openGraph: {
    type: "website",
    url: "https://lunarino.vercel.app",
    title: "Lunarino | Opinionated Ranking Board",
    description: "At the end of the day, we prefer one over the other. Let's discover our preferences without arbitrary scoring methods.",
    siteName: "Lunarino",
    images: [{
      url: "/logo/logo-square.png",
    }],
  },
  icons: [{ rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
  { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" }]
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
          <Actionbar></Actionbar>
          <Navbar></Navbar>
        </AuthProvider>
      </body>
    </html>
  )
}
