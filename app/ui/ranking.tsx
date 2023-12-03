'use client'

import { MdDragIndicator } from "react-icons/md";
import { PiCaretUpDownBold } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link'

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export interface RankingProp {
    index: any
    id: string
    name: string | undefined
    href: string | undefined
    active: boolean
    editable: boolean
    sorted: boolean
}
export interface RankingPropNoIndex {
    id: string
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
    let rankColorStyle = "";
    let overlayColorStyle = "";
    if (props.editable) {
        if (props.index === "?" || props.active) {
            rankColorStyle = "bg-green-400 shadow-xl ";
            overlayColorStyle = "fill-green-500 -z-10 visible ";
        } else {
            rankColorStyle = "bg-green-200 ";
            overlayColorStyle = "invisible ";
        }
    } else {
        if (props.index === "?" || props.active) {
            rankColorStyle = "bg-blue-400 shadow-xl ";
            overlayColorStyle = "fill-blue-500 -z-10 visible ";
        } else {
            rankColorStyle = "bg-blue-200 ";
            overlayColorStyle = "invisible ";
        }
    }
    //
    if (props.editable) {
        //
        if (props.sorted) {
            return (
                <li ref={setNodeRef}
                    style={style}
                    {...attributes}
                    {...listeners}
                    className={(props.active ? 'blur-sm' : '') + ' w-full flex justify-center items-center'}
                >
                    <ul
                        className={(props.active ? 'opacity-25 ' : 'opacity-100 ') + "ranking flex w-11/12 h-[42px] items-center justify-center gap-2 rounded-md font-medium " + (props.index === "?" ? "cursor-grabbing" : "cursor-grab")}
                    >
                        <div className={rankColorStyle + 'flex w-[64px] h-[48px] text-black justify-center text-xl rounded-2xl'}>
                            <b className="self-center text-center w-full">{props.index}</b>
                            <PiCaretUpDownBold className={overlayColorStyle + 'w-20 h-20 absolute self-center pointer-events-none'}></PiCaretUpDownBold>
                        </div>
                        <FaAngleRight className="w-6 h-6 fill-white/25" />
                        <p className="w-full text-slate-100 text-left text-lg">{props.name}</p>
                        {
                            props.editable ?
                                <div
                                    className={"w-12 h-12 relative right-1 flex justify-end items-center "}
                                >
                                    <MdDragIndicator
                                        className="w-8 h-8 fill-white/50 animate-pulse" />
                                </div>
                                :
                                ''
                        }
                    </ul>
                </li>
            )
        } else {
            return (
                <li ref={setNodeRef}
                    style={style}
                    {...attributes}
                    {...listeners}
                    className={(props.active ? 'blur-sm' : '') + ' flex basis-rank justify-center items-center'}
                >
                    <ul
                        className={(props.active ? 'opacity-25 ' : 'opacity-100 ') + "ranking flex w-11/12 h-[64px] items-center justify-center rounded-md font-medium " + (props.index === "?" ? "cursor-grabbing" : "cursor-grab")}
                    >
                        <p className="w-10/12 h-min text-slate-100 text-center text-md pr-2">{props.name}</p>
                        <MdDragIndicator
                            className="w-8 h-8 fill-white/50 animate-pulse relative right-0" />
                    </ul>
                </li>
            )
        }
    } else {
        return (
            <li ref={setNodeRef}
                style={style}
                className={(props.active ? 'blur-sm ' : '') + 'w-full flex justify-center items-center'}
            >
                <Link
                    href={props.href || "/"}
                    className={(props.active ? 'opacity-25 ' : 'opacity-100') + " ranking flex w-11/12 h-[42px] items-center justify-center gap-2 rounded-md font-medium"}
                >
                    <div className={rankColorStyle + 'flex w-[64px] h-[48px] text-black justify-center text-xl rounded-2xl'}>
                        <b className="self-center">{props.index}</b>
                        <PiCaretUpDownBold className={overlayColorStyle + 'w-20 h-20 relative self-center pointer-events-none'}></PiCaretUpDownBold>
                    </div>
                    <FaAngleRight className="w-6 h-6 fill-white/25" />
                    <p className="w-full text-slate-100 text-lg">{props.name}</p>
                </Link>
            </li>
        )
    }
}