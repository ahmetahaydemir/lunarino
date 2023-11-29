import Image from 'next/image';
import Link from 'next/link';
import { LuAlignCenterVertical, LuLightbulb } from "react-icons/lu";

export default function Home() {
  console.log("Page Route : Home");

  return (
    <main className='flex flex-col gap-4 pt-12 items-center justify-center' >
      <div className='w-full h-64 relative'>
        <Image src={'/logo/logo-bg.png'}
          width={512}
          height={512}
          className='floating-left fixed top-3 -left-8 right-0 m-auto blur-sm'
          alt='Background of Logo'></Image>
        <Image src={'/logo/logo-bg.png'}
          width={512}
          height={512}
          className='floating-right fixed -top-3 left-8 right-0 m-auto blur-sm'
          alt='Background of Logo'></Image>
        <Image src={'/logo/logo-square.png'}
          width={256}
          height={256}
          className='drop-shadow-2xl floating-both absolute top-0 left-0 right-0 bottom-0 m-auto'
          alt='Logo of Lunarino'></Image>
      </div>
      <h1 className='text-blue-200 font-mono font-extrabold text-4xl mt-2'>Lunarino</h1>
      <hr className='border-2 border-white/25 w-16'></hr>
      <h2 className='text-white/75 font-mono font-bold text-xl'>Opinionated Ranking Board</h2>
      <p className='text-white/50 pr-4 pl-4 text-center text-lg'>At the end of the day, we prefer one over the other. Let's discover our preferences without arbitrary scoring methods.</p>

    </main>
  )
}