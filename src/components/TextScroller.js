
import React, { useEffect, useRef, useState } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const TextScroller = ({ children }) => {
    const { height, width } = useWindowDimensions();
    const ref = useRef(null);
    const [vis, setVis] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const r = ref.current.getBoundingClientRect()
            setVis(1 - Math.pow(r.top / (height), 2))
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