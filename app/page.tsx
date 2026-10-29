import AuthModal from "@/features/auth/ui/AuthForm";
import Categorys from "@/widgets/categorys/ui/Categorys";
import Footer from "@/widgets/footer/ui/Footer";
import Header from "@/widgets/header/ui/Header";
import Hero from "@/widgets/hero/ui/Hero";
import Reveal from "@/widgets/scroll-reveal/ui/Reveal";
import Vacancy from "@/widgets/vacancy/ui/Vacancy";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Reveal delay={100}>
        <Vacancy
          title="Latest remote jobs"
          desc="Listings come from the Jobicy job feed and are refreshed every few hours. Apply on the employer's site — every posting links to the original."
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
