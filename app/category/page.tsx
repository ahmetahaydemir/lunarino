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
                <CategoryContainer id={4} name={"Art"} color={"bg-cyan-600/10"}></CategoryContainer>
            </div>
        </main>
    )
}