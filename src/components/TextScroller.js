
import React, { useEffect, useRef, useState } from 'react';

const TextScroller = ({ children }) => {
    const ref = useRef(null);
    const [vis, setVis] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const r = ref.current.getBoundingClientRect()
            setVis(1 - Math.pow(r.top / 500, 2))
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="bg-stone-800" ref={ref}>
            <div className='' style={{ opacity: vis }}>
                {children}
            </div>
        </div>
    )
}
export default TextScroller