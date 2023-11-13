'use client'

import { UserIcon, HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className='w-full flex h-16 pl-4 pr-4 gap-4 items-center justify-evenly'>
            <Link className={`${pathname === '/' ? 'stroke-indigo-500' : ''}`}
                href={'/'}>
                <HomeIcon className="h-6 w-6 fill-indigo-100" />
            </Link>
            <Link href={'/global'}>
                <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search for rankings..."
                    autoComplete="off"
                    className={`w-64 lg:w-96 text-center shadow-xl rounded-lg border-2 border-gray-300 text-gray-900 text-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 ${pathname === '/global' ? 'bg-grey-100 ' : 'bg-indigo-100'}`}>
                </input>
            </Link>
            <Link className={`${pathname === '/user' ? 'stroke-indigo-500 stroke-2' : ''}`}
                href={'/user'}>
                <UserIcon className="h-6 w-6 fill-indigo-100" />
            </Link>
        </div>
    )
}