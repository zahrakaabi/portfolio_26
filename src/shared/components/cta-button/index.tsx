'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';

// UI Local Components
import Magnetic from '../magnetic';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                       TYPE                       */
/* ------------------------------------------------ */
type CtaButtonProps = {
  link?: string,
  content: string,
  value: string,
  selectedFilter?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function CtaButton({ link, content, value, selectedFilter, onClick }: CtaButtonProps) {
  /* ----------------- Constants ------------------ */
  const className = `
    ${styles.ctaBtn} 
    ${selectedFilter === value ? styles.active : ''} 
    ${selectedFilter !== value ? 'animated' : ''} 
    d-block w-fit-content
  `; 

  /* ***************** RENDERING ****************** */
  return <Magnetic>
    <div className='w-fit-content'>
      {link ? (
        <Link href={link} className={className}>
          <span>{content}</span>
        </Link>
      ) : (
        <button className={className} value={value} onClick={onClick}>
          <span>{content}</span>
        </button>
      )}
    </div>
  </Magnetic>
};

export default CtaButton;