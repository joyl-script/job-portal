import Filters from "./Filters";
import Statistic from "./Statistic";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: "url('/Account-for-Workforce-Transitions-while-Diversifying-Workplaces.jpg')" }}
      className="relative bg-center bg-cover py-25"
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 flex items-center flex-col justify-center">
        <h1 className="text-7xl text-white">Find Your Dream Job Today!</h1>
        <p className="mt-3 text-lg text-white opacity-[0.8]">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
        <Filters />
        <Statistic />
      </div>
    </section>
  );
}