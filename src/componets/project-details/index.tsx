'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import { useState, useEffect } from 'react';
import Image from 'next/image';

// UI Local Components
import { Magnetic } from '@/shared/components';

// APIs
import { projects } from '@/_mocks';

// Styles
import styles from "./index.module.scss";

/* ------------------------------------------------ */
/*                       TYPE                       */
/* ------------------------------------------------ */
type ProjectDetailsProps = {
  projectId: string;
};

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function ProjectDetails({ projectId }: ProjectDetailsProps) {
  /* ******************* HOOKS ******************** */
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsClient(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!isClient) return null;

  /* ***************** RENDERING ****************** */
  return (
    <main className={styles.projectDetailsContainer}>
      <div className={styles.overlay}></div>
      {projects?.filter((product) => product.$id === projectId)?.map((product) => {
        const { $id, title_1, title_2, description, techs, image, video } = product;
        return (
          <div key={$id} className="container">
            <div className={styles.projectdetails}>
              <h1> {title_1}{title_2} </h1>
              <p> {description} </p>
              <div className={`${styles.techs} flex flex-wrap items-center`}>
                {techs.map((tech) => <span className={styles.techItem}>
                  {tech}
                </span>)}
              </div>
              <div className={styles.viewWrapper}>
                <div className="w-fit-content">
                  <Magnetic>
                    <button className="animated" type="button">
                      <span>View</span>
                      <span className="arrow">&nbsp;&#129109;</span>
                    </button>
                  </Magnetic>
                </div>
                <div className={`${styles.divider} container`} />
              </div>
            </div> 

            {video ? 
              <div className={styles.projectPlayer}>
                <Image className={styles.deviceImg}
                  src='/assets/images/project-details/device-mbp-16-lower.png'
                  alt='laptop mockup'
                  width={1920} 
                  height={1200}
                  style={{ width: '100%', height: 'auto'}}
                  loading="eager"
                />
                <div className={styles.videoWrapper}>
                  <video width="320" 
                  height="240" 
                  autoPlay
                  controls 
                  loop
                  preload="none">
                    <source src={`/assets/images/projects/${video}`} type="video/mp4" />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>            
                </div>
              </div> :
              <Image className={`${styles.projectImg} w-screen`} 
                src={`/assets/images/projects/${image}`} 
                width={300} 
                height={200} 
                alt='device' 
              />
            }
          </div>
        )
      })}
    </main>
  );
}
  
export default ProjectDetails;