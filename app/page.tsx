import Category from './ui/category';

export default function Home() {
  console.log("Page Route : Home");

  return (
    <main className='flex items-center justify-center' >
      <div className='flex flex-wrap justify-center gap-4 pt-8'>
        <Category id={0} name={"Games"} color={"bg-blue-600/10"}></Category>
        <Category id={1} name={"Anime"} color={"bg-red-600/10"}></Category>
        <Category id={2} name={"Manga"} color={"bg-green-600/10"}></Category>
        <Category id={3} name={"Movie"} color={"bg-yellow-600/10"}></Category>
        <Category id={4} name={"Art"} color={"bg-cyan-600/10"}></Category>
      </div>
    </main>
  )
}