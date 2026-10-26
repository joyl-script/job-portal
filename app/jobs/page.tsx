import Footer from "@/widgets/footer/ui/Footer";
import Header from "@/widgets/header/ui/Header";
import HeroSections from "@/widgets/HeroSections/HeroSections";
import Vacancy from "@/widgets/vacancy/ui/Vacancy";
import FilterSidebar from "@/features/search-jobs/ui/FilterSidebar";



export default function Jobs() {
  return (
    <div>
      <Header hideAuth />
      <HeroSections
        title="Jobs"
      />
      <div className="flex flex-col md:flex-row container gap-10">
        <div className="w-full md:w-auto md:shrink-0 mt-10 md:mt-56">
          <FilterSidebar />
        </div>

        <div className="flex-1 w-full">
          <Vacancy
            desc="Showing 6-6 of 10 results"
            noContainer
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}