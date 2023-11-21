'use client'

import { MdDragIndicator } from "react-icons/md";
import { PiCaretUpDownBold } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link'

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export interface RankingProp {
    index: any
    id: any
    name: string | undefined
    href: string | undefined
    active: boolean
}
export interface RankingPropNoIndex {
    id: any
    name: string
    href: string
}

export default function SortableRanking(props: RankingProp) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: props.id,
        transition: {
            duration: 100,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        },
    });
    //
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    //
    return (
        <li ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={(props.active ? 'blur-sm ' : '') + 'w-full flex justify-center items-center'}
        >
            <Link
                href={props.href || "/"}
                className={(props.active ? 'opacity-25 ' : 'opacity-100') + " ranking flex w-11/12 h-[48px] items-center justify-center gap-2 rounded-md font-medium"}
            >
                <div className={((props.index === "?" || props.active) ? "bg-blue-400 shadow-lg " : "bg-blue-200 ") + ' flex w-[64px] h-[54px] text-black justify-center text-xl rounded-2xl'}>
                    <b className={props.index === "?" ? 'self-center ' : 'self-center'}>{props.index}</b>
                    <PiCaretUpDownBold className={(props.index === "?" ? 'visible  -z-10 ' : 'invisible') + ' w-20 h-20 fill-blue-500 absolute self-center pointer-events-none'}></PiCaretUpDownBold>
                </div>
                <FaAngleRight className="w-6 h-6 fill-white/25" />
                <p className="w-full text-slate-100 text-lg">{props.name}</p>
                <MdDragIndicator className="w-6 h-6 fill-white/25 absolute right-1" />
            </Link>
        </li>
    )
}