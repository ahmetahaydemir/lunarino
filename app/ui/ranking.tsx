'use client'

import { ChevronDoubleRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
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
    const [{ isDragging }, drag, preview] = useDrag({
        type: ItemTypes.RANKING,
        item: () => {
            return { id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    //
    preview(null);
    drag(drop(ref))
    //
    return (
        <div ref={ref}
            data-handler-id={handlerId}
            className={(isDragging ? 'opacity-10 w-11/12 duration-100 ease-out' : 'opacity-100 w-full duration-200 ease-in-out') + 'transition-all flex justify-center items-center'}
        >
            <EllipsisHorizontalIcon className={(isDragging ? 'visible' : 'invisible') + ' w-8 h-8 fill-white absolute left-0 pointer-events-none'}></EllipsisHorizontalIcon>
            <Link
                key={id}
                href={href}
                className="ranking flex w-11/12 h-[48px] items-center justify-center gap-2 rounded-md font-medium"
            >
                <div className='flex w-[64px] h-[54px] bg-blue-200 text-black justify-center text-xl rounded-2xl'>
                    <b className='self-center'>{index + 1}</b>
                </div>
                <ChevronDoubleRightIcon className="w-8 fill-blue-200" />
                <p className="w-full text-slate-100 text-lg">{name}</p>
            </Link>
        </div>
    )
}