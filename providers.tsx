'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

/* -------------------------------------------------------------------------- */
/*                                    TYPE                                    */
/* -------------------------------------------------------------------------- */
type ProvidersProps = {
  children: ReactNode;
};

/* -------------------------------------------------------------------------- */
/*                            PROVIRDERS COMPONENT                            */
/* -------------------------------------------------------------------------- */
function Providers({ children }: ProvidersProps) {
/* ---------------------------------- HOOKS --------------------------------- */
   const [mounted, setMounted] = useState<boolean>(false);

   useEffect(() => {
      const timer = setTimeout(() => setMounted(true), 0);
      return () => clearTimeout(timer);
   }, []);

   if (!mounted) return <> {children} </>;
/* -------------------------------- RENDERING ------------------------------- */
   return <ThemeProvider> {children} </ThemeProvider>
};

export default Providers;