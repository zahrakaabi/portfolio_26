'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// UI Local Component
import { CtaButton, slideUp } from '@/shared/components';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function AboutMeSection() {
  /* ****************** hooks ********************* */
  const descriptionRef = useRef(null);
  const isInView = useInView(descriptionRef);

  /* ***************** CONSTANTS ****************** */
  const description = "Let's collaborate towards a impactful experience of creativity, helping YOU stand out in the digital era and crafting seamless user interfaces that invite engagement.";

  /* ***************** RENDERING ****************** */
  return (
    <div className={`${styles.aboutMeContainer} container`}>
      <div ref={descriptionRef} className={styles.aboutMeContent}>
        <h2>Creative soul dedicated to turn spaces into meaningfull shapes.</h2>
        <div className={styles.description}>
          <p>
            {description.split(" ").map((word, index) => {
              return <span key={index} className={styles.mask}>
                  <motion.span  variants={slideUp} 
                  custom={index} 
                  animate={isInView ? "open" : "closed"} 
                  key={index}>
                    {word}
                  </motion.span>
                </span>
              })
            }
          </p>
          <div className='w-fit-content'>
            <CtaButton link='/about' content='About her' value="about" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection;