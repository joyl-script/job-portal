import AuthModal from "@/features/auth/ui/AuthForm";
import Categorys from "@/widgets/categorys/ui/Categorys";
import Footer from "@/widgets/footer/ui/Footer";
import Header from "@/widgets/header/ui/Header";
import Hero from "@/widgets/hero/ui/Hero";
import Logos from "@/widgets/logos/ui/Logos";
import Vacancy from "@/widgets/vacancy/ui/Vacancy";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Logos />
      <Vacancy />
      <Categorys />
      <Footer />
      <AuthModal />
    </div>
  );
}
