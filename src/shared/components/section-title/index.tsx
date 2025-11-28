/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
type SectionTitleProps = {
  sectionTitle: string
};

function SectionTitle({sectionTitle}: SectionTitleProps) {
  /* ***************** RENDERING ****************** */
  return (
    <div className={styles.sectionTitle}>
      <h6> {sectionTitle} </h6>    
    </div>
  )
}

export default SectionTitle;