'use client'

import Link from 'next/link'
import { UserIcon, HomeIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
    const pathname = usePathname();
    const { data: session, status } = useSession()
    return (
        <div className='w-full flex h-16 pl-4 pr-4 gap-4 items-center justify-evenly'>
            <Link className={`${pathname === '/' ? 'stroke-gray-400' : ''}`}
                href={'/'}>
                <HomeIcon className="h-6 w-6 fill-gray-100" />
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
            {
                session ?
                    <Link className={`${pathname === '/user' ? 'stroke-gray-400 stroke-2' : ''}`}
                        href={'/user'}>
                        <UserIcon className="h-6 w-6 fill-gray-100" />
                    </Link>
                    :
                    <Link className={`${pathname === '/login' ? 'stroke-gray-400 stroke-2' : ''}`}
                        href={'/login'}>
                        <UserPlusIcon className="h-6 w-6 fill-gray-100" />
                    </Link>
            }
        </div>
    )
}