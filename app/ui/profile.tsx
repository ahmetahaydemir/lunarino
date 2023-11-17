import { useSession } from "next-auth/react"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { UserIcon, UserPlusIcon } from '@heroicons/react/24/solid'

export default function Profile() {
    const { data: session, status } = useSession()
    const pathname = usePathname();
    //
    console.log(status);
    switch (status) {
        case "loading":
            return (
                <UserPlusIcon className="h-6 w-6 fill-gray-300/25" />
            );
        case "authenticated":
            return (
                <Link className={`${pathname === '/user' ? 'stroke-gray-400 stroke-1.5' : ''}`}
                    href={'/user'}>
                    <UserIcon className="h-6 w-6 fill-gray-100" />
                </Link>
            );
        case "unauthenticated":
            return (
                <Link className={`${pathname === '/login' ? 'stroke-gray-400 stroke-1.5' : ''}`}
                    href={'/login'}>
                    <UserPlusIcon className="h-6 w-6 fill-gray-100" />
                </Link>
            );
    }
}