
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Ranking(props: any) {

    return (
        <Link
            key={props.name}
            href={props.href}
            className="flex shadow-md h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600"
        >
            <ChevronDoubleRightIcon className="w-6 fill-slate-400" />
            <p className="text-indigo-500">{props.name}</p>
        </Link>
    )
}