import Image from 'next/image';
import Category from './ui/category';
import Link from 'next/link';
import { FaRankingStar } from "react-icons/fa6";
import { LuAlignCenterVertical } from "react-icons/lu";
import { LuLightbulb } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa6";

export default function Home() {
  console.log("Page Route : Home");

  return (
    <main className='flex flex-col gap-4 pt-16 items-center justify-center' >
      <div className='w-full h-64 relative'>
        <Image src={'/logo/logo-bg.png'}
          width={384}
          height={384}
          className='floating-left absolute top-3 -left-8 right-0 bottom-0 m-auto blur-sm'
          alt='Background of Logo'></Image>
        <Image src={'/logo/logo-bg.png'}
          width={384}
          height={384}
          className='floating-right absolute -top-3 left-8 right-0 bottom-0 m-auto blur-sm'
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

      <Link href={'/category'} className='w-48 h-12 rounded-xl mt-1 bg-blue-600/75 text-white font-semibold flex gap-3 items-center justify-center'>
        <LuAlignCenterVertical className=" h-6 w-6 " />
        <p>Get started</p>
      </Link>

      <Link href={'/category'} className='w-36 h-12 rounded-xl bg-blue-600/75 text-white font-semibold flex gap-2 items-center justify-center'>
        <FaRankingStar className=" h-6 w-6 " />
        <p>Ranking</p>
      </Link>

      <Link href={'/category'} className='w-28 h-12 rounded-xl bg-blue-600/75 text-white font-semibold flex gap-1 items-center justify-center'>
        <LuLightbulb className=" h-6 w-6 " />
        <p>About</p>
      </Link>

      <div className='flex flex-wrap justify-center gap-4 pt-8'>

      </div>
    </main>
  )
}