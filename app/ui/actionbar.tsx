'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuActivity, LuCheck, LuX, LuAlignCenterVertical, LuUnfoldVertical, LuLightbulb, LuListFilter, LuView } from 'react-icons/lu';

export default function Actionbar() {
    const pathname = usePathname();
    //
    if (pathname === "/") {
        return (
            <div className='w-full gap-4 flex flex-row items-center justify-center fixed bottom-[72px]'>

                <Link href={'/category'} className='w-32 h-12 rounded-t-xl bg-blue-600/75 text-white font-semibold flex gap-2 items-center justify-center'>
                    <LuAlignCenterVertical className=" h-6 w-6 " />
                    <p>Start</p>
                </Link>

                <Link href={'/about'} className='w-32 h-12 rounded-t-xl bg-blue-600/75 text-white font-semibold flex gap-2 items-center justify-center'>
                    <p>About</p>
                    <LuLightbulb className=" h-6 w-6 " />
                </Link>

            </div>
        )
    } else if (pathname === "/global") {
        return (
            <div className='w-full gap-4 flex flex-row items-center justify-between fixed bottom-[88px] pointer-events-none'>

                <Link href={'/personal'} className='w-14 h-14 rounded-r-xl border-b-4 border-dashed border-white/5 bg-blue-600/75 text-white font-semibold flex gap-2 items-center justify-center pointer-events-auto'>
                    <LuView className=" h-8 w-8 " />
                </Link>

                <Link href={'/personal'} className='w-44 h-14 rounded-xl mt-6 border-b-4 border-dashed border-white/5 bg-blue-600/75 gap-2 text-white font-semibold flex items-center justify-center pointer-events-auto'>
                    <p className='text-center'>Start Ranking</p>
                    <LuUnfoldVertical className=" h-8 w-8 " />
                </Link>

                <Link href={'/personal'} className='w-14 h-14 rounded-l-xl border-b-4 border-dashed border-white/5 bg-blue-600/75 text-white font-semibold flex items-center justify-center pointer-events-auto'>
                    <LuActivity className=" h-8 w-8 " />
                </Link>

            </div>
        )
    } else if (pathname === "/personal") {
        return (
            <div className='w-full flex flex-row items-center justify-between fixed bottom-[100px] pointer-events-none'>

                <Link href={'/global'} className='w-14 h-14 border-b-4 border-dashed border-white/5 rounded-r-xl bg-teal-600/75 text-white font-semibold flex gap-2 items-center justify-center pointer-events-auto'>
                    <LuX className=" h-8 w-8 " />
                </Link>

                <Link href={'/global'} className='w-14 h-14 border-b-4 border-dashed border-white/5 rounded-l-xl bg-teal-600/75 text-white font-semibold flex gap-2 items-center justify-center pointer-events-auto'>
                    <LuCheck className=" h-8 w-8" />
                </Link>

            </div>
        )
    }
}