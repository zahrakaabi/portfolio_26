/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// UI Local Components
import { AboutMeSection, HeroSection } from "@/componets";

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Home() {
  /* ***************** RENDERING ****************** */
  return (
    <>
      <HeroSection />
      <AboutMeSection />
    </>
  );
};

export default Home;