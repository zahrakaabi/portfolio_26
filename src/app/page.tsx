/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// UI Local Components
import { AboutMeSection, HeroSection, SelectedWorkSection } from "@/componets";

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
    </>
  );
};

export default Home;