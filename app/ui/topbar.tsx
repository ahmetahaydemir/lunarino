'use client'

import { usePathname } from 'next/navigation'

export default function Topbar() {
    const pathname = usePathname();
    let currentPageName = "Home";
    switch (pathname) {
        case "/global":
            currentPageName = "Global";
            break;
        case "/personal":
            currentPageName = "Personal";
            break;
        case "/category":
            currentPageName = "Category";
            break;
        case "/user":
            currentPageName = "User";
            break;
        case "/login":
            currentPageName = "Login";
            break;
        case "/about":
            currentPageName = "About";
            break;
        default:
            break;
    }
    //
    return (
        <div className='w-full flex justify-center absolute -top-1'>
            <div className='cloud relative w-full h-8 rounded-b-xl text-center'>
                <h3 className='text-white/10'>{"- - " + currentPageName + " - -"}</h3>
            </div>
        </div>
    )
}