import Link from "next/link";
import Ranking from "../ui/ranking";

const globalRanking = [
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
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 7,
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 8,
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 9,
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 10,
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 11,
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 12,
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 13,
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 14,
        name: "Brotato",
        href: "/detail"
    },
    {
        id: 15,
        name: "Brotato",
        href: "/detail"
    }
];

export default function Global() {
    console.log("Page Route : Global");

    return (
        <div className="flex flex-col p-4 gap-4">
            {globalRanking.map((globalRank) => {
                return (
                    <Ranking key={globalRank.id}
                        id={globalRank.id}
                        name={globalRank.name}
                        href={globalRank.href} >
                    </Ranking>
                );
            })}
        </div>
    )
}