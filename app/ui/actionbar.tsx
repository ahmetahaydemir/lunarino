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
            <div className='w-full gap-4 flex flex-row items-center justify-center fixed bottom-[72px]'>

                <Link href={'/personal'} className='w-32 h-12 rounded-t-xl bg-blue-600/75 text-white font-semibold flex gap-2 items-center justify-center'>
                    <LuView className=" h-6 w-6 " />
                    <p>View</p>
                </Link>
                <div className="h-12 pb-2 flex flex-col justify-center items-center animate-pulse">
                    <LuListFilter className="w-8 h-8 stroke-white" ></LuListFilter >
                </div>
                <Link href={'/global'} className='w-32 h-12 rounded-t-xl bg-blue-600/75 text-white font-semibold flex gap-2 items-center justify-center'>
                    <p>Thoughts</p>
                    <LuView className=" h-6 w-6 " />
                </Link>

            </div>
        )
    } else if (pathname === "/personal") {
        return (
            <div className='w-full gap-4 flex flex-row items-center justify-center fixed bottom-[72px]'>

                <Link href={'/global'} className='w-32 h-12 rounded-t-xl bg-teal-600/75 text-white font-semibold flex gap-2 items-center justify-center'>
                    <LuX className=" h-6 w-6 " />
                    <p>Discard</p>
                </Link>
                <div className="h-12 pb-2 flex flex-col justify-center items-center animate-pulse">
                    <LuUnfoldVertical className="w-8 h-8 stroke-white" />
                </div>
                <Link href={'/personal'} className='w-32 h-12 rounded-t-xl bg-teal-600/75 text-white font-semibold flex gap-2 items-center justify-center'>
                    <p>Confirm</p>
                    <LuCheck className=" h-6 w-6 " />
                </Link>

            </div>
        )
    }
}