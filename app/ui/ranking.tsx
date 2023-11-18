'use client'

import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { useDrag, useDrop } from 'react-dnd'
import { useRef, type FC } from 'react'
import type { Identifier, XYCoord } from 'dnd-core'

export const ItemTypes = {
    RANKING: 'ranking'
}

export interface RankingProps {
    id: any
    name: string
    href: string
    index: number
    moveRanking: (dragIndex: number, hoverIndex: number) => void
}
interface DragItem {
    index: number
    id: string
    type: string
}

export const Ranking: FC<RankingProps> = ({ id, name, href, index, moveRanking }) => {

    const ref = useRef<HTMLDivElement>(null)
    //
    const [{ handlerId }, drop] = useDrop<
        DragItem,
        void,
        { handlerId: Identifier | null }
    >({
        accept: ItemTypes.RANKING,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            moveRanking(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })
    //
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.RANKING,
        item: () => {
            return { id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    //
    drag(drop(ref))
    //
    return (
        <div ref={ref}
            data-handler-id={handlerId}
            className={isDragging ? 'opacity-0 w-full' : 'opacity-100 w-full'}
        >
            <Link
                key={id}
                href={href}
                className="ranking flex shadow-md h-[48px] items-center justify-center gap-2 rounded-md font-medium hover:border-indigo-300"
            >
                <div className='flex w-[54px] h-[54px] shadow-md bg-blue-200 text-black justify-center text-xl rounded-2xl'>
                    <b className='self-center'>{id}</b>
                </div>
                <ChevronDoubleRightIcon className="w-8 fill-blue-200" />
                <p className="w-full text-slate-100 text-lg">{name}</p>
            </Link>
        </div>
    )
}