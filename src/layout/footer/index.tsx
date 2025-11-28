'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';

// Local Components
import { paths } from '@/routes/paths';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Footer() {
  /* ----------------- CONSTANTS ------------------ */
  const { links: { project, about, contact } } = paths;
  
  /* ***************** RENDERING ****************** */
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerContactCredits} container`}>
          <div className={styles.footerCol}>
            <div className={styles.contactLinksList}>
              <ul>
                <li><a href='' target='blank'>Dribbble</a></li>
                <li><a href='' target='blank'>Medium</a></li>
                <li><a href='' target='blank'>Github 1</a></li>
                <li><a href='' target='blank'>Github 2</a></li>
                <li><a href='' target='blank'>LinkedIn</a></li>
              </ul>
            </div>
            <div className={styles.contactLinksList}>
              <span>kaabizahra@gmail.com</span>
            </div>
          </div>

          <div className={styles.footerCol}>
            <div className={styles.fontsCredits}>
              <span>Want to know more?</span>
              <br></br>
              <Link href={contact} prefetch={true}><span>Contact me</span></Link>
            </div>
            <div className={styles.fontsCredits}>
              <Link href={project.list} prefetch={true}><span>Work</span></Link>
              <br></br>
              <Link href={about} prefetch={true}><span>About</span></Link>
            </div>
          </div>

          <div className={`${styles.footerCol} flex flex-row items-end justify-between`}>
            <div className={styles.credits}>
              Development by
              <br></br>
              <Link href={about} prefetch={true} title='about zahra' rel='noopener noreferrer'>
                zahra kaabi
              </Link>
            </div>
            <button type="button" 
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
              Back to top
            </button>
          </div>
        </div>
        <h5>ZAHRA KAABI</h5> {/* GET IN TOUCH */}
      </div>
    </footer>
  )
}

export default Footer;