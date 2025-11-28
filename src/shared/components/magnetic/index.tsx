/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { ReactElement, useEffect, useRef } from 'react'
import gsap from 'gsap';

/* -------------------------------------------------------------------------- */
/*                                    TYPE                                    */
/* -------------------------------------------------------------------------- */
type MagneticProps = {
    children: ReactElement, 
    style?: React.CSSProperties;
};

/* -------------------------------------------------------------------------- */
/*                             MAGNETIC COMPONENT                             */
/* -------------------------------------------------------------------------- */
function Magnetic({children, style}: MagneticProps) {
/* ---------------------------------- HOOKS --------------------------------- */
    const magnetic = useRef<HTMLDivElement | null>(null);

    useEffect( () => {
        if (!magnetic.current) return;

        const el = magnetic.current;

        const xTo = gsap.quickTo(el, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(el, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = el.getBoundingClientRect();
            const x = clientX - (left + width/2);
            const y = clientY - (top + height/2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };
    
        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [children]);
/* -------------------------------- RENDERING ------------------------------- */
    return <div style={style} ref={magnetic}>{children}</div>;
};

export default Magnetic;