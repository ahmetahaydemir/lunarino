import Category from './ui/category';

export default function Home() {
  console.log("Page Route : Home");

  return (
    <main className='flex items-center justify-center' >
      <div className='flex flex-wrap justify-center gap-4 pt-8'>
        <Category name={"Games"} color={"bg-blue-600/10"}></Category>
        <Category name={"Anime"} color={"bg-red-600/10"}></Category>
        <Category name={"Manga"} color={"bg-green-600/10"}></Category>
        <Category name={"Movie"} color={"bg-yellow-600/10"}></Category>
        <Category name={"Art"} color={"bg-cyan-600/10"}></Category>
      </div>
    </main>
  )
}