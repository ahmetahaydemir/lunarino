"use client"

import { BiTime, BiUserPin, BiStar, BiDotsHorizontal } from "react-icons/bi";

function FilterCategory(catName: string, catIndex: number) {
    console.log("Filter Button : ", catName, catIndex);
}

export default function FilterContainer(props: any) {
    function GetFilterIcon() {
        switch (props.type) {
            case "popular":
                return (<BiStar className="w-8 h-8 fill-white/25" />)
            case "personal":
                return (<BiUserPin className="w-8 h-8 fill-white/25" />)
            case "timely":
                return (<BiTime className="w-8 h-8 fill-white/25" />)
            default:
                return (<BiDotsHorizontal className="w-8 h-8 fill-white/25" />)
        }
    }
    //
    return (
        <button
            className={props.color + ' subcategory flex flex-col shadow-md w-24 h-20 items-center gap-1 justify-center rounded-md font-small hover:border-indigo-300'}
            onClick={() => FilterCategory(props.name, props.id)}
        >
            {GetFilterIcon()}
            <p className="w-full text-white text-lg text-center">{props.name}</p>
        </button>
    )
}