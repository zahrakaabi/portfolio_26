'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// UI Local Components
import NavBar from '@/layout/header';
//import About from '@/components/about-page-components';
import Footer from '@/layout/footer';

// _Mocks
import { MOOD_OPTIONS } from '@/_mocks';

// Styles
import '@/shared/styles/styles.globals.scss';
//import styles from '@/components/about-page-components/index.module.scss';

/* -------------------------------------------------------------------------- */
/*                           CLIENT LAYOUT COMPONENT                          */
/* -------------------------------------------------------------------------- */
function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
/* ---------------------------------- HOOKS --------------------------------- */
  const pathname = usePathname();
  const [isClient, setIsClient] = useState<boolean>(false);
  const [moodIndex, setMoodIndex] = useState<number>(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const stored = localStorage.getItem("moodIndex");
    if (stored) setMoodIndex(parseInt(stored, 10));
  }, [isClient]);

  if (!isClient) return null;

/* -------------------------------- CONTSANTS ------------------------------- */
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';

  /*const handleMood = () => {
    const imageContainer = document.querySelector(`.${styles.imageContainer}`);
    if (!imageContainer) return;

    imageContainer.classList.add('fade-out');
    setTimeout(() => {
      setMoodIndex((prev) => prev < MOOD_OPTIONS.length - 1 ? prev + 1 : 0);
      imageContainer.classList.remove('fade-out');
    }, 500);
  };*/

  const mood = MOOD_OPTIONS[moodIndex];

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
      <NavBar
        isAboutPage={isAboutPage}
        isContactPage={isContactPage}
        mood={mood}
      />
      {children}
      <Footer />
    </>
  );
};

export default  ClientLayout;