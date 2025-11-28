/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import { ReactNode } from "react";

// UI Local Components
import ClientLayout from "./ClientLayout";

/* ------------------------------------------------ */
/*                      META DATA                    */
/* ------------------------------------------------ */
export const metadata = {
  title: 'Zahra_Kaabi',
  description: 'Designed and created by Zahra Kaabi',
};

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  /* ***************** RENDERING ****************** */
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
};

export default RootLayout;