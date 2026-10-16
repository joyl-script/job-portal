import AuthModal from "@/features/auth/ui/AuthForm";
import Categorys from "@/widgets/categorys/ui/Categorys";
import Footer from "@/widgets/footer/ui/Footer";
import Header from "@/widgets/header/ui/Header";
import Hero from "@/widgets/hero/ui/Hero";
import Logos from "@/widgets/logos/ui/Logos";
import Reveal from "@/widgets/scroll-reveal/ui/Reveal";
import Vacancy from "@/widgets/vacancy/ui/Vacancy";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Reveal>
        <Logos />
      </Reveal>
      <Reveal delay={100}>
        <Vacancy
          title="Recent Jobs Available"
          desc="At eu lobortis pretium tincidunt amet lacus ut aenean aliquet"
          button="View all"
        />
      </Reveal>
      <Reveal delay={100}>
        <Categorys />
      </Reveal>
      <Reveal delay={100}>
        <Footer />
      </Reveal>
      <AuthModal />
    </div>
  );
}
