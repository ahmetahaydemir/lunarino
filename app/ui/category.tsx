"use client"

import { PlusCircleIcon } from '@heroicons/react/24/solid'

function ChangeCategory(catName: string, catIndex: number) {
    console.log("Category Button : ", catName, catIndex);
    //
    let bgIndex = catIndex;
    let container = document.getElementById('bg-container')?.children;
    if (!container) return;
    for (let index = 0; index < container.length; index++) {
        const element = container[index];
        if (index === bgIndex) {
            element?.classList.add('active');
        } else {
            element?.classList.remove('active');
        }
    }
}

export default function Category(props: any) {

    return (
        <button
            className={props.color + ' category flex flex-col shadow-md w-40 md:w-80 h-32 md:h-64 items-center justify-center gap-4 rounded-md font-medium hover:border-indigo-300'}
            onClick={() => ChangeCategory(props.name, props.id)}
        >
            <p className="w-full text-slate-100 text-lg">{props.name}</p>
            <PlusCircleIcon className="w-6 fill-slate-100/25" />
        </button>
    )
}