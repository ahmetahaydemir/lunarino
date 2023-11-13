import Link from "next/link";
import Ranking from "../ui/ranking";

const globalRanking = [
    {
        id: 1,
        name: "Slay the Spire",
        href: "/game"
    },
    {
        id: 2,
        name: "Risk of Rain 2",
        href: "/game"
    },
    {
        id: 3,
        name: "Vampire Survivors",
        href: "/game"
    },
    {
        id: 4,
        name: "Against the Storm",
        href: "/game"
    },
    {
        id: 5,
        name: "Brotato",
        href: "/game"
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