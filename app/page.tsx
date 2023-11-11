import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  console.log("Page Route : Home");

  return (
    <main className='flex items-center justify-center' >
      <h1>Lunarino</h1>
    </main>
  )
}