import Category from "../ui/category";

export default function About() {
    console.log("Page Route : About");

    return (
        <main className='flex items-center justify-center' >
            <div className='flex flex-wrap w-full justify-center gap-4 pt-12'>
                <Category id={0} name={"Analytics"} color={"bg-blue-600/10"}></Category>
                <Category id={1} name={"Contact"} color={"bg-green-600/10"}></Category>
            </div>
        </main>
    )
}