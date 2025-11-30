'use client';

/* -------------------------------------------------------------------------- */
/*                               DEEPENDENICIES                               */
/* -------------------------------------------------------------------------- */
// Local UI Components
import { CtaButton, Project, SectionTitle } from '@/shared/components';

// _Mocks
import { projects } from '@/_mocks';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                            SELECTED WORK SECTION                           */
/* -------------------------------------------------------------------------- */
function SelectedWorkSection() {
/* -------------------------------- CONSTANTS ------------------------------- */
    const PROJECTS_NUM = 4;
    
/* -------------------------------- RENDERING ------------------------------- */
    return (
        <section className='flex flex-column items-center container'>
            <div className={`${styles.selectedWorkContainer} w-screen`}>
                <SectionTitle sectionTitle='Some of my selected work' />
                <div className={styles.homeWorkGrid}>
                    {projects?.slice(0,PROJECTS_NUM)?.map((project) => <Project 
                        key={project.$id}
                        project={project}
                    />)}
                </div>
            </div>
            <CtaButton link='/work?filter=all' content='More work' value='development' />
        </section>  
    )
}

export default SelectedWorkSection;