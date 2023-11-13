
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Ranking(props: any) {

    return (
        <Link
            key={props.id}
            href={props.href}
            className="ranking flex shadow-md h-[48px] items-center justify-center gap-2 rounded-md font-medium hover:border-indigo-300"
        >
            <div className='flex w-[54px] h-[54px] shadow-md bg-blue-200 text-black justify-center text-xl rounded-2xl'>
                <b className='self-center'>{props.id}</b>
            </div>
            <ChevronDoubleRightIcon className="w-8 fill-blue-200" />
            <p className="w-full text-slate-100 text-lg">{props.name}</p>
        </Link>
    )
}