import { useSession } from "next-auth/react"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaUser, FaUserPlus } from "react-icons/fa";

export default function Profile() {
    const { data: session, status } = useSession()
    const pathname = usePathname();
    //
    console.log(status);
    switch (status) {
        case "loading":
            return (
                <FaUserPlus className="h-6 w-6 fill-gray-300/25" />
            );
        case "authenticated":
            return (
                <Link className={`${pathname === '/user' ? 'stroke-gray-400 stroke-1.5' : ''}`}
                    href={'/user'}>
                    <FaUser className="h-6 w-6 fill-gray-100" />
                </Link>
            );
        case "unauthenticated":
            return (
                <Link className={`${pathname === '/login' ? 'stroke-gray-400 stroke-1.5' : ''}`}
                    href={'/login'}>
                    <FaUserPlus className="h-6 w-6 fill-gray-100" />
                </Link>
            );
    }
}