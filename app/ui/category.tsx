"use client"

import Link from "next/link";
import { BiSolidCategoryAlt } from "react-icons/bi";

function ChangeCategory(catName: string, catIndex: number) {
    console.log("Category Button : ", catName, catIndex);
    //
    // let bgIndex = catIndex;
    // let container = document.getElementById('bg-container')?.children;
    // if (!container) return;
    // for (let index = 0; index < container.length; index++) {
    //     const element = container[index];
    //     if (index === bgIndex) {
    //         element?.classList.add('active');
    //     } else {
    //         element?.classList.remove('active');
    //     }
    // }
}

export default function CategoryContainer(props: any) {
    return (
        <Link href={'/subcategory'}
            className={props.color + ' category flex flex-col shadow-md w-36 md:w-80 h-28 md:h-64 items-center justify-center gap-2 rounded-md font-medium hover:border-indigo-300'}
            onClick={() => ChangeCategory(props.name, props.id)}
        >
            <p className="w-full text-white text-lg text-center">{props.name}</p>
            <BiSolidCategoryAlt className="w-8 h-8 fill-white/25" />
        </Link>
    )
}