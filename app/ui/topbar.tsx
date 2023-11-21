'use client'

import { usePathname } from 'next/navigation'

export default function Topbar() {
    const pathname = usePathname();
    return (
        <div className='w-full flex justify-center absolute -top-1'>
            <div className='cloud relative w-full h-8 rounded-b-xl'></div>
        </div>
    )
}