import CategoryContainer from "../ui/category";

export default function Category() {
    console.log("Page Route : Category");

    return (
        <main className='flex items-center justify-center' >
            <div className='flex flex-wrap justify-center gap-4 pt-12'>
                <CategoryContainer id={0} name={"Games"} color={"bg-blue-600/10"}></CategoryContainer>
                <CategoryContainer id={1} name={"Anime"} color={"bg-red-600/10"}></CategoryContainer>
                <CategoryContainer id={2} name={"Manga"} color={"bg-green-600/10"}></CategoryContainer>
                <CategoryContainer id={3} name={"Movie"} color={"bg-yellow-600/10"}></CategoryContainer>
                <CategoryContainer id={4} name={"Shows"} color={"bg-teal-600/10"}></CategoryContainer>
                <CategoryContainer id={5} name={"Software"} color={"bg-zinc-600/10"}></CategoryContainer>
                <CategoryContainer id={6} name={"Food"} color={"bg-lime-600/10"}></CategoryContainer>
                <CategoryContainer id={7} name={"Location"} color={"bg-emerald-600/10"}></CategoryContainer>
                <CategoryContainer id={8} name={"Aesthetic"} color={"bg-rose-600/10"}></CategoryContainer>
                <CategoryContainer id={9} name={"Random"} color={"bg-gray-600/10"}></CategoryContainer>
            </div>
        </main>
    )
}