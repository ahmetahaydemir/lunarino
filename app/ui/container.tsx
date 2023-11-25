'use client'

import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    TouchSensor,
    MouseSensor,
    useSensor,
    useSensors,
    DragOverlay,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
    restrictToVerticalAxis,
    restrictToWindowEdges
} from '@dnd-kit/modifiers';
import SortableRanking, { RankingProp, RankingPropNoIndex } from './ranking';

export interface SortableContainerProp {
    mobile: boolean
}

export default function SortableContainer(props: SortableContainerProp) {
    const [rankings, setRankings] = useState([
        {
            id: 1,
            name: "Slay the Spire",
            href: "/detail"
        },
        {
            id: 2,
            name: "Risk of Rain 2",
            href: "/detail"
        },
        {
            id: 3,
            name: "Vampire Survivors",
            href: "/detail"
        },
        {
            id: 4,
            name: "Against the Storm",
            href: "/detail"
        },
        {
            id: 5,
            name: "Brotato",
            href: "/detail"
        },
        {
            id: 6,
            name: "Dark Souls",
            href: "/detail"
        },
        {
            id: 7,
            name: "For the King",
            href: "/detail"
        },
        {
            id: 8,
            name: "Factorio",
            href: "/detail"
        },
        {
            id: 9,
            name: "Disco Elysium",
            href: "/detail"
        },
        {
            id: 10,
            name: "Dyson Sphere Program",
            href: "/detail"
        }
    ]);
    const [activeId, setActiveId] = useState(null);
    const [activeElement, setActiveElement] = useState<RankingPropNoIndex | undefined>({
        id: '',
        name: '',
        href: '',
    });
    //
    let sensors = useSensors(
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
        useSensor(TouchSensor),
        useSensor(MouseSensor)
    );
    // let sensors = undefined;
    // if (props.mobile) {
    //     sensors = useSensors(
    //         useSensor(TouchSensor),
    //     );
    // } else {
    //     sensors = useSensors(
    //         useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
    //         useSensor(MouseSensor)
    //     );
    // }
    //
    return (
        <ul className='w-full h-fit flex flex-col gap-4 items-center'>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}

            >
                <SortableContext items={rankings} strategy={verticalListSortingStrategy}
                >
                    {rankings.map((ranking, index) => (<SortableRanking
                        key={ranking.id}
                        index={index + 1}
                        id={ranking.id}
                        name={ranking.name}
                        href={ranking.href}
                        active={activeId === ranking.id}
                    ></SortableRanking>))}
                </SortableContext>

                <DragOverlay
                    dropAnimation={{
                        duration: 200,
                        easing: 'cubic-bezier(.64,.72,.42,1.21)'
                    }}>
                    {activeId ? (<SortableRanking
                        index={"?"}
                        id={activeId}
                        name={activeElement?.name}
                        href={activeElement?.href}
                        active={false}
                    ></SortableRanking>) : null}
                </DragOverlay>

            </DndContext>
        </ul>
    )

    function handleDragEnd(event: any) {
        const { active, over } = event;
        //
        if (active.id !== over.id) {
            setRankings((rankings) => {
                const oldIndex = rankings.findIndex(x => x.id === active.id);
                const newIndex = rankings.findIndex(x => x.id === over.id);

                return arrayMove(rankings, oldIndex, newIndex);
            });
        }
        //
        setActiveId(null);
        setActiveElement({
            id: '',
            name: '',
            href: '',
        });
    }

    function handleDragStart(event: any) {
        setActiveId(event.active.id);
        setActiveElement(rankings.find(x => x.id === event.active.id));
    }

}