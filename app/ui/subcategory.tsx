"use client"

import Link from "next/link";
import { BiCategory } from "react-icons/bi";

function SelectSubCategory(catName: string, catIndex: number) {
    console.log("Subcategory Button : ", catName, catIndex);
}

export default function SubCategoryContainer(props: any) {
    return (
        <Link href={'/global'}
            className={props.color + ' subcategory flex flex-row shadow-md w-11/12 h-12 pl-2 items-center justify-center gap-2 rounded-md font-medium hover:border-indigo-300'}
            onClick={() => SelectSubCategory(props.name, props.id)}
        >
            <BiCategory className="w-8 h-8 fill-white/25" />
            <p className="w-full text-white text-lg text-center">{props.name}</p>
        </Link>
    )
}