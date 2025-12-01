'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// UI Local Components
import { CtaButton, Project } from '@/shared/components';

// APIs
import { projects } from '@/_mocks';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                             WORK PAGE COMPONENT                            */
/* -------------------------------------------------------------------------- */
function Work() {
/* ---------------------------------- HOOKS --------------------------------- */
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter') || 'all';
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    if (selectedFilter !== filterParam) {
      requestAnimationFrame(() => setSelectedFilter(filterParam));
    };
  }, [filterParam, selectedFilter]);

  const filteredProjects = useMemo(() => {
    const lower = selectedFilter.toLowerCase();
    if (lower === 'all') return projects;
    if (lower === 'design')
      return projects.filter((p) => p.details.toLowerCase().includes('design'));
    if (lower === 'development')
      return projects.filter((p) => p.details.toLowerCase().includes('development') || p.details.toLowerCase().includes('build'));
    return projects;
  }, [selectedFilter]);

/* -------------------------------- CONSTANTS ------------------------------- */
  const handleFilterClick = (filter: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set('filter', filter);
    router.push(`/work?${params.toString()}`, { scroll: false });
    setSelectedFilter(filter);
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className={`${styles.workPage} container`}>
      <h1 className={styles.workPageTitle}>
        Curious to see what we build ?
      </h1>
      <div className="flex flex-wrap gap-1">
        {['all', 'design', 'development'].map((type) => <CtaButton 
          key={type} 
          content={type} 
          value={type}
          selectedFilter={selectedFilter} 
          onClick={() => handleFilterClick(type)} 
        />)}
      </div>
      <div className={styles.projects}>
        {filteredProjects.length > 0
          ? filteredProjects?.map((project) => <Project key={project.$id} project={project} />)
          : <div className='loader'></div>
        }
      </div>
    </div>
  )
}

export default Work;