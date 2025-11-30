/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// UI Local Components
import { 
  AboutMeSection, 
  HeroSection, 
  SelectedDesignSection, 
  SelectedWorkSection 
} from "@/componets";

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Home() {
  /* ***************** RENDERING ****************** */
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SelectedWorkSection />
      <SelectedDesignSection />
    </>
  );
};

export default Home;