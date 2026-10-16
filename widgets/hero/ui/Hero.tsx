import Parallax from "./Parallax";
import Statistic from "./Statistic";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="relative md:pt-40 mt-15 pt-20 bg-center bg-cover py-15 md:py-25 overflow-hidden">
      <Parallax />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 flex items-center flex-col justify-center">
        <Typewriter />
        <p className="mt-3 text-lg text-white opacity-[0.8] text-center">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
        <Statistic />
      </div>
    </section>
  );
}