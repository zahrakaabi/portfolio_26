/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import Image from 'next/image';
import { useState } from 'react';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                                 BLUR IMAGE                                 */
/* -------------------------------------------------------------------------- */
type BlurImageProps = {
    imageLink: string,
    width: number,
    height: number
};

const BlurImage = ({ imageLink, width, height }: BlurImageProps) => {
/* ---------------------------------- HOOKS --------------------------------- */
   const [loading, setLoading] = useState<boolean>(true);

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <div className={`${loading ? styles.loading : ''} pos-r`}>
            <Image
                src={imageLink}
                alt="image"
                priority={true}
                onLoad={() => setLoading(false)}
                width={width}
                height={height}
            />
        </div>
    )
}

export default BlurImage;