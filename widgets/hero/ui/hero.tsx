import Filters from "./filters";
import Statistic from "./statistic";

export default function Hero() {
  return (
    <section className="bg-black py-25">
      <div className="container flex items-center flex-col justify-center">
        <h1 className="text-7xl text-white">Find Your Dream Job Today!</h1>
        <p className="mt-3 text-lg text-white opacity-[0.8]">Connecting Talent with Opportunity: Your Gateway to Career Success</p>
        <Filters />
        <Statistic />
      </div>
    </section>
  )
}