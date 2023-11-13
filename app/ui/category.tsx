"use client"

import { PlusCircleIcon } from '@heroicons/react/24/solid'

function ChangeCategory(catName: string) {
    console.log("Category Button : ", catName);
}

export default function Category(props: any) {

    return (
        <button
            className={props.color + ' category flex flex-col shadow-md w-[150px] h-[128px] items-center justify-center gap-4 rounded-md font-medium hover:border-indigo-300'}
            onClick={() => ChangeCategory(props.name)}
        >
            <p className="w-full text-slate-100 text-lg">{props.name}</p>
            <PlusCircleIcon className="w-6 fill-slate-100/25" />
        </button>
    )
}