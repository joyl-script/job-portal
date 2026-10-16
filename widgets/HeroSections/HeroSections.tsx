export default function HeroSections({ title }: { title: string }) {

  return (
    <section className=" bg-black justify-center items-center flex mt-20 py-30">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
    </section>
  )
}