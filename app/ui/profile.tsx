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
                <FaUserPlus className="h-6 w-6 fill-blue-400/25" />
            );
        case "authenticated":
            return (
                <Link href={'/user'}>
                    <FaUser className={`${pathname === '/user' ? 'fill-blue-400' : ' fill-blue-100'}` + " h-6 w-6"} />
                </Link>
            );
        case "unauthenticated":
            return (
                <Link href={'/login'}>
                    <FaUserPlus className={`${pathname === '/login' ? 'fill-blue-400' : ' fill-blue-100'}` + " h-6 w-6"} />
                </Link>
            );
    }
}