'use client'

import {
    useDroppable,
} from '@dnd-kit/core';
import {
    rectSortingStrategy,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableRanking, { RankingPropNoIndex } from './ranking';
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaSortUp } from 'react-icons/fa';

export interface SortableContainerProp {
    editable: boolean
    sorted: boolean
    activeId: any
    activeElement: any
    dataArray: RankingPropNoIndex[],
    dataLength: number
}

export default function SortableContainer(props: SortableContainerProp) {
    //
    const {
        setNodeRef,
    } = useDroppable({
        id: (props.sorted ? 'sorted' : 'unsorted'),
    });
    //
    if (props.sorted) {
        //
        return (
            <SortableContext id='sorted' items={props.dataArray} strategy={verticalListSortingStrategy}
            >
                <ul ref={setNodeRef}
                    className='w-full h-max flex flex-col gap-4 items-center'>
                    {props.dataArray.map((ranking, index) => (<SortableRanking
                        key={ranking.id}
                        index={index + 1}
                        id={ranking.id}
                        name={ranking.name}
                        href={ranking.href}
                        active={props.activeId === ranking.id}
                        editable={props.editable}
                        sorted={props.sorted}
                    ></SortableRanking>))}
                </ul>

            </SortableContext >
        )
    } else {
        //
        return (
            <SortableContext id='unsorted' items={props.dataArray} strategy={rectSortingStrategy}
            >

                <div className={(props.dataArray.length < props.dataLength ? 'h-12 ' : 'h-24 animate-pulse ') + "w-full flex justify-center items-end"}>
                    <FaSortUp className="fill-black/25 w-8 h-8 relative -bottom-4"></FaSortUp>
                    <FaSortUp className="fill-black/25 w-12 h-12 relative -bottom-5"></FaSortUp>
                    <FaSortUp className="fill-black/25 w-8 h-8 relative -bottom-4"></FaSortUp>
                </div>

                <ul ref={setNodeRef}
                    className='w-full h-full flex flex-wrap pt-4 justify-center items-start content-start gap-y-4 bg-gradient-to-b from-black/25 to-transparent border-t-4 border-dashed border-black/25'>
                    {props.dataArray.map((ranking, index) => (<SortableRanking
                        key={ranking.id}
                        index={index + 1}
                        id={ranking.id}
                        name={ranking.name}
                        href={ranking.href}
                        active={props.activeId === ranking.id}
                        editable={props.editable}
                        sorted={props.sorted}
                    ></SortableRanking>))}
                </ul>
            </SortableContext >
        )
    }

}