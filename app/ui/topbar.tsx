'use client'

import { usePathname } from 'next/navigation'

export default function Topbar() {
    const pathname = usePathname();
    let currentPageName = "?";
    let leftNotice = "- -";
    let rightNotice = "- -";
    switch (pathname) {
        case "/":
            currentPageName = "Home";
            break;
        case "/global":
            currentPageName = "Global";
            break;
        case "/personal":
            currentPageName = "Personal";
            break;
        case "/category":
            currentPageName = "Category";
            break;
        case "/subcategory":
            currentPageName = "Subcategory";
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
        case "/detail":
            currentPageName = "Detail";
            break;
    }
    //
    return (
        <div className='w-full flex justify-center fixed -top-1 z-10'>
            <div className='cloud relative w-full h-8 rounded-b-xl text-center'>
                <h3 className='text-white/10'>{"- - " + currentPageName + " - -"}</h3>
                <p className='absolute left-4 top-0 text-white/10'>{leftNotice}</p>
                <p className='absolute right-4 top-0 text-white/10'>{rightNotice}</p>
            </div>
        </div>
    )
}