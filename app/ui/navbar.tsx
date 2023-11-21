'use client'

import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import Profile from './profile'

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className='w-full absolute bottom-0 flex h-20 pl-4 pr-4 gap-4 items-center justify-evenly bg-black/50 rounded-t-xl'>
            <Link className={`${pathname === '/' ? 'stroke-gray-400' : ''}`}
                href={'/'}>
                <FaHome className="h-6 w-6 fill-gray-100" />
            </Link>
            <Link href={'/global'}>
                <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search for rankings..."
                    autoComplete="off"
                    className={`w-64 lg:w-96 text-center shadow-xl rounded-lg border-2 border-gray-100 ring-gray-100 text-gray-900 text-sm focus:ring-gray-400 focus:border-gray-400 p-2 ${pathname === '/global' ? 'bg-gray-100 ' : 'bg-gray-300'}`}>
                </input>
            </Link>
            <Profile></Profile>
        </div>
    )
}