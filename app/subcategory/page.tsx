import SubCategoryContainer from "../ui/subcategory";

export default function SubCategory() {
    console.log("Page Route : Subcategory");

    return (
        <main className='flex flex-col items-center justify-center gap-4 pt-12' >
            <div className='flex flex-wrap justify-center gap-4'>
                <SubCategoryContainer id={0.0} name={"Most Popular"} color={"bg-blue-600/10"} type={"popular"}></SubCategoryContainer>
                <SubCategoryContainer id={0.1} name={"Timely"} color={"bg-rose-600/10"} type={"timely"}></SubCategoryContainer>
                <SubCategoryContainer id={0.2} name={"Personalized"} color={"bg-green-600/10"} type={"personalized"}></SubCategoryContainer>
            </div>
            <input
                placeholder="Search..."
                className="w-80 h-12 rounded-lg bg-white/10 text-center animate-pulse">
            </input>
            <hr className="w-full border-2 border-dashed border-white/10"></hr>
            <div className='flex flex-wrap justify-center gap-4 overflow-y-auto'>
                <SubCategoryContainer id={0} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={1} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={2} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={3} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={4} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={5} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={3} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={4} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={5} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={3} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={4} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
                <SubCategoryContainer id={5} name={"Listing"} color={"bg-blue-600/10"} type={"none"}></SubCategoryContainer>
            </div>
        </main>
    )
}