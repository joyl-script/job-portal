export default function HeroSections({ title }: { title: string }) {

  return (
    <section className=" bg-black justify-center items-center flex mt-[70px] md:mt-[80px] py-16 md:py-30">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white px-6 text-center">{title}</h1>
    </section>
  )
}