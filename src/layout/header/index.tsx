'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';

// Local Components
import { Magnetic } from '@/shared/components';

// Utils
import { paths } from '@/routes/paths';
import { MoodOption } from '@/types/shared';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
type NavBarProps = {
  isAboutPage: boolean,
  isContactPage: boolean,
  mood: MoodOption
};

function NavBar({ isAboutPage, isContactPage, mood }: NavBarProps) {
  /* ----------------- CONSTANTS ------------------ */
  if (isAboutPage && !mood) return null;
  const HEADER_STYLE = {
    ...(isAboutPage && { color: mood?.text_color }),
    ...(isContactPage && { color: '#fff' })
  };

  const { links: { root, project,  about, contact } } = paths;

  /* ***************** RENDERING ****************** */
  return (
    <nav style={HEADER_STYLE} className={`${styles.headerContainer} w-screen`}>
      <div className='flex justify-between items-center container'>
        <Link href={root} prefetch={true}><h1>ZK</h1></Link>
        <div className={`${styles.links} flex`}>
          <Link href={project.list} prefetch={true}><Magnetic><h6>Work</h6></Magnetic></Link>
          <Link href={about} prefetch={true}><Magnetic><h6>About</h6></Magnetic></Link>
          <Link href={contact} prefetch={true}><Magnetic><h6>Let&apos;s Talk</h6></Magnetic></Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;