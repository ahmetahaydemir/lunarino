import FilterContainer from "../ui/filter";
import SubCategoryContainer from "../ui/subcategory";

export default function SubCategory() {
    console.log("Page Route : Subcategory");

    return (
        <main className='flex flex-col items-center justify-center gap-4 pt-12' >
            <div className='flex flex-row flex-wrap justify-center gap-2'>
                <FilterContainer id={0.0} name={"Popular"} color={"bg-blue-600/10"} type={"popular"}></FilterContainer>
                <FilterContainer id={0.1} name={"Timely"} color={"bg-rose-600/10"} type={"timely"}></FilterContainer>
                <FilterContainer id={0.2} name={"Personal"} color={"bg-green-600/10"} type={"personal"}></FilterContainer>
            </div>
            <input
                placeholder="Search..."
                className="w-full h-12 bg-white/10 text-center border-b-4 border-dashed border-white/10 animate-pulse">
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