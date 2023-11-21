'use client'

import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import Profile from './profile'
import { LuAlignCenterVertical } from 'react-icons/lu';
import { FaRankingStar } from 'react-icons/fa6';
import { BiSolidCategoryAlt } from 'react-icons/bi';

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className='cloud rounded-t-xl w-full absolute -bottom-1 flex h-20 pl-2 pr-2 gap-4 items-center justify-evenly'>
            <Link href={'/'}>
                <FaHome className={`${pathname === '/' ? 'fill-blue-400' : 'fill-blue-100'}` + " h-8 w-8 "} />
            </Link>
            <Link href={'/category'}>
                <BiSolidCategoryAlt className={`${pathname === '/category' ? 'fill-blue-400' : 'fill-blue-100'}` + " h-8 w-8 "} />
            </Link>
            <Link href={'/global'}>
                <FaRankingStar className={`${pathname === '/global' ? 'fill-blue-400' : 'fill-blue-100'}` + " h-8 w-8 "} />
            </Link>
            <Link href={'/personal'}>
                <LuAlignCenterVertical className={`${pathname === '/personal' ? 'stroke-blue-400' : 'stroke-blue-100'}` + " h-8 w-8 "} />
            </Link>
            <Profile></Profile>
        </div>
    )
}