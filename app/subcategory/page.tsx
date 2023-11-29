'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SubCategoryContainer from "../ui/subcategory";

export default function SubCategory() {
    console.log("Page Route : Subcategory");
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    //
    function OnListingType(props: any) {
        console.log("Search Query Input : ", props.target.value);
        let urlParams = new URLSearchParams(searchParams)
        if (props.target.value === '') {
            urlParams.delete('q');
        } else {
            urlParams.set('q', props.target.value);
        }
        router.replace(pathname + '?' + urlParams.toString());
    }
    function OnListingSort(searchType: string) {
        console.log("Search Type Selection : ", searchType);
        let urlParams = new URLSearchParams(searchParams)
        if (searchType === '') {
            urlParams.delete('q');
        } else {
            urlParams.set('type', searchType);
        }
        router.replace(pathname + '?' + urlParams.toString());
    }
    //
    return (
        <main className='flex flex-col items-center justify-center gap-4 pt-12' >
            <div className='flex flex-row flex-wrap justify-center gap-4'>

                <button
                    className={'bg-blue-600/25 flex flex-col shadow-md w-24 h-12 items-center gap-1 justify-center rounded-md font-small hover:border-indigo-300'}
                    onClick={() => OnListingSort("popular")}
                >
                    <p className="w-full text-white text-lg text-center">Popular</p>
                </button>
                <button
                    className={'bg-green-600/25 flex flex-col shadow-md w-24 h-12 items-center gap-1 justify-center rounded-md font-small hover:border-indigo-300'}
                    onClick={() => OnListingSort("timely")}
                >
                    <p className="w-full text-white text-lg text-center">Timely</p>
                </button>
                <button
                    className={'bg-red-600/25 flex flex-col shadow-md w-24 h-12 items-center gap-1 justify-center rounded-md font-small hover:border-indigo-300'}
                    onClick={() => OnListingSort("personal")}
                >
                    <p className="w-full text-white text-lg text-center">Personal</p>
                </button>

            </div>
            <input
                id="listing-search"
                placeholder="Search..."
                onChange={OnListingType}
                className="w-full h-12 bg-white/10 text-center border-b-4 border-dashed border-white/10 animate-pulse caret-white text-lg text-white selection:bg-cyan-500">
            </input>
            <div className='flex flex-wrap justify-center gap-4 overflow-y-auto'>
                <SubCategoryContainer id={0} name={"Category Listing"} color={"bg-cyan-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={1} name={"Category Listing"} color={"bg-cyan-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={2} name={"Category Listing"} color={"bg-cyan-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={3} name={"Category Listing"} color={"bg-cyan-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={4} name={"Category Listing"} color={"bg-cyan-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={5} name={"Category Listing"} color={"bg-cyan-600/10"} type={"none"}></SubCategoryContainer>
            </div>
        </main>
    )
}