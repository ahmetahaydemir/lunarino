'use client'

import SortableContainer from "../ui/container";
import { DndContext, DragOverlay, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, closestCorners, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import SortableRanking, { RankingPropNoIndex } from "../ui/ranking";
import { FaAngleLeft, FaAngleRight, FaSortUp } from "react-icons/fa";

let currentOverlayToken = false;

export default function Personal() {
    console.log("Page Route : Personal");
    //
    let sortedArray: RankingPropNoIndex[] = [];
    let unsortedArray: RankingPropNoIndex[] = [
        {
            id: "11",
            name: "Elma",
            href: "/detail"
        },
        {
            id: "22",
            name: "Portakal",
            href: "/detail"
        },
        {
            id: "33",
            name: "Karpuz",
            href: "/detail"
        },
        {
            id: "44",
            name: "Kiraz",
            href: "/detail"
        },
        {
            id: "55",
            name: "Muz",
            href: "/detail"
        },
        {
            id: "66",
            name: "Limon",
            href: "/detail"
        },
        {
            id: "77",
            name: "Üzüm",
            href: "/detail"
        },
        {
            id: "88",
            name: "Çilek",
            href: "/detail"
        },
        {
            id: "99",
            name: "Ananas",
            href: "/detail"
        }
    ];
    //
    const [rankings, setRankings] = useState({
        sorted: sortedArray,
        unsorted: unsortedArray
    });
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
    //
    let dataCount = rankings.sorted.length + rankings.unsorted.length;
    //
    return (
        <div id='personal-container' className=" h-full flex flex-col gap-2 pt-12">
            <DndContext id="personal-dnd"
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
            >

                <SortableContainer editable={true} sorted={true} dataLength={dataCount} dataArray={rankings.sorted} activeId={activeElement?.id} activeElement={activeElement}></SortableContainer>

                <div
                    className={(rankings.sorted.length > 0 ? 'hidden ' : ' ') + " self-center animate-pulse flex w-10/12 h-[64px] absolute top-10 items-center justify-center gap-4 rounded-xl font-medium bg-black/10 border-4 border-dashed border-black/25"}
                >
                    <FaAngleRight className="w-8 h-8 fill-black/25" />
                    <b className="text-white/50 text-center text-xl tracking-widest">{"Drop Here"}</b>
                    <FaAngleLeft className="w-8 h-8 fill-black/25" />
                </div>

                <SortableContainer editable={true} sorted={false} dataLength={dataCount} dataArray={rankings.unsorted} activeId={activeElement?.id} activeElement={activeElement}></SortableContainer>

                <DragOverlay
                    dropAnimation={{
                        duration: 200,
                        easing: 'cubic-bezier(.64,.72,.42,1.21)'
                    }}>
                    {activeElement?.id ? (<SortableRanking
                        index={"?"}
                        id={activeElement.id}
                        name={activeElement?.name}
                        href={activeElement?.href}
                        active={false}
                        editable={true}
                        sorted={currentOverlayToken}
                    ></SortableRanking>) : null}
                </DragOverlay>

            </DndContext>
        </div>
    )
    //

    function handleDragStart(event: any) {
        if (event.active.data.current.sortable.containerId === 'sorted') {
            setActiveElement(rankings.sorted.find(x => x.id === event.active.id));
            currentOverlayToken = true;
        } else if (event.active.data.current.sortable.containerId === 'unsorted') {
            setActiveElement(rankings.unsorted.find(x => x.id === event.active.id));
            currentOverlayToken = false;
        }
    }

    function handleDragOver(event: any) {
        const { active, over } = event;
        console.log("Drag------------------------", event);
        //
        if (event.active.data.current === undefined) { return; }
        const activeContainer = (event.active.data.current.sortable.containerId === 'sorted') ? rankings.sorted : rankings.unsorted;
        const activeContainerId: string = event.active.data.current.sortable.containerId;
        if (event.over.data.current === undefined && over.id !== 'sorted' && over.id !== 'unsorted') { return; }
        let overContainer: RankingPropNoIndex[] = [];
        let overContainerId: string = "";
        if (over.id === 'sorted') {
            overContainer = rankings.sorted;
            overContainerId = 'sorted';
        } else if (over.id === 'unsorted') {
            overContainer = rankings.unsorted;
            overContainerId = 'unsorted';
        } else {
            overContainer = (event.over.data.current.sortable.containerId === 'sorted') ? rankings.sorted : rankings.unsorted;
            overContainerId = event.over.data.current.sortable.containerId;
        }
        //
        if (
            !activeContainer ||
            !overContainer ||
            activeContainer === overContainer
        ) {
            return;
        }
        //
        setRankings((rankings) => {
            const activeItemElement = activeContainer.find(x => x.id === active.id);
            const activeItemIndex = activeContainer.findIndex(x => x.id === active.id);
            const overItemElement = overContainer.find(x => x.id === over.id);
            const overItemIndex = overContainer.findIndex(x => x.id === over.id);
            //
            // console.log("DRAG-Current-Id : ", active.id, "-", over.id);
            // console.log("DRAG-Current-Index : ", activeItemIndex, "-", overItemIndex);
            // console.log("DRAG-Current-Element : ", activeItemElement, "-", overItemElement);
            //
            let newIndex: number;
            if (overContainer.filter(e => e.id === over.id).length > 0) {
                newIndex = overContainer.length + 1;
            } else {
                const isBelowOverItem =
                    over &&
                    active.rect.current.translated &&
                    active.rect.current.translated.top >
                    over.rect.top + over.rect.height;

                const modifier = isBelowOverItem ? 1 : 0;

                newIndex =
                    overItemIndex >= 0 ? overItemIndex + modifier : overContainer.length + 1;
            }
            //
            return {
                ...rankings,
                [activeContainerId]: rankings[activeContainerId as keyof typeof rankings].filter(
                    (item) => item.id !== active.id
                ),
                [overContainerId]: [
                    ...rankings[overContainerId as keyof typeof rankings].slice(0, newIndex),
                    rankings[activeContainerId as keyof typeof rankings][activeItemIndex],
                    ...rankings[overContainerId as keyof typeof rankings].slice(
                        newIndex,
                        rankings[overContainerId as keyof typeof rankings].length
                    ),
                ],
            };
        });
    }

    function handleDragEnd(event: any) {
        const { active, over } = event;
        console.log("Drag END ", event)
        setActiveElement({
            id: '',
            name: '',
            href: '',
        });
        // 
        if (active.id !== over.id) {
            //
            if (event.active.data.current === undefined) { return; }
            const activeContainer = (event.active.data.current.sortable.containerId === 'sorted') ? rankings.sorted : rankings.unsorted;
            const activeContainerId: string = event.active.data.current.sortable.containerId;
            if (event.over.data.current === undefined) { return; }
            const overContainer = (event.over.data.current.sortable.containerId === 'sorted') ? rankings.sorted : rankings.unsorted;
            const overContainerId: string = event.over.data.current.sortable.containerId;
            //
            if (activeContainerId === overContainerId) {
                // Same Containers
                console.log("DRAG END - SAME -----> ", activeContainerId);
                const oldIndex = activeContainer.findIndex(x => x.id === active.id);
                const newIndex = overContainer.findIndex(x => x.id === over.id);
                setRankings((rankings) => ({
                    ...rankings,
                    [activeContainerId]: arrayMove(
                        rankings[activeContainerId as keyof typeof rankings],
                        oldIndex,
                        newIndex
                    ),
                }));
            }
        }
        //

    }

}