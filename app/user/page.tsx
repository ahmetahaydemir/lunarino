'use client'

import { useSession, signOut } from "next-auth/react"
import Image from "next/image";

export default function User() {
    console.log("Page Route : User");
    const { data: session, status } = useSession()

    return <div className="h-128 w-screen flex flex-col gap-4 items-center justify-center text-1xl text-gray-300">
        <h2 className="text-2xl text-white">User Detail Page</h2>
        <hr ></hr>
        <b>
            {session?.user?.name}
        </b>
        <b>
            {session?.user?.email ?? "No email in the callback"}
        </b>
        <b>
            {session?.expires}
        </b>
        <hr ></hr>
        {
            session?.user?.image ?
                <Image src={(session?.user?.image)}
                    width={128}
                    height={128}
                    className="drop-shadow-xl rounded-full border-4"
                    alt={session?.user?.name ?? "Profile picture"}
                    priority={true}
                >
                </Image>
                :
                <b>No image in the callback</b>
        }
        <hr ></hr>
        <button className="w-32 h-12 text-lg text-white bg-gray-500 drop-shadow-lg rounded-lg" onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}>Sign out</button>
    </div>
}