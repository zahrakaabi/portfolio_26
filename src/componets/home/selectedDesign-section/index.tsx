'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import Image from 'next/image';

// UI Local Components
import SectionTitle from '../../../shared/components/section-title';
import CtaButton from '../../../shared/components/cta-button';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                          SELECTED DESIGN COMPONENT                         */
/* -------------------------------------------------------------------------- */
function SelectedDesignSection() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <section className={`${styles.services} pos-r container`}>
        <div className={`${styles.descp} w-screen`}>
            <SectionTitle sectionTitle='UI Services' />
            <div className={styles.content}>
                <div className={styles.btn}>
                    <h2>Z.</h2>
                    <div className={styles.circleText}>
                        <Image src='/assets/images/home/selectedDesign-section/Group.png' alt='services' fill />
                    </div>
                </div>
                <div>
                    <p> 
                        Beyond just writing code, Zahra brings a passion for design to her work. Driven by a love for creativity, she dove deep into learning how to transform spaces into captivating visuals, turning abstract ideas into functional, beautiful designs that speak to both the mind and the eye.
                    </p>
                    <div className='w-fit-content'>
                        <CtaButton link='/work?filter=design' content='More design' value='design' />
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.imgContainer} w-screen pos-r`}>
            <Image className="img object-contain" 
                src='/assets/images/home/selectedDesign-section/beauty.gif' 
                alt='ui design of a beauty store (e-commerce)'
                width={500}
                height={500}
            />
        </div>
    </section>
  )
}

export default SelectedDesignSection;