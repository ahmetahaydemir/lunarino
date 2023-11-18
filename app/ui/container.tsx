'use client'

import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import update from 'immutability-helper';
import { Ranking } from './ranking'

export interface RankingData {
    id: number
    name: string
    href: string
}

export interface ContainerProps {
    mobile: boolean
}

let initialToken = false;

export const Container: FC<ContainerProps> = (mobileCheck) => {

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
    ])

    const moveRanking = useCallback((dragIndex: number, hoverIndex: number) => {
        console.log("Movement --> ", dragIndex, "-->", hoverIndex);
        setRankings((prevRankings: RankingData[]) =>
            update(prevRankings, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevRankings[dragIndex] as RankingData],
                ],
            }),
        )
    }, [])

    const renderRanking = useCallback(
        (ranking: { id: number; name: string, href: string }, index: number) => {
            return (
                <Ranking
                    key={ranking.id}
                    index={index}
                    id={ranking.id}
                    name={ranking.name}
                    href={ranking.href}
                    moveRanking={moveRanking}
                />
            )
        },
        [],
    )

    if (!initialToken) {
        setTimeout(() => {
            moveRanking(1, 1);
        }, 250);
        initialToken = true;
    }

    return (
        <>
            <div className='w-full h-fit flex flex-col pt-4 gap-4 items-center'>
                <DndProvider backend={mobileCheck.mobile ? TouchBackend : HTML5Backend}>
                    {rankings.map((rank, i) => renderRanking(rank, i))}
                </DndProvider>
            </div>
        </>
    )

}